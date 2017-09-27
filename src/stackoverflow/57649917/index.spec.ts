import { SomeClass } from './';
import sinon from 'sinon';
import { expect } from 'chai';

describe('57649917', () => {
  it('should stub all methods of SomeClass', () => {
    const stubInstance = sinon.createStubInstance(SomeClass);
    stubInstance.find();
    stubInstance.findById(1);
    expect(stubInstance.find.calledOnce).to.be.true;
    expect(stubInstance.findById.calledWith(1)).to.be.true;
  });
});
