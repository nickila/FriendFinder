//var PORT = 3000;


module.exports = function(app, path) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    //other routes..
    // }


    // app.listen(PORT, function () {
    //     console.log("App html listening on PORT " + PORT);
};