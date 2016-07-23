
// <!-- You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

//  -->
var panel = $('#quiz-area'); // Panel to append all of the HTML to from this JS file
var countStartNumber = 15; // Global var,

// A function that handles events where one button is clicked
// Start On Click Here
$("#start").click(function() {
    console.log("Start Game");
    game.start();
})
// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    game.clicked(e);
})
// Start Over On Click
$(document).on('click', '#start-over', function() {
   location.reload()
});
$(document).on('click', '#submit', function() {
    game.done()
});

    //random question; 4 choices
    var randomQuestion = Math.floor(Math.random()*(questionsArray));
    var questionsArray = [{
    	question: "Which character from Beavis and Butthead got their own show?",
    	choices: ["Daria", "Hank Hill", "no one", "Beavis"],
    	correctChoice: "Daria"
    }, {	
    	question: "In Fresh Prince of Bel-Air what was the butlers name?",
    	choices: ["Todd", "Jarvis", "Will", "Gefforey"],
    	correctChoice: "Gefforey"
    }, {
    	question: "What is Doug's last name?",
    	choices: ["Folders", "Filbert", "Funzie", "Funnie"],
    	correctChoice: "Funnie"
    }, {
    	question: "What kind of animal is Rocko (from Rocko's Modern Life)?",
    	choices: ["wallabe", "kangaroo", "dog", "catdog"],
    	correctChoice: "wallabe"
    }, {	
    	question: "What's Ren's last name?",
    	choices: ["Hoeck", "Dog", "Chewie", "Simpson"],
    	correctChoice: "Hoeck"
    }, {
    	question: "What do Pinky and the Brain try to do during every episode?",
    	choices: ["conquor the world", "eat cheese!", "dance!", "inhabit the cage"],
    	correctChoice: "conquor the world"
    }, {
    	question: "In the Angry Beavers, which brother is named Norbert?",
    	choices: ["Is this a porno?", "The lighter one", "the darker one", "there is no one with that name, on that show"],
    	correctChoice: "The lighter one"
    }, {
    	question: "What occupation do Courage's owners hold?",
    	choices: ["Is this a porno?", "Farmers", "the darker one", "there is no one with that name, on that show"],
    	correctChoice: "Farmers"
    }, {	
    	question: "Who created the Powerpuff Girls?",
    	choices: ["Professor Plutonium", "Professor Utonium", "Professor Oak", "Tina Turner"],
    	correctChoice: "Professor Utonium"

    }, {	
    	question: "What was Tommy's best friend name on the Rugrats",
    	choices: ["Chucky", "wallabe", "Richard", "Brock"],
    	correctChoice: "Chucky"
    }]


// Array of Questions
var game = {
  correct:0,
  incorrect:0,
  counter:100,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').prepend('<h2>Time:<span id="counter-number">120</span> Seconds</h2>');
    $('#start').remove();

   //for each question you will loop and add buttons and display each choice with jquery
  for(var i=0; i < questionsArray.length; i++) {
        $('#quiz-area').append('<h2>' + questionsArray[i].question + '</h2>');
    for(var j=0; j < questionsArray[i].choices.length; j++) {
        $('#quiz-area').append('<input type="radio" name="answer'+i+'" value="'+questionsArray[i].choices[j]+'"> ' + questionsArray[i].choices[j] );
    }
  }
    
  },
  done: function() {
    $.each($("input[name='answer0']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[0].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
    $.each($("input[name='answer1']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[1].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer2']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[2].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer3']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[3].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer4']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[4].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer5']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[5].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer6']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[6].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer7']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[7].correctChoice) {
            game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer8']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[7].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });

        $.each($("input[name='answer8']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[8].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer9']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[9].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });
        $.each($("input[name='answer10']:checked"), function () {
        console.log("inside")
        if($(this).val() == questionsArray[10].correctChoice) {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });
    game.result();
  },
        result: function() {
        clearInterval(timer);
         $("#quiz-area").empty();
        $("#quiz-area").append("Correct Answers: "+ game.correct + "<br />");
        $("#quiz-area").append("Incorrect Answers: "+ game.incorrect);
      }
  }



