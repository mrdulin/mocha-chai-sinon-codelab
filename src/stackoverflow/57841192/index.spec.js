const util = require("util");
const path = require("path");
const fs = require("fs");
const { expect } = require("chai");

const readFile = util.promisify(fs.readFile);

describe("57841192", () => {
  it("Final Decoding Tests", async () => {
    const basepath = path.resolve(__dirname, "./test/test_data");
    const options = { encoding: "utf-8" };
    const readInput = readFile(path.join(basepath, "booksEncoded.txt"), options);
    const readOutput = readFile(path.join(basepath, "books.xml"), options);
    const [input, output] = await Promise.all([readInput, readOutput]);
    expect(input).to.be.equal("haha");
    expect(output).to.be.equal("<item>unit test</item>");
    console.log(input);
    console.log(output);
  });
});
