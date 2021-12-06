const userResolver = {
  Query: {
    userDetail: async (_, { userId }, { dataSources, userIdToken }) => {
      if (userId == userIdToken) {
        let ans = {};
        ans.user = await dataSources.userAPI.userDetail(userId);
        ans.profile = await dataSources.portafoliosAPI.profileDetail(userId);
        return ans;
      } else return null;
    },
  },
  Mutation: {
    registUser: async (_, { user }, { dataSources }) => {
      let userAns = await dataSources.userAPI.registUser(user);
      await dataSources.portafoliosAPI.createProfile({
        usuario: userAns.body,
        formacion: [],
        trabajo: [],
      });
      return userAns;
    },

    login: async (_, { credentials }, { dataSources }) => {
      return await dataSources.userAPI.login(credentials);
    },

    updateUser: async (_, { user }, { dataSources }) => {
      let ans = {};
      ans.user = await dataSources.userAPI.updateUser(user.user);
      ans.profile = await dataSources.portafoliosAPI.updateProfile(
        user.profile,
        user.id
      );
      return ans;
    },
  },
};

module.exports = userResolver;
