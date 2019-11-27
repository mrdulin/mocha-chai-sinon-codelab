const validate = require("./validate");

function to_json(data) {
  return null;
}

function sendErrorResponse(req, res, code, msg) {
  const resBody = {
    msg: msg,
  };
  res.status(code);
  res.send(resBody);
}

export function validateTicketReqs(req, res, next, flag, num) {
  const payload = req.body;
  const ticket = payload.ticket ? payload.ticket : null;
  const error_msg = "Failed to obtain a successful response ";

  return validate.validateTicket(ticket).then((resolution) => {
    const json = to_json(resolution);
    if (json === null || !("body" in json)) {
      return sendErrorResponse(req, res, 500, "error");
    }
  });
}
