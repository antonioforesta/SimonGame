// Group of arrays 

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var started = false;
var level = 0;

// this detects the click when a button is pressed  
$(document).keydown(function(){
if (!started) {
    
$("#level-title").text("Level " + level);
nextSequence();
started = true;
}
     
});

$(".btn").click(function(){

var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);



playSound(userChosenColour);
animatePress(userChosenColour);
checkAnswer(userClickedPattern.length -1);

});




function checkAnswer(currentLevel){
if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){

    console.log("sucess");

if (userClickedPattern.length === gamePattern.length){
   
   setTimeout (function(){

   nextSequence() 
    }, 1000);
}

} else {
console.log("wrong");
playSound("wrong");

$("body").addClass("game-over");
setTimeout (function(){
$("body").removeClass("game-over");
},200);

  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();
  }
}


//ALL website's functions
// the function below creates the random colour and pushes it to the array "gamePattern"

function nextSequence(){
userClickedPattern = []; 

level++;
 $("#level-title").text("Level " + level);

 var randomNmuber = Math.floor(Math.random() * 4);
 var randomChosenColour = buttonColours[randomNmuber];
 gamePattern.push(randomChosenColour);


$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}


// This function plays the sounds 


function playSound (name){

var audio = new Audio("sounds/"+name+".mp3");
audio.play();
}


// Animation's functions

function animatePress(currentColour){
   $("#" + currentColour).addClass("pressed"); 
   setTimeout (function(){
     $("#" + currentColour).removeClass("pressed");
   }, 100);
  }

function startOver(){
level = 0;
gamePattern =[];
started=false;
  }