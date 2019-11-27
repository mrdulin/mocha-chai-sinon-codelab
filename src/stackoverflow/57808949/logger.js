module.exports = function logger(req, filename) {
  function log(message) {
    console.log(message);
  }
  log.error = function error(error, message) {
    console.error(message);
  };
  return log;
};
