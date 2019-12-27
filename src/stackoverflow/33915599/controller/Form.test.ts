import { assert } from "chai";
import sinon from "sinon";
import proxyquire from "proxyquire";

let mocks: any = {};

describe("Form controller", () => {
  describe("New Forms controller", () => {
    beforeEach(() => {
      mocks.app = {
        settings: {
          content: "/content/path/",
          views: "/views/path/",
        },
      };
      mocks.model = sinon.stub();
      const { default: controller } = proxyquire("./Form", {
        "../models/Form": {
          default: mocks.model,
        },
      });
      mocks.controller = new controller(mocks.app);
    });

    afterEach(() => {
      mocks = null;
    });

    it("Instantiates a model", () => {
      assert.isTrue(mocks.model.calledWith(mocks.app.settings.content));
    });
  });
});
