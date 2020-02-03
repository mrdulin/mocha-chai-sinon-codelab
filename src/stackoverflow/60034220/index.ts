import { ProductModel } from "./model";

function getProduct(id: string) {
  return ProductModel.findById(id).lean();
}

export { getProduct };
