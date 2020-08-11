const { replies } = require("../db/models");
const response = {
  status: true,
  message: "",
  data: [],
};

class ThreadController {
  static async getThread(req, res) {
   
    res.json(response);
  }
  
}

module.exports = ThreadController;