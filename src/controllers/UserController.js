const { user } = require("../db/models");
const response = {
  status: true,
  message: "",
  data: [],
};

class UserController {
  static async getUser(req, res) {
   
    res.json(response);
  }
  
}

module.exports = UserController;