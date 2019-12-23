const { expect } = require("chai");
const sinon = require("sinon");
const { readFileSync } = require("fs");
const path = require("path");
const axios = require("axios");

const htmlFixtureData = readFileSync(path.resolve(__dirname, "./test/fixtures/htmlFixture.html")).toString();

const { getTextBody } = require("./app");

describe("Get text body", () => {
  let sandbox = sinon.createSandbox();
  beforeEach(() => (sandbox = sinon.createSandbox()));
  afterEach(() => (sandbox = sandbox.restore()));

  it("should return the text body from the html website", async () => {
    sandbox.stub(axios, "get").resolves(htmlFixtureData);
    const actual = await getTextBody("http://www.fake-website.com/");
    expect(actual).to.be.equal(htmlFixtureData);
    sandbox.assert.calledWith(axios.get, "http://www.fake-website.com/");
  });
});
