$(document).ready(function () {
    $("#submitBtn").click(function () {
        event.preventDefault();
        var newFriend = {
            name: $("#name").val(),
            photo: $("#photoImage").val(),
            score: []
        };

        newFriend.score.push(parseInt($("#Q1").val()));
        newFriend.score.push(parseInt($("#Q2").val()));
        newFriend.score.push(parseInt($("#Q3").val()));
        newFriend.score.push(parseInt($("#Q4").val()));
        newFriend.score.push(parseInt($("#Q5").val()));
        newFriend.score.push(parseInt($("#Q6").val()));
        newFriend.score.push(parseInt($("#Q7").val()));
        newFriend.score.push(parseInt($("#Q8").val()));
        newFriend.score.push(parseInt($("#Q9").val()));
        newFriend.score.push(parseInt($("#Q10").val()));
        console.log(newFriend.name);
        //   $(".question") => [{},{},{}]
        var friends =
            [
                {
                    name: "snuggles",
                    img: "https://vignette.wikia.nocookie.net/garfield/images/9/9f/GarfieldCharacter.jpg/revision/latest/scale-to-width-down/321?cb=20180421131132",
                    score: [
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1,
                        1
                    ]
                },
                {
                    name: "doop",
                    img: "google.com",
                    score: [
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2,
                        2
                    ]
                },
                {
                    name: "wiffer",
                    img: "google.com",
                    score: [
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                    ]
                }
            ];

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

        // 1. Push scores from friends[0].score into an array.
        // 2. Find total difference of all scores from that array together and save sum as a variable.
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
        console.log("sumArr " + sumArr);

        function indexOfSmallest(a) {
            var lowest = 0;
            for (var i = 1; i < a.length; i++) {
                if (a[i] < a[lowest]) lowest = i;
            }
            $("#friendName").text(friends[lowest].name);
            $("#friendImg").html("<img src=" + friends[lowest].img + "></img>")
        }
        indexOfSmallest(sumArr);
        friends.push(newFriend);
        console.log(friends);
        // 3. Check the two scores against each other. 
        // 4. Run a loop to check the difference of those two variables.
        // 5. Ultimately we want to run through the scores of user 1 and check it against new user, then user 2, user 3, etc. Save each difference in a new array. Then we can check which number is the smallest but running a loop of that array to see if any are 0, 1, 2, etc. Whichever is the first to hit true, find that index spot and return the corresponding index spot of users (friends).

    });  
});