import { expect } from 'chai';
import sinon from 'sinon';

const mod = require('./index');

describe('mod', () => {
  it('should stub function', () => {
    const stub = sinon.stub(mod, '_myFunc').callsFake(() => {
      console.log('223344');
    });
    mod._myFunc();
    expect(stub.calledOnce).to.be.true;
  });
});
