
// <!-- You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

//  -->

window.onload = function() {

var panel = $('#quiz-area'); // Panel to append all of the HTML to from this JS file
var countStartNumber = 10; // Global var,

// A function that handles events where one button is clicked
// Start On Click Here

$(document).on('click', '#start', function() {
    game.startGame();

	document.getElementById("qtrivia").innerHTML = questionsArray

	// chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)]; // solution is chosen randomly from wordList
	// // neena
	// lettersInChosenWord = chosenWord.split(""); // the word is broken into individual letters
	// // ["n","e","e",'n','a']

	// numBlanks = lettersInChosenWord.length; // we cound the number of letters in the word
	// 5

    console.log(this);
})

// Submit On Click
$(document).on('click', '.check-guess', function(e) {
    game.checkGuess(e)
    
	console.log(this);
})
// Start Over On Click
$(document).on('click', '#start-over', function() {
    location.reload()
    console.log(this);
});

// questionNumber = 0;

//start on click
//submit on click
game.checkGuess()
//next button on click

//random question; 4 choices
var randomQuestion = Math.floor(Math.random()*(questionsArray));
document.getElementById('qtrivia').innerHTML = questionsArray[randomQuestion]
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

questionArray[questionNumber].question
questionArray[questionNumber].choices[0]
questionArray[questionNumber].choices[1]
questionArray[questionNumber].choices[2]
questionArray[questionNumber].choices[3]
questionArray[questionNumber].correctChoice


questionNumber++
var game = {

    // Variables
    questions: questionsArray, // Import QuestionsArray into the Game Object
    questionNumber: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    unAnswered: 0,
    currentQuestionNumber: 0,

    // Functions
    countdown: function() {

       timer = setInterval(game.countdown, 1000);

    },

    timeUp: function() {

        alert('Times Up!');

    },

    // reset: function() {
    // 	location.reload()

    // },

    checkGuess: function() {

        // Is this the correct answer for the Question

        // Yes

        // No

        // Is this the last Question?
        if (this.questionNumber === questionsArray.length - 1) {

        function endGame(isWinner) {
      		if (correctAnswers > wrongAnswers + unAnswered){
        		alert('WINNER!');
      }		
      		else if( wrongAnswers + unAnswered > correctAnswers){
        		alert('GAME OVER');
      };
    }

        } else {

            // Continue Game
        }


    },

    finalResults: function() {


    },

    loadQuestion: function() {

        // start timer
        timer = setInterval(game.countdown, 1000);

        // Print Question
        console.log(this.questions[questionNumber].question)

        // Print Choices as buttons (for loop needed)
        console.log(this.questions[questionNumber].choices[0])
        console.log(this.questions[questionNumber].choices[1])
        console.log(this.questions[questionNumber].choices[2])
        console.log(this.questions[questionNumber].choices[3])
        console.log(this.questions[questionNumber].correctChoice)

    },

    nextQuestion: function() {

        // start timer
        this.timer()

        // Advance Question Number
        this.questionNumber++

        // Call loadQuestion() Function

        }

    }
}    


// var game = {
// 	//variables
// 	questionGuessTime: 10,
// 	questionNumber: 0,
// 	correctAnswers: 0,
// 	wrongAnswers: 0,
// 	unAnswered: 0,

// 	//functions

// 	timer: functon() {
// 		timer = setInterval(game.countdown, 1000);
// 	},

// 	startGame: functon() {


// 	},

// 	reset: functon() {


// 	},

// 	checkGuess: functon() {

// 		questionNumber++

// 		if (this.questionNumber === questionsArray.length){

// 		}

// 	printQuestions: function(){

// 	this.timer()

// 	console.log(questionsArray[questionNumber].question)
// 	console.log(questionsArray[questionNumber].choices[0])

// 	}
// }


