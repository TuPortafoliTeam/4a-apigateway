const userResolver = {
  Query: {
    userDetail: async (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) return dataSources.userAPI.userDetail(userId);
      else return null;
    },
  },
  Mutation: {
    registUser: async (_, { user }, { dataSources }) => {
      return await dataSources.userAPI.registUser(user);
    },

    login: async (_, { credentials }, { dataSources }) => {
      return await dataSources.userAPI.login(credentials);
    },

    updateUser: async (_, { user }, { dataSources }) => {
      return await dataSources.userAPI.updateUser(user);
    },
  },
};

module.exports = userResolver;
