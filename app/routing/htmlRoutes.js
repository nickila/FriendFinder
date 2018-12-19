// var express = require("express");
// var path = require("path");
// var app = express();
// var PORT = 3000;


// function routeHTML(){

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/home.html"));
    });
    
    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });

    //other routes..
// }


// app.listen(PORT, function () {
//     console.log("App html listening on PORT " + PORT);
// });

module.exports = routeHTML;
