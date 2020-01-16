import S3Handler from "./s3Handler";

export class ReportHandler {
  private s3Handler;
  private reportService;

  public constructor(reportService) {
    this.reportService = reportService;

    const accessKey = process.env.AWS_ACCESS_KEY;
    const secretKey = process.env.AWS_SECRET_ACCESS_KEY;
    const bucketName = process.env.AWS_BUCKET_NAME;
    this.s3Handler = new S3Handler(accessKey, secretKey, bucketName);
  }
  public async handleReportAsync(report) {
    try {
      const data = await this.s3Handler.downloadFile(report.id);
      this.reportService.updateFile(report.id, data.Body);
    } catch (error) {
      // TODO
    }
  }
}
