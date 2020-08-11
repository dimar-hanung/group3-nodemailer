const express = require("express");
const router = express.Router();

const RepliesController = require("../controllers/RepliesController");

router
.get("/",RepliesController.getReplies)
// .post("/",ThreadController.saveAuthor)
// .post("/image",ThreadController.uploadImage)

// router.route("/:id")
// .get(ThreadController.getAuthorById)
// .patch(ThreadController.updateAuthor)
// .delete(ThreadController.deleteAuthor)

module.exports = router;