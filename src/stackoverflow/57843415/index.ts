type User = any;

export const model = {
  connection: {
    getRepository(model) {
      return this;
    },
    createQueryBuilder(model) {
      return this;
    },
    where(query, bindings) {
      return this;
    },
    async getOne() {
      return {};
    },
  },
  async find(id: number): Promise<User> {
    const user = await this.connection
      .getRepository("User")
      .createQueryBuilder("user")
      .where("user.id = :id", { id: id })
      .getOne();
    return user;
  },
};
