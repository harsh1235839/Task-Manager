const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks); // GET

router.route("/").post(createTask); // post

router.route("/:id").get(getTask); // single get

router.route("/:id").patch(updateTask); // PATCH

router.route("/:id").delete(deleteTask); // Delete

module.exports = router;
