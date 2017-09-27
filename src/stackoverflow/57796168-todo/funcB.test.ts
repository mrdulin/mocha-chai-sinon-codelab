import { expect } from 'chai';
import sinon from 'sinon';
import * as a from './a';
import { funcB } from './funcB';

describe('57796168', () => {
  let sandbox: sinon.SinonSandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  it('should call a.funcA', () => {
    const funcAStub = sandbox.stub(a, 'funcA');
    funcB();
    expect(funcAStub.calledWith({ args: 123 })).to.be.true;
  });
});
