const mongoose = require("mongoose");
const Course = require("../model/Course");
const Something = require("../model/Something");
const Person = require("../model/Person");
const { log } = require("console");

function createCourse(req, res) {
  console.log(req);
  const course = new Course({
    name: req.body.name,
    description: req.body.description,
  });

  return course
    .save()
    .then((newCourse) => {
      return res.status(200).json({
        newCourse,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
}

function createSomething(req, res) {
  const something = new Something({
    name: req.body.name,
    age: req.body.age,
    listBook: req.body.listBook,
    demoObject: req.body.demoObject,
  });
  return something
    .save()
    .then((newCourse) => {
      return res.status(200).json({
        something,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
}

function addPerson(req, res) {
  const arrayOfPeople = [
    { name: "Frankie", age: 74, favoriteFoods: ["Del Taco"] },
    { name: "Sol", age: 76, favoriteFoods: ["roast chicken"] },
    { name: "Robert", age: 78, favoriteFoods: ["wine"] },
  ];

  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    res.status(200).json({
      people,
    });
  });
}

function updatePerson(req, res) {
  Person.findById(req.body.id)
    .exec()
    .then((people) => {
      people.favoriteFoods.push("hamburger");
      people
        .save()
        .then((data) => {
          res.status(200).json({
            data,
          });
        })
        .catch((e) => {
          console.log("update data by id failed");
        });
    }).catch((e)=> {
      console.log ("find by id failed")
    });
}

function getAll(req, res) {
  Course.findOne({ name: req.body.name })
    .exec()
    .then((allCourse) => {
      return res.status(200).json({
        success: true,
        message: "A list of all course",
        Course: allCourse,
      });
    })
    .catch((e) => {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: e.massage,
      });
    });
}

module.exports = { createSomething, createCourse, getAll, addPerson, updatePerson };
