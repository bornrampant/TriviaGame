questionNumber = 0;

//start on click
//submit on click
game.checkGuess()
//next button on click

var questionsArray = [{
	question: "1st question here",
	choices: ["1", "2", "3", "4"],
	correctChoice: "2"
}, {	
	question: "2nd question here",
	choices: ["", "", "", ""],
	correctChoice: ""
}, {
	question: "3rd question here",
	choices: ["", "", "", ""],
	correctChoice: ""

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
	//variables
	questionGuessTime: 20,
	questionNumber: 0,
	correctAnswers: 0,
	wrongAnswers: 0,
	unAnswered: 0,

	//functions

	timer: functon() {

	},

	startGame: functon() {


	},

	reset: functon() {


	},

	checkGuess: functon() {

		questionNumber++

		if (this.questionNumber === questionsArray.length){

		}

	printQuestions: function(){

	this.timer()

	console.log(questionsArray[questionNumber].question)
	console.log(questionsArray[questionNumber].choices[0])

	}
}

game.startGame();
