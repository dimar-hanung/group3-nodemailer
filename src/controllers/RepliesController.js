const { Replies } = require("../db/models");
const response = {
  status: true,
  data: [],
};

class RepliesController {
  static async getReplies(req, res) {
    const replies = await Replies.findAll();
    response.data = replies;

    res.json(response);
  }

  static async saveReplies(req, res) {
    const {body} = req;

    try { 
      const saveReplies = await Replies.create({
      content:body.content,
      ThreadId:body.ThreadId,
      UserId:body.UserId
      }) 
      console.log(saveReplies)
      response.status = "Success",
      response.data = saveReplies
      res.status(201).json(response)
    } catch (error) {
        response.status = false;
        response.message = error.message;
        res.status(400).json(response)
    }
  }

  static async getRepliesById(req, res) {
    const {id} = req.params;
    const RepliesDetail = await Replies.findByPk(id)
    try {
        if(!RepliesDetail) throw new Error("Data Not Found")
        response.data = RepliesDetail;
        response.status = "Success";
        res.json(response)
    } catch (error) {
          // response.message = error.message;
          response.data = [];
          response.status = "fail";
          res.status(404).json(response)
    }
  } 

  static async updateReplies(req, res) {
    const {body} = req;
    const {id} = req.params;
    
    try {
      const updateReplies = await Replies.update({
          title:body.title,
          content:body.content,
          UserId:body.UserId,
          status:body.status
      }, {
        where: {
          id: id
        }
      })
      if(!updateReplies) throw new Error("Data Not Found")
      const getRepliesById = await Replies.findByPk(id)
      response.status = "success, data updated",
      response.data = getRepliesById
      res.status(200).json(response)
    } catch (error) {
      response.status = false;
      response.message = error.message;
      res.status(400).json(response)
    }
  }

  static async deleteReplies(req, res) {
    const {id} = req.params;
    const replies = await Replies.destroy({
      where: {
        id: id
      }
    })

    try {
      if(replies === 0) throw new Error("Data Not Found")
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





  
}

module.exports = RepliesController;