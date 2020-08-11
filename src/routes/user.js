const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");

router
.get("/",UserController.getUser)
// .post("/",ThreadController.saveAuthor)
// .post("/image",ThreadController.uploadImage)

// router.route("/:id")
// .get(ThreadController.getAuthorById)
// .patch(ThreadController.updateAuthor)
// .delete(ThreadController.deleteAuthor)

module.exports = router;