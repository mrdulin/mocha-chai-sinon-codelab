import express from 'express';
import { Router } from 'express';
import rp from 'request-promise';

const app = express();
const router = Router();

router.get('/url', function(req, res) {
  let options = { url: 'http//some-api-en-point', method: 'GET', resolveWithFullResponse: true };
  rp(options)
    .then(function(response) {
      if (response.statusCode == 200) {
        res.send({ data: response.data });
      } else {
        res.status(404).json({ data: 'NOT FOUND' });
      }
    })
    .catch(err => {
      res.send(err);
    });
});

app.use(router);

export { app };
