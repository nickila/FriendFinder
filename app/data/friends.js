var friends = [
    {
        name: "Phillip",
        photo: "https://psychology.missouri.edu/sites/default/files/styles/thumb_300/public/people-img/wood_phillip_resized.jpg?itok=QERMHh2D",
        scores: [
            3, 
            2, 
            5, 
            1, 
            4, 
            3, 
            5, 
            5, 
            1, 
            2
        ]
    }
];

$(document).ready(function(){
   
    $("#submitBtn").click(function(){
        event.preventDefault();
    //  var score = [];
    //   score.push($(".form-control").val());
    //   score.push($("#Q2").val());
    //   score.push($("#Q3").val());
    //   score.push($("#Q4").val());
    //   $(".question") => [{},{},{}]

      //$.each(".question")
        //alert(score);
        console.log("submit!")
    });
  });

