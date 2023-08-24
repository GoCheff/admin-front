import { Request } from "../../libs";

import { env } from "../../data";

import { ResponseModel } from "../../entities";

import { UserType } from "../../entities";

class Admin {
  private request = new Request();

  constructor() {
    this.request.setBaseURL(env.standard.API_URL + "/admin");
  }

  public async login({ email, password }: { email: string; password: string }) {
    this.request.setAuthorization("");

    try {
      const data = (await this.request.post("/sign-in", {
        email,
        password,
      })) as any;

      return new ResponseModel<{
        user: UserType;
        token: string;
      }>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async auth({ token }: { token: string }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.get("/auth")) as any;

      return new ResponseModel<UserType>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }
}

const admin = new Admin();

export { admin };
