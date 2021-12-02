const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require("../server");

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.user_api_url;
  }
}

module.exports = UserAPI;
