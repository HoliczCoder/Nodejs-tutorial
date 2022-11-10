const {
  createSomething,
  createCourse,
  getAll,
} = require("../services/CourseService");

class CourseController {
  createCourse(req, res) {
    createCourse(req, res);
  }

  createSomething(req, res) {
    createSomething(req, res);
  }
  getAll(req, res) {
    getAll(req, res);
  }
}

module.exports = new CourseController();
