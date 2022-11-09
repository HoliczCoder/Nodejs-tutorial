class NewsController {
  index(req, res) {
    res.send("hello this is new page");
  }
  show(req, res) {
    res.send("there is another new page");
  }
}

module.exports = new NewsController();
