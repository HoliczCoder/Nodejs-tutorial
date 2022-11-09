class SiteController {
  index(req, res) {
    res.send("hello this is main page");
  }
  show(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
