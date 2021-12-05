const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.user_api_url;
  }

  async registUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    return await this.post(`/usuario/registro`, user);
  }

  async login(credentials) {
    credentials = new Object(JSON.parse(JSON.stringify(credentials)));
    return await this.post(`/login`, credentials);
  }

  async updateUser(user) {
    user = new Object(JSON.parse(JSON.stringify(user)));
    return await this.put(`/usuario/actualizar`, user);
  }

  async userDetail(userId) {
    return await this.get(`/usuario/${userId}`);
  }
}

module.exports = UserAPI;
