const express = require("express");
const router = express.Router();
const courseController = require("../app/controllers/courseController")

router.post("/add-default-course", courseController.createCourse )
router.post("/add-something", courseController.createSomething )
router.get("/get-all", courseController.getAll)
router.get("/add-person", courseController.addPerson )
router.put("/update-person", courseController.updatePerson)
// router.get("/edit-person", courseController.addPerson)




module.exports = router