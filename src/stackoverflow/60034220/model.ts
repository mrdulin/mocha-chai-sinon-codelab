class ProductModel {
  public static findById(id: string): { lean: () => { total: number } } {
    return { lean: () => ({ total: 0 }) };
  }
}

export { ProductModel };
