export default class ErrorResponse {
  public desc = "";
  public args: any;
  public code = "";
  public message = "";
  constructor(message, code, desc, args) {
    this.message = message;
    this.desc = desc;
    this.args = args;
    this.code = code;
  }
}
