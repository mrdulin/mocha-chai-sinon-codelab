import { Storage } from "@google-cloud/storage";
const storage = new Storage();

export function abc(req, res) {
  const bucketName = "abc-xyz";
  const fileName = "Sample.json";
  const file = storage.bucket(bucketName).file(fileName);
  const myfile = file.createReadStream();
  let buffer = "";
  myfile
    .on("data", function(a) {
      buffer += a;
    })
    .on("end", function() {
      console.log(buffer);
      res.send(buffer);
    });
}
