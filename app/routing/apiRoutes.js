var friends = require("../data/friends.js");
var match = {};
module.exports = function (app, path) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        function add(a, b) {
            return a + b;
        }
        var newScoreArr = [];
        
        for (i = 0; i < newFriend.score.length; i++) {
            parseInt(newFriend.score[i]);
            newScoreArr.push(newFriend.score[i]);
        }
        var diff = [];
        var sum;
        var sumArr = [];
        for (j = 0; j < friends.length; j++) {
            var friendsScoreArr = [];
        
            for (i = 0; i < friends[j].score.length; i++) {
                parseInt(friends[j].score[i]);
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
        console.log("ending " + newFriend.score[0])
        res.json(match);
    });
};