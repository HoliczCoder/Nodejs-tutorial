const { rmSync } = require("fs");
const Course = require("./../model/Course")

class SiteController {
  index(req, res) {
    // res.send("hello this is main page");
    Course.find({}, (err, course)=> {
      if (!err){
        res.json(course)
      } else {
        res.status(500).json({ error :  'there is somthing wronf'})
      }
    })
    // res.json({
    //   name : "test"
    // })
  }
  show(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
