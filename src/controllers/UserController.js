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
    response.data = User.filterAll(data);
    res.json(response);
  }

  static async getUserById(req, res) {
    const data = await User.findByPk(req.params.id).catch((err) => err);
    response.status = data ? "Success" : false;
    response.data = data ? User.filter(data) : {};
    res.json(response);
  }

  static async updateUser(req, res) {
    const { username, email, password } = req.body;
    const { id } = req.params
    const data = await User.update(
      { username, email, password },
      { where: { id: id } }
    )
    .catch((err) => err);
    const userData = await User.findByPk(id)
    .catch(err => err);
    response.status = data[0] ? "Success, data updated" : false;
    response.data = data[0] ? userData : {};
    res.json(response);
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    const data = await User.destroy({
      where: { id: id },
    }).catch((err) => err);
    response.status = data ? "Success, data deleted" : false;
    response.data = data ? {id:id} : {};
    res.json(response);
  }
  static async saveUser(req, res) {
    const { body } = req;
    const data = await User.build(body);
    await data.save()
    .then(res => response.data = res.dataValues)
    .catch((err) => err);
   
    response.status = data ? "Success" : false;
    res.json(response);
  }
}

module.exports = UserController;
