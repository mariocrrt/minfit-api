const userResolver = {
  Query: {
    users: (_, { req, res }) => {
      return;
    },
    user: (_, { userId }) => {
      return;
    },
  },
  Mutation: {},
};

export default userResolver;
