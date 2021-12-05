const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class PortafoliosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.portafolios_api_url;
  }

  #cover 
  async createCover(cover){
    return await this.post(`/cover/create/`, cover);
  }
  async coverByIdCover(idCover){
    return await this.get(`/cover/detail/${idCover}`);
  }
}

module.exports = PortafoliosAPI;
