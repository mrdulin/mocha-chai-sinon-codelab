import "reflect-metadata";
import sinon from "sinon";
import { TYPES } from "./types";
import { IDemoController, IDemoRoute } from "./interfaces";
import { container } from "./inversify.config";
import { DemoController } from "./demoController";
import { expect } from "chai";

const sandbox = sinon.createSandbox();

describe("Demo Spec 2", () => {
  const demoController = container.get<IDemoController>(TYPES.IDemoController);
  let insertStub: sinon.SinonStub<any, any>;
  beforeEach(() => {
    insertStub = sandbox.stub(DemoController.prototype, "create");
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Should call demo route url", async () => {
    const demoData = { validData: {} };
    const demoRoute = container.get<IDemoRoute>(TYPES.IDemoRoute);
    // different demoController instances
    expect(demoRoute["_demoController"]).not.to.be.equal(demoController);
    insertStub.returns(Promise.resolve({ body: { name: "test xyz", code: "test abc" } }));
    const nextStub = sinon.stub();
    const result = await demoRoute.create(
      { body: demoData.validData } as any,
      { send: (params) => params } as any,
      nextStub,
    );
    sinon.assert.calledOnce(insertStub);
  });
});
