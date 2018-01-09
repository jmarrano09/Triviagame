var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var images;

var count=30;

var disneyQuestion = [{
question: "How many hearts does an octopus have?",
choices: ["1", "2", "3", "4" ],
validAnswer: 2
}, {
question:"What makes a cheetah fast?",
choices: ["It's spine", "It's long legs", "It's light body", "It's aerodynamic head"],
validAnswer: 0

}, {
question:"In Finding Dory, Dory has .... ",
choices: ["Long term memory loss", "A gimp fin", "echolocation", "Short term memory loss"],
validAnswer: 3

}, {
question:"In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
choices: ["2 Dozen", "5 Dozen", "5000", "0"],
validAnswer: 1

}, {
question:"In Alice in Wonderland, what is the name of Alice’s kitten?",
choices: ["Dinah", "Sammie", "Kat", "Luna"],
validAnswer: 0

 }, {
question:"Which months have 28 days?",
choices: ["1", "5", "12", "3"],
validAnswer: 2

}, {
question:"During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
choices: ["Yellow", "Blue", "Gold", "White"],
validAnswer: 2

}, {
question:"In Bambi, what word does the owl use to describe falling in love?",
choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
validAnswer: 3

}

];

$("#start_button").click(function(){
$(this).hide();
counter = setInterval(timer, 1000); 
displayTrivia();
}); 


function timer(){
count--;
if (count <= 0) {
 clearInterval(counter);
 return;
}

 $("#timer").html("Time remaining: " + "00:" + count + " secs");
}


function displayTrivia() {
$("#question_div").html(disneyQuestion[0].question);
question++;

  var choicesArr = disneyQuestion[0].choices;
  var buttonsArr = [];

  for (let i = 0; i < choicesArr.length; i++) {
    var button = $('<button>');
    button.text(choicesArr[i]);
    button.attr('data-id', i);
    $('#choices_div').append(button);
   }

  } 

 $('#choices_div').on('click', 'button', function(e){
 userPick = $(this).data("id");
 disneyQuestion[0].validAnswer;
 if(userPick != disneyQuestion[0].validAnswer) {

 $('#choices_div').text("Wrong Answer! The correct answer is Rajah.");
 incorrectAnswer++;

} else if (userPick === disneyQuestion[0].validAnswer) {
$('#choices_div').text("Correct!!! The pet tiger name is Rajah");
correctAnswer++;

}

});