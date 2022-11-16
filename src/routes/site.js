const express = require("express");
const router = express.Router();
const siteController = require("./../app/controllers/SiteController");
// const app = express();

router.get("/search", siteController.show);
router.get("/", (req,res)=> {
    res.send(`this is Helloworld`)
});
router.get("/", siteController.index);



module.exports = router;
