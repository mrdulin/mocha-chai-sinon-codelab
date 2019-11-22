import request from "request";

export function myRequest(targetUrl, reqBody) {
  return new Promise((resolve, reject) => {
    request.post(targetUrl, { json: reqBody }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(body.transferId);
      } else {
        reject(error || body.description || body);
      }
    });
  });
}
