import AWS from "aws-sdk";

export const AWSSQSUrl = "AWSSQSUrl";

export class AWSSQSCollection {
  private _sqs: AWS.SQS;
  constructor() {
    this._sqs = new AWS.SQS();
  }
  public async sendMessageToQueue(item: any): Promise<void> {
    try {
      const message = {
        MessageBody: JSON.stringify(item),
        QueueUrl: AWSSQSUrl,
      };
      await this._sqs.sendMessage(message).promise();
    } catch (err) {
      throw new Error(`Error adding item to AWS SQS ${err}`);
    }
  }
}
