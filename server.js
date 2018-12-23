var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, '/public')))

require('./app/routing/htmlRoutes.js')(app, path);
require('./app/routing/apiRoutes.js')(app, path);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

