export default class ErrorResponse {
  public desc = "";
  public args: any;
  public code: string = "";
  public message: string = "";
  constructor(message, code, desc, args) {
    this.message = message;
    this.desc = desc;
    this.args = args;
    this.code = code;
  }
}
