import * as os from "os";

export class Something {
  getInterfaces() {
    return os.networkInterfaces();
  }
}
