const sinon = require('sinon');
const { expect } = require('chai');
const proxyquire = require('proxyquire');

describe('main', () => {
  it('should stub myFunc', async () => {
    const myFuncStub = sinon.stub().resolves('fake data');
    const main = proxyquire('./main', {
      './myFunc.js': myFuncStub
    });
    const logSpy = sinon.spy(console, 'log');
    const actual = await main();
    expect(actual).to.be.undefined;
    expect(myFuncStub.calledOnce).to.be.true;
    expect(logSpy.calledWith('fake data')).to.be.true;
  });
});
