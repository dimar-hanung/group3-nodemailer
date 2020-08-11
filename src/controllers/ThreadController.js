const { Thread, Replies } = require("../db/models");
const response = {
  status: true,
  data: [],
};

class ThreadController {
  static async getThread(req, res) {
    const thread = await Thread.findAll();
    response.data = thread;

    res.json(response);
  }

  static async saveTheread(req, res) {
    const {body} = req;

    try { 
      const saveThread = await Thread.create({
      title:body.title,
      content:body.content,
      UserId:body.UserId,
      status:body.status
      }) 
      console.log(saveThread)
      response.status = "Success",
      response.data = saveThread
      res.status(201).json(response)
    } catch (error) {
        response.status = false;
        response.message = error.message;
        res.status(400).json(response)
    }
  }

  static async getThreadById(req, res) {
    const {id} = req.params;
    const ThreadDetail = await Thread.findByPk(id)
    try {
        if(!ThreadDetail) throw new Error("Data Not Found")
        response.data = ThreadDetail;
        response.status = "Success";
        res.json(response)
    } catch (error) {
          // response.message = error.message;
          response.data = [];
          response.status = "fail";
          res.status(404).json(response)
    }
  } 

  static async updateThread(req, res) {
    const {body} = req;
    const {id} = req.params;
    
    try {
      const updateThread = await Thread.update({
          title:body.title,
          content:body.content,
          UserId:body.UserId,
          status:body.status
      }, {
        where: {
          id: id
        }
      })
      if(!updateThread) throw new Error("Data Not Found")
      const getThreadById = await Thread.findByPk(id)
      response.status = "success, data updated",
      response.data = getThreadById
      res.status(200).json(response)
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response)
    }
  }

  static async deleteThread(req, res) {
    const {id} = req.params;
    const thread = await Thread.destroy({
      where: {
        id: id
      }
    })

    try {
      if(thread === 0) throw new Error("Data Not Found")
      response.status = "Success, Data Deleted";
      response.data = {"id" : id}
      res.json(response)
    } catch (error) {
      response.message = error.message;
      response.data = [];
      response.status = "fail";
      res.status(404).json(response)
    }
  }

  static async getThreadByIdWithReplies(req, res) {
    const {id} = req.params;
    const ThreadDetail = await Thread.findByPk(id, {
      include: Replies
    })
    try {
        if(!ThreadDetail) throw new Error("Data Not Found")
        response.data = ThreadDetail;
        response.status = "Success";
        res.json(response)
    } catch (error) {
          // response.message = error.message;
          response.data = [];
          response.status = "fail";
          res.status(404).json(response)
    }
  }
  
}

module.exports = ThreadController;