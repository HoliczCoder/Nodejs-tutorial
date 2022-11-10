const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/courseController")

router.post("/add-default-course", courseController.createCourse )
router.post("/add-something", courseController.createSomething )
router.get("/get-all", courseController.getAll)




module.exports = router