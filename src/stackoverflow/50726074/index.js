const MyClass = require("./api");
const apiInstance = new MyClass();

exports.getMyThings = (req) => {
  const reqOpts = {
    qs: req.query,
  };

  return apiInstance.get(req.route, reqOpts);
};
