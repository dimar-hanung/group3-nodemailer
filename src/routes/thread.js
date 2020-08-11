const express = require("express");
const router = express.Router();

const ThreadController = require("../controllers/ThreadController");

router
.get("/",ThreadController.getThread)
.post("/", ThreadController.saveTheread)
// .post("/",ThreadController.saveAuthor)
// .post("/image",ThreadController.uploadImage)

router.route("/:id")
.get(ThreadController.getThreadById)
.patch(ThreadController.updateThread)
.delete(ThreadController.deleteThread)

module.exports = router;