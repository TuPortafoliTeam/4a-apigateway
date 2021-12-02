const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class PortafoliosAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.portafolios_api_url;
  }
}

module.exports = PortafoliosAPI;
