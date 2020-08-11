const express = require("express");
const router = express.Router();

const ThreadController = require("../controllers/ThreadController");

router
.get("/",ThreadController.getThread)
// .post("/",ThreadController.saveAuthor)
// .post("/image",ThreadController.uploadImage)

// router.route("/:id")
// .get(ThreadController.getAuthorById)
// .patch(ThreadController.updateAuthor)
// .delete(ThreadController.deleteAuthor)

module.exports = router;