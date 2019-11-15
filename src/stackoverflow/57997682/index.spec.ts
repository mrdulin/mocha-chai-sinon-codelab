import { expect } from 'chai';
import sinon from 'sinon';

const Aupdate = require('./');

it.only('should check if function is called or not', function() {
  let reqUpdateAccount = {
    body: {
      Account: 'newAccount1'
    }
  };
  const res = {};
  let spy = sinon.spy(Aupdate, 'getUpdateArgs');
  Aupdate.accountsUpdate(reqUpdateAccount, res);
  expect(spy.calledWith({ Account: 'newAccount1' })).to.be.true;
  sinon.assert.calledOnce(spy);
});
