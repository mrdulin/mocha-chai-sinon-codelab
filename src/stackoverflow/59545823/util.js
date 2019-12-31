const AWS = require("aws-sdk");
const zlib = require("zlib");
const readline = require("readline");
const s3 = new AWS.S3();

const logger = {
  error: console.error,
};
const csvParser = {
  parse() {},
};

const util = {
  s3FileTypeDetector: function(s3Details, callback) {
    const params = {
        Bucket: s3Details.bucket,
        Key: s3Details.key,
      },
      s3ReadStream = s3
        .getObject(params, function(err) {
          if (err) {
            logger.error(`Error while reading S3 Object: ${err}`);
            return callback(err);
          }
        })
        .createReadStream()
        .on("error", function(error) {
          logger.error(`error during readstream init: ${error}`);
          return callback(error);
        }),
      decompressor = zlib.createGunzip().on("error", function(error) {
        logger.error(`error during gunzip init: ${error}`);
        return callback(error);
      }),
      readOneLine = readline.createInterface({
        input: s3ReadStream.pipe(decompressor),
        output: process.stdout,
      });
    let dataToSend = {};

    readOneLine.on("line", function(line) {
      try {
        JSON.parse(line);
        dataToSend = { fileType: "JSON" };
      } catch (error) {
        try {
          csvParser.parse(line);
          dataToSend = { fileType: "CSV", delimiter: csvParser.detect(line) };
        } catch (err) {
          readOneLine.close();
          return callback(err);
        }
      }

      readOneLine.close();
      callback(null, dataToSend);
    });
  },
};

module.exports = util;
