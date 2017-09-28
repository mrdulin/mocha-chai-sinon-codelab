import request from 'request-promise';

export async function refreshToken(req, res) {
  const token = req.body.token || req.query.token;
  const options = { method: 'POST', url: 'https://github.com/mrdulin' };
  let resp;
  try {
    resp = await request(options);
  } catch (e) {
    console.error(e);
  }
  if (resp) {
    const grant = {
      another_token: {
        token: resp.another_token
      },
      expires_in: resp.expires_in
    };
    res.end(JSON.stringify(grant));
  } else {
    res.status(400).end('not authorized');
  }
}
