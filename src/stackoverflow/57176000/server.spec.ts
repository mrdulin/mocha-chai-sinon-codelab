import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
chai.use(chaiHttp);

const mData = {
  id: '3f3e2b23e96c5250441d4be2340010ed',
  email: 'let@example.com',
  status: '1'
};

describe('Test: /URL', () => {
  it('should return Status 200', done => {
    const mResponse = { statusCode: 200, data: mData };
    const mRp = sinon.stub().resolves(mResponse);
    const { app } = proxyquire('./server', {
      'request-promise': mRp
    });

    chai
      .request(app)
      .get('/url')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(mRp.calledWith({ url: 'http//some-api-en-point', method: 'GET', resolveWithFullResponse: true }));
        done();
      });
  });

  it('should return status 404', done => {
    const mResponse = { statusCode: 500, data: mData };
    const mRp = sinon.stub().resolves(mResponse);
    const { app } = proxyquire('./server', {
      'request-promise': mRp
    });

    chai
      .request(app)
      .get('/url')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
        expect(res.body).to.deep.equal({ data: 'NOT FOUND' });
        expect(mRp.calledWith({ url: 'http//some-api-en-point', method: 'GET', resolveWithFullResponse: true }));
        done();
      });
  });

  it('should send error', done => {
    const mError = 'network error';
    const mRp = sinon.stub().rejects(mError);
    const { app } = proxyquire('./server', {
      'request-promise': mRp
    });

    chai
      .request(app)
      .get('/url')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.equal({ name: 'network error' });
        expect(res).to.have.status(200);
        expect(mRp.calledWith({ url: 'http//some-api-en-point', method: 'GET', resolveWithFullResponse: true }));
        done();
      });
  });
});
