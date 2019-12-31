const Parser = {
  parsePDF(path, callback) {
    Parser.extractText(path, function gotResult(err, raw_text) {
      if (err) {
        callback(err);
        return;
      }
      const clean_text = Parser.cleanUp(raw_text);
      callback(null, clean_text);
    });
  },
  extractText(path, callback) {
    callback();
  },
  cleanUp(rawText) {
    return "real clean text";
  },
};

module.exports = Parser;
