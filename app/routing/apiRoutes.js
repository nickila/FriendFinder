var friends = require("../data/friends.js");
var match = {};
module.exports = function (app, path) {




    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });





    app.post("/api/friends", function (req, res) {
        // all the logic should be here, not in survey
        // when html makes post request, $.post request in html, saves info as req.body 
        var newFriend = req.body;
        function add(a, b) {
            return a + b;
        }
        // A. Push all scores from newFriend into an array.
        // B. Find difference of all scores from newFriend array together and save sum as a variable.
        var newScoreArr = [];
        for (i = 0; i < newFriend.score.length; i++) {
            newScoreArr.push(newFriend.score[i]);
        }
        var diff = [];
        var sum;
        var sumArr = [];
        for (j = 0; j < friends.length; j++) {
            var friendsScoreArr = [];
        
            for (i = 0; i < friends[j].score.length; i++) {
                friendsScoreArr.push(friends[j].score[i])
            }
        
            for (k = 0; k < 5; k++) {
                var difference = (newScoreArr[k] - friendsScoreArr[k]);
                if (difference >= 0) {
                    diff.push(difference);
        
                } else if (difference < 0) {
                    difference = difference * -1;
                    diff.push(difference);
                }
            }
            sum = diff.reduce(add, 0);
            sumArr.push(sum);
            diff = [];
        }

        function indexOfSmallest(a) {
            var lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;     
            }
            match.name = (friends[lowest].name);
            match.img = (friends[lowest].img);
        }
        indexOfSmallest(sumArr);
        friends.push(newFriend);
        res.json(match);
    });


};







// var express = require("express");
// var path = require("path");

// var app = express();
// var PORT = 3000;

// app.use(express.urlencoded({
//     extended: true
// }));
// app.use(express.json());


// app.get("/api/friends", function (req, res) {
//     return res.json(friends);
// });

// app.get("/api/friends/:friend", function (req, res) {
//     var chosen = req.params.friend;

//     console.log(chosen);

//     for (var i = 0; i < friends.length; i++) {
//         if (chosen === friends[i].routeName) {
//             return res.json(friends[i]);
//         }
//     }
//     return res.json(false);
// });

// app.post("/api/friends", function (req, res) {

//     var newFriend = req.body;

//     newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newFriend);

//     friends.push(newFriend);

//     res.json(newFriend);
// });
// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
// });