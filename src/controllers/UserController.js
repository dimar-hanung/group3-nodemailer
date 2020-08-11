const { User } = require("../db/models");
const { Error } = require("sequelize");
const response = {
  status: false,
  data: [],
};

class UserController {
  static async getUser(req, res) {
    const data = await User.findAll({}).catch((err) => err);
    response.status = data ? "Success" : false;
    response.data = data;
    res.json(response);
  }

  static async getUserById(req, res) {
    const data = await User.findByPk(req.params.id).catch((err) => err);
    response.status = data ? "Success" : false;
    response.data = data ? data : {};
    res.json(response);
  }

  static async updateUser(req, res) {
    const { username, email, password } = req.body;
    const data = await User.update(
      { username, email, password },
      { where: { id: req.params.id } }
    ).catch((err) => err);
    response.status = data[0] ? "Success" : false;
    response.data = data[0] ? req.body : {};
    res.json(response);
  }

  static async deleteUser(req, res) {
    console.log(req.params);
    const data = await User.destroy({
      where: { id: req.params.id },
    }).catch((err) => err);
    response.status = data ? "Success, data deleted" : false;
    response.data = data ? req.body : {};
    res.json(response);
  }
  static async saveUser(req, res) {
    const { body } = req;
    const data = await User.build(body);
    data.save().catch((err) => err);
    response.status = data ? "Success" : false;
    response.data = data ? data : {};
    res.json(response);
  }
}

module.exports = UserController;
