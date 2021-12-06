const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class PortafoliosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.portafolios_api_url;
  }

  //cover;
  async createCover(cover) {
    cover = new Object(JSON.parse(JSON.stringify(cover)));
    return await this.post(`/cover/create/`, cover);
  }
  async coverByIdCover(idCover) {
    return await this.get(`/cover/detail/${idCover}`);
  }
  async createProfile(profile) {
    profile = new Object(JSON.parse(JSON.stringify(profile)));
    console.log(profile);
    return await this.post(`/perfil`, profile);
  }
  async updateProfile(profile, userId) {
    profile = new Object(JSON.parse(JSON.stringify(profile)));
    return await this.put(`/perfil/${userId}`, profile);
  }

  async profileDetail(userId) {
    return await this.get(`/perfil/${userId}`);
  }

  //proyecto's dataSources

  async getAllProyects() {
    return await this.get("/proyectos");
  }
  async createProyect(proyecto) {
    return await this.post("/proyectos", proyecto);
  }
  async getProyectById(idProyecto) {
    return await this.get(`/ms2App/proyectos/${idProyecto}`);
  }
  async putProyectById(idProyecto, proyecto) {
    return await this.put(`/ms2App/proyectos/${idProyecto}`, proyecto);
  }
  async deleteProyectById(idProyecto) {
    return await this.delete(`/ms2App/proyectos/${idProyecto}`);
  }
}

module.exports = PortafoliosAPI;
