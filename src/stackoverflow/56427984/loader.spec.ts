import dotenv from "dotenv";
import sinon from "sinon";
import { expect } from "chai";

describe("SimpleLoader", function() {
  beforeEach(function() {
    this.dotenvSpy = sinon.spy(dotenv, "config");
    this.SimpleLoader = require("./loader").SimpleLoader;
  });

  it("loads correctly using default options", function() {
    const loader = new this.SimpleLoader();
    loader.load();
    expect(this.dotenvSpy.calledOnce).to.be.true;
  });

  afterEach(function() {
    this.dotenvSpy.restore();
  });
});
