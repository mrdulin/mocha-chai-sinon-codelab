exports.listFiles = async (req, res) => {
  const bucketName = req.body.bucket || req.query.bucket;
  const { Storage } = require("@google-cloud/storage");
  const storage = new Storage();

  const [files] = await storage.bucket(bucketName).getFiles();
  const result = [];
  files.forEach((file) => {
    result.push(file.name);
  });
  res.status(200).send(result);
};
