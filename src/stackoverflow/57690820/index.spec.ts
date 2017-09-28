import proxyquire from 'proxyquire';
import sinon from 'sinon';
import { expect } from 'chai';

const ip1 = '192.168.1.114';
const mockedInterfaces = {
  en0: [
    {
      address: 'fe80::3e07:54ff:fe66:f0f8',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6' as 'IPv6',
      mac: '3c:07:54:66:f0:f8',
      scopeid: 4,
      internal: false,
      cidr: '::1/128'
    },
    {
      address: ip1,
      netmask: '255.255.255.0',
      family: 'IPv4' as 'IPv4',
      mac: '3c:07:54:66:f0:f8',
      internal: false,
      cidr: '127.0.0.1/8'
    }
  ]
};

describe('Something', () => {
  it('Returns the mock', () => {
    const networkInterfacesStub = sinon.stub().returns(mockedInterfaces);
    const { Something } = proxyquire('./', {
      os: {
        networkInterfaces: networkInterfacesStub
      }
    });
    const something = new Something();
    const interfaces = something.getInterfaces();
    expect(interfaces).to.deep.equal(mockedInterfaces);
    expect(networkInterfacesStub.calledOnce).to.be.true;
  });
});
