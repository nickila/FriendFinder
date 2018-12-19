require('./app/routing/htmlRoutes.js');
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// each user enters their name, photo and array of 10 scores. This gets put into a constructor function.



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey.html", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

