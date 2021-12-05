const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.user_api_url;
  }
  async userByIdUsuario(idUsuario){
    return await this.get(`${idUsuario}`);
  }

  async createUserRequest(user){
      return await this.post('registro', user);
  }

  async modifyUserByIdUser(idUsuario){
    return await this.put('actualizar',idUsuario)
  }

}

module.exports = UserAPI;
