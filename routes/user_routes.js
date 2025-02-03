const express = require("express");
const router = express.Router();
const {
    homepage, 
    tasksPage,
    createTaskPage
} = require("../controller/user_controller");

router.get("/", homepage);
router.get("/tasks", tasksPage);
router.get("/createTask", createTaskPage);


module.exports = router