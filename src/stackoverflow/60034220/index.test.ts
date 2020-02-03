import { stub, assert } from "sinon";
import { getProduct } from "./";
import { ProductModel } from "./model";

describe("60034220", () => {
  it("should pass", () => {
    const product_id = "1";
    const leanStub = stub().returns({ total: 12 });
    const findByIdStub = stub(ProductModel, "findById").returns({
      lean: leanStub,
    });
    getProduct(product_id);
    assert.calledWithExactly(findByIdStub, product_id);
    assert.calledOnce(leanStub);
  });
});
