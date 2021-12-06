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
      ans.user = JSON.parse(
        JSON.stringify(await dataSources.userAPI.updateUser(user.user))
      );
      ans.user = ans.user.body;
      ans.profile = JSON.parse(
        JSON.stringify(
          await dataSources.portafoliosAPI.updateProfile(user.profile, user.id)
        )
      );
      ans.profile.formacion = JSON.parse(ans.profile.formacion);
      ans.profile.trabajo = JSON.parse(ans.profile.trabajo);
      for (let tr in ans.profile.trabajo) {
        let st = JSON.stringify(ans.profile.trabajo[tr].funciones).replace(
          /'/g,
          '"'
        );
        st = st.substring(1, st.length - 1);
        ans.profile.trabajo[tr].funciones = JSON.parse(st);
      }
      return ans;
    },
  },
};

module.exports = userResolver;
