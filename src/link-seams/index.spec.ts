import { expect } from 'chai';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import path from 'path';

describe('link seams', () => {
  const filepath = path.resolve(__dirname, 'aaa');
  it('will not stub fs.existsSync method', () => {
    const fs = require('fs');
    const doesFileExist = require('./');
    const existsSyncStub = sinon.stub(fs, 'existsSync');
    const actual = doesFileExist(filepath);
    expect(existsSyncStub.calledWith(filepath)).to.be.true;
    expect(actual).to.be.undefined;
  });

  it('should return `true`', () => {
    const existsSyncStub = sinon.stub().returns(true);
    const doesFileExist = proxyquire('./', {
      fs: {
        existsSync: existsSyncStub
      }
    });
    const actual = doesFileExist(filepath);
    expect(actual).to.be.true;
    expect(existsSyncStub.calledWith(filepath)).to.be.true;
  });
});
