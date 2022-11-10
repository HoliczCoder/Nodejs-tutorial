const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 8000;
const path = require("path");
const route = require("./routes");
const bodyParser = require("body-parser")
const {connect} = require("./config/db/index")

// connect db
connect();

// console.log ("hello")

app.use(morgan("combined"));
app.use(bodyParser.json())
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources","views"));
app.use(express.static(path.join(__dirname, "public")));

// Route init
route(app);

app.listen(port, () => console.log("da chay roi hihi"));
