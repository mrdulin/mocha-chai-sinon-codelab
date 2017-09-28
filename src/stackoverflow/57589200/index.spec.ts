import { expect } from 'chai';
import sinon from 'sinon';

const mod = require('./');

describe('t', () => {
  it('should call stubbed methods correctly', () => {
    const func3Stub = sinon.stub(mod, 'func3').returns('data');
    const func4Spy = sinon.spy(mod, 'func4');
    const logSpy = sinon.spy(console, 'log');
    const instance = new mod.classA();
    instance.func1();
    expect(func4Spy.calledOnce).to.be.true;
    expect(func3Stub.calledOnce).to.be.true;
    expect(logSpy.calledWith('data')).to.be.true;
  });
});
