module.exports.hasAccessToken = function(req, res, next) {
  console.log("req.session.accessToken", req.session.accessToken);
  if (req.session.accessToken) {
    next();
  } else {
    res.status(401).send("LOGIN_SESSION_ENDED");
  }
};
