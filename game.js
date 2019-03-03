$(document).ready(function(){

    let targetCeiling = 120;
    let targetFloor = 19;
    var target = Math.floor(Math.random() * (targetCeiling-targetFloor)) + targetFloor;
    $("#target").html("<strong>" + target + "</strong>");

    let scoreCeiling = 12;
    let scoreFloor = 2;
    let scoreRed = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
    let scoreBlue = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
    let scoreGreen = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
    let scoreYellow = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
    // let ranNumRed = 1 //(Math.round(Math.random() * 43) + 2);
    // let ranNumBlue = 1 //(Math.round(Math.random() * 72) + 2);
    // let ranNumGreen = (Math.round(Math.random() * 14) + 2);
    // let ranNumYellow = (Math.round(Math.random() * 43) + 2); 
    var wins = 0;
    var losses = 0;
    var runningScore = 0;

      
    
    // anonymous function below if we left the brackets empty
$("[data-id=1]").on("click", function(event){
    // console.log(this);
    // console.log($(this));
    // console.log(this.getAttribute("data-id"));
    // console.log($(this).attr("data-id"));
    runningScore += scoreRed;
    console.log(runningScore);
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");
    
    if (runningScore === target) {
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>");
        alert("You are a winner!");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
        alert("You have lost the game!");
     };
});

$("[data-id=2]").on("click", function(event) {
    runningScore += scoreBlue;
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");

    // runningScore = parseFloat(runningScore);
    // target = parseFloat(target);
    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>")
        alert("You are a winner!");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
        alert("You have lost the game!");
     };
});

$("[data-id=3]").on("click", function() {
    runningScore += scoreGreen;
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");

    // runningScore = parseFloat(runningScore);
    // target = parseFloat(target);
    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>");
        alert("You are a winner!");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
        alert("You have lost the game!");
     };
});

$("[data-id=4]").on("click", function() {
    runningScore += scoreYellow;
    $("#spanTotal").html("<strong>" + runningScore + "</strong>");

    if (runningScore === target) {
        console.log("Winner!");
        wins++;
        $("#spanWins").html("<strong>" + wins + "</strong>");
        alert("You are a winner!");
     }
    else if (runningScore > target) {
        losses++;
        $("#spanLosses").html("<strong>" + losses + "</strong>");
        alert("You have lost the game!");
     };
});



    function resetGame() {
        target = Math.floor(Math.random() * (targetCeiling-targetFloor)) + targetFloor;
        scoreRed = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
        scoreBlue = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
        scoreGreen = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
        scoreYellow = Math.floor(Math.random() * (scoreCeiling - scoreFloor)) + scoreFloor;
        runningScore = 0;
        $("#spanTotal").html("<strong>" + runningScore + "</strong>");
    };

$("#reset").on("click", function(){
    resetGame();
});

});


// console.log(runningScore == Number.NaN);

 // function isNumeric(runningScore) {
        //     return !isNaN(parseFloat(runningScore)) && isFinite(runningScore);
        // }
        // isNumeric();
        // console.log(isNumeric(runningScore));