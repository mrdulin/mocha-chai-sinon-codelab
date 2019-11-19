import { VMBilling } from './model';
import sinon from 'sinon';
const recordCtrl = require('./controller');

describe('getMultipleRecords()', () => {
  let next = () => {};
  let req = { body: { records: [1, 2, 3] } };
  let res = {};
  afterEach(() => {
    sinon.restore();
  });

  it('Should call VMBilling.findAll()', async function() {
    var findAll = sinon.spy(VMBilling, 'findAll');
    await recordCtrl.getMultipleRecords(req, res, next);
    sinon.assert.calledOnce(findAll);
  });

  it('Should call getDetails()', async function() {
    var gd = sinon.spy(recordCtrl, 'getDetails');
    await recordCtrl.getMultipleRecords(req, res, next);
    sinon.assert.calledOnce(gd);
  });
});
