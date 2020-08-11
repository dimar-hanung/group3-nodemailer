const { replies } = require("../db/models");
const response = {
  status: true,
  message: "",
  data: [],
};

class RepliesController {
  static async getReplies(req, res) {
   
    res.json(response);
  }
  
}

module.exports = RepliesController;