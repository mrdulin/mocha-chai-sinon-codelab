const { assert, expect } = require('chai');
const sinon = require('sinon');
const service = require('./service');

it('Should return error.', async function() {
  var stub = sinon.stub(service, 'functionB').returns('functionC');
  var actual = await service.functionA();
  expect(actual).to.be.equal('functionC');
  expect(stub.calledOnce).to.be.true;
});
