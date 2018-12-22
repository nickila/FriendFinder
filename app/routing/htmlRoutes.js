module.exports = function(app, path) {
   
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })

    app.get("/survey.html", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })
};