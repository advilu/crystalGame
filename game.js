$(document).ready(function(){

    let targetCeiling = 120;
    let targetFloor = 19;
    var target = Math.floor(Math.random() * (targetCeiling-targetFloor)) + targetFloor;
    $("#target").append("<strong>" + target + "</strong>");

    var runningScore = 0;
    let scoreCeiling = 12;
    let scoreFloor = 2;
    let score = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
    // let ranNumRed = 1 //(Math.round(Math.random() * 43) + 2);
    // let ranNumBlue = 1 //(Math.round(Math.random() * 72) + 2);
    // let ranNumGreen = (Math.round(Math.random() * 14) + 2);
    // let ranNumYellow = (Math.round(Math.random() * 43) + 2); 
    var wins = 0;
    var losses = 0;

      
    
    // anonymous function below if we left the brackets empty
$("[data-id=1]").on("click", function(event){
    // console.log(this);
    // console.log($(this));
    // console.log(this.getAttribute("data-id"));
    // console.log($(this).attr("data-id"));
    runningScore += score;
    console.log(runningScore);
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");
    
    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
     };
});

$("[data-id=2]").on("click", function(event) {
    console.log(score);
    runningScore += score;
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");

    // runningScore = parseFloat(runningScore);
    // target = parseFloat(target);
    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>")
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
     };
});

$("[data-id=3]").on("click", function() {
    console.log(score);
    runningScore += score;
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");

    // runningScore = parseFloat(runningScore);
    // target = parseFloat(target);
    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
     };
});

$("[data-id=4]").on("click", function() {
    console.log(score);
    runningScore += score;
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");

    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
     };
});



// $("#newGame")


});


// console.log(runningScore == Number.NaN);

 // function isNumeric(runningScore) {
        //     return !isNaN(parseFloat(runningScore)) && isFinite(runningScore);
        // }
        // isNumeric();
        // console.log(isNumeric(runningScore));