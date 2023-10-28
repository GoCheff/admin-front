import { Request } from "../../libs";

import { env } from "../../data";

import { CheffType, ResponseModel } from "../../entities";

class Cheffs {
  private request = new Request();

  constructor() {
    this.request.setBaseURL(env.standard.API_URL + "/admin/cheffs");
  }

  public async getPending({ token }: { token: string }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.get("/pending")) as any;

      return new ResponseModel<CheffType[]>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async getApproved({ token }: { token: string }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.get("/approved")) as any;

      return new ResponseModel<CheffType[]>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async approve({ token, id }: { token: string; id: number }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.put(`/approve/${id}`, {})) as any;

      return new ResponseModel<CheffType>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }

  public async refuse({ token, id }: { token: string; id: number }) {
    this.request.setAuthorization(token);

    try {
      const data = (await this.request.put(`/refuse/${id}`, {})) as any;

      return new ResponseModel<CheffType>(data);
    } catch (error) {
      throw new ResponseModel<{}>(error as any);
    }
  }
}

const cheffs = new Cheffs();

export { cheffs };
