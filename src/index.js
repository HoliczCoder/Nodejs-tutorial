const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars')
const app = express();
const port = 8000;
const path = require("path")

// console.log ("hello")

app.use (morgan('combined'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', path.join (__dirname, 'resources/views'));

app.get("/", (req, res, end)=> {
    // return res.send("Hello World")
    res.render('home')
})


app.get("/search", (req, res, end)=> {
    res.render('search')
})

app.listen(port, ()=> console.log("da chay roi hihi"));
