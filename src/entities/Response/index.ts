type ResponseType<T> = {
  message: string;
  status: string;
  statusCode: number;
  data: T;
};

class ResponseModel<T> implements ResponseType<T> {
  data: T;
  message: string;
  status: string;
  statusCode: number;

  constructor(data: ResponseModel<T>) {
    this.data = data.data;
    this.message = data.message;
    this.status = data.status;
    this.statusCode = data.statusCode;
  }
}

export type { ResponseType };
export { ResponseModel };
