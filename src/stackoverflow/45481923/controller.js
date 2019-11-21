const _ = require("lodash");
const http = require("http");
const lifxApiProps = { baseUrl: "http://google.com" };

module.exports.getAllRooms = (req, res) => {
  const options = {};
  var selector = req.params.selector;
  options.method = "GET";
  options.url = lifxApiProps.baseUrl + selector;
  options.body = {};
  http.get(options, (error, response, body) => {
    if (error) return Error(error);
    findDups = _.map(body, "group");
    return res.send(_.uniqBy(findDups, "name"));
  });
};
