const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class PortafoliosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.portafolios_api_url;
  }

  //cover;
  async createCover(cover) {
    return await this.post(`/cover/create/`, cover);
  }
  async coverByIdCover(idCover) {
    return await this.get(`/cover/detail/${idCover}`);
  }
  async createProfile(profile) {
    profile = new Object(JSON.parse(JSON.stringify(profile)));
    return await this.post(`/perfil`, profile);
  }
  async updateProfile(profile, userId) {
    profile = new Object(JSON.parse(JSON.stringify(profile)));
    return await this.put(`/perfil/${userId}`, profile);
  }

  async profileDetail(userId) {
    return await this.get(`/perfil/${userId}`);
  }
}

module.exports = PortafoliosAPI;
