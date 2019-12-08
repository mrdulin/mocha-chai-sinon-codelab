import * as sb from "@azure/service-bus";

export class MessageService {
  async handleNewMessage() {
    await sb.delay(5000);
  }
}
