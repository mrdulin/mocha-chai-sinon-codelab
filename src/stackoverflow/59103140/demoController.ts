import { IDemoController } from "./interfaces";
import { injectable } from "inversify";

@injectable()
export class DemoController implements IDemoController {
  async create(body) {
    return {};
  }
}
