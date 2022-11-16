const {
  createSomething,
  createCourse,
  getAll,
  addPerson,
  updatePerson,
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
  addPerson(req, res) {
    addPerson(req, res);
  }
  updatePerson(req, res) {
    updatePerson(req, res);
  }
}

module.exports = new CourseController();
