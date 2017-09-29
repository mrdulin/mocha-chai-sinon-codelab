const geoIP = require('./serviceB');
const sinon = require('sinon');

describe('55848404', () => {
  it('should stub');
  const countryData = { name: '', code: '' };
  const ipStub = sinon.stub(geoIP, 'getCountryByIp').returns(countryData);
});
