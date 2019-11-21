const proxyquire = require("proxyquire");
const sinon = require("sinon");
const { expect } = require("chai");

describe("code", function() {
  let generateUrlStub, tokenStub, code;
  before(() => {
    generateUrlStub = sinon.stub().returns("http://example.com");
    tokenStub = sinon.stub().returns({ tokens: "tokens" });

    code = proxyquire("./", {
      "google-auth-library": {
        OAuth2Client: sinon.stub().callsFake(() => {
          return {
            generateAuthUrl: generateUrlStub,
            getToken: tokenStub
          };
        })
      }
    });
  });
  afterEach(() => {
    sinon.restore();
  });

  it("should call generateAuthUrl", async function() {
    const output = await code.getRedirectUrl();
    expect(output).to.be.eq("http://example.com");
    sinon.assert.called(generateUrlStub);
  });
});
