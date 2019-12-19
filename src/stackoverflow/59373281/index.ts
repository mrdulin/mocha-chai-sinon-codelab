import { Storage } from "@google-cloud/storage";
const storage = new Storage();

export async function abc() {
  const bucketName = "xxx-dev";
  const files = await storage.bucket(bucketName).getFiles();
  return files;
}

export async function xyz(res) {
  const bucketName = "xxx-dev";
  return storage
    .bucket(bucketName)
    .file(res.fileName)
    .createReadStream();
}
