import axios from "axios";

class Request {
  private instance = axios.create();
  private headers = {};

  constructor() {
    this.instance.interceptors.response.use(
      ({ data }) => {
        return data;
      },
      (error) => {
        return Promise.reject(error.response.data);
      }
    );
  }

  public setBaseURL(baseURL: string): void {
    this.instance.defaults.baseURL = baseURL;
  }

  public setAuthorization(token: string): void {
    this.headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  public async get<T>(path: string, headers?: object): Promise<T> {
    return this.instance.get(path, {
      ...this.headers,
      ...headers,
    });
  }

  public async post<T>(
    path: string,
    data: object,
    headers?: object
  ): Promise<T> {
    return this.instance.post(path, data, {
      ...this.headers,
      ...headers,
    });
  }

  public async put<T>(
    path: string,
    data: object,
    headers?: object
  ): Promise<T> {
    return this.instance.put(path, data, {
      ...this.headers,
      ...headers,
    });
  }

  public async patch<T>(
    path: string,
    data: object,
    headers?: object
  ): Promise<T> {
    return this.instance.patch(path, data, {
      ...this.headers,
      ...headers,
    });
  }

  public async delete<T>(path: string, headers?: object): Promise<T> {
    return this.instance.delete(path, {
      ...this.headers,
      ...headers,
    });
  }
}

export { Request };
