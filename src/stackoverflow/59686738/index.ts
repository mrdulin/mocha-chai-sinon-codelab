import { AdmZip } from "./admZip";
import { ZipDecompressionError } from "./zipDecompressionError";

export class ZippedFileBlaBla {
  zip: AdmZip;
  constructor(zipData: Buffer) {
    try {
      this.zip = new AdmZip(zipData);
    } catch (err) {
      throw new ZipDecompressionError(`Invalid ZIP file, error: ${err}`);
    }
  }
}
