const express = require("express");
const router = express.Router();

const RepliesController = require("../controllers/RepliesController");

router
.get("/",RepliesController.getReplies)
.post("/",RepliesController.saveReplies)
// .post("/image",ThreadController.uploadImage)

router.route("/:id")
.get(RepliesController.getRepliesById)
.patch(RepliesController.updateReplies)
.delete(RepliesController.deleteReplies)

module.exports = router;