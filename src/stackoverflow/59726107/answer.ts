const tableName = "attempts";

export const typeDef = `
  extend type Query {
    attempt(id: String): Attempt!
  }

  extend type Mutation {
    createAttempt(questionId: String!, attemptId: String!, choiceId: String): Attempt
  }

  type Attempt {
    id: String!
    correctanswers: Int!
    userid: String!
    examid: String!
  }
`;

export const resolvers = {
  Query: {
    attempt(_, { id = "" }, { db }) {
      return db
        .query(tableName)
        .where({ id })
        .first();
    },
  },
  Mutation: {
    async createAttempt(root, args, { db }) {
      const [answer] = await db
        .query(tableName)
        .insert(args)
        .returning("*");

      return answer;
    },
  },
};
