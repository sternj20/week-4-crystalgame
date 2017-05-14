//generate a random number each time the game starts between 19-120
//generate four random numbers assigned to each crystal image each time the game starts
	//between 1-12

//event listener for each crystal
	//when crystal is clicked you add the random number assigned to that crystal to your score

//if statements
	//if your total score equals the random number
		// you win
	//if total score is greater than random number, you lose

//global variables
var totalScore = 0;
var numToGuess = 0;
var wins = 0;
var losses = 0;
var purpleCrysNum = 0;
var crazyCrysNum = 0;
var blueCrysNum = 0;
var whiteCrysNum = 0;

//dom variables
var purpleCrys = $("#purplecrys");
var crazyCrys = $("#crazycrys");
var blueCrys = $("#bluecrys");
var whiteCrys = $("#whitecrys");
var crystalImgs = $(".crystalimgs");
var scorenums = $("#scorenums");
var winsHtml = $("#wins");
var lossesHtml = $("#losses");

//functions
function gameStart(){
	//clear total score
	totalScore = 0;
	scorenums.text(totalScore);
	//generate a random number each time the game starts between 19-120
	//assign this random number to variable numToGuess
	numToGuess = Math.floor(Math.random()*(120-19+1)+19);
	$("#randomnum").text(numToGuess);
	console.log(numToGuess);
	//generate four random numbers between 1-12 
	//assign each random number to crystal images
	purpleCrys.attr("data-crystalvalue", Math.floor(Math.random()*12) + 1);
	crazyCrys.attr("data-crystalvalue", Math.floor(Math.random()*12) + 1);
	blueCrys.attr("data-crystalvalue", Math.floor(Math.random()*12) + 1);
	whiteCrys.attr("data-crystalvalue", Math.floor(Math.random()*12) + 1);
	console.log(purpleCrys.attr("data-crystalvalue"));
	console.log(crazyCrys.attr("data-crystalvalue"));
	console.log(blueCrys.attr("data-crystalvalue"));
	console.log(whiteCrys.attr("data-crystalvalue"));
}
	//event listener for each crystal
	//when crystal is clicked you add the random number assigned to that crystal to your score
	crystalImgs.on('click', function() {
		totalScore += parseInt($(this).attr("data-crystalvalue"));
		scorenums.text(totalScore);
		console.log($(this).attr("data-crystalvalue"));
		console.log (totalScore);
		checkWinner();
	});
	
//if statement

function checkWinner(){
	//if your total score equals the random number
		// you win
		if(totalScore === numToGuess){
			console.log('you win');
			wins++;
			winsHtml.text(wins);
			$("#outcome").text('You win!');
			gameStart();
	//else if your total score is greater than random number
		//you lose 
	} else if (numToGuess < totalScore) {
		console.log('you lose');
		losses++;
		lossesHtml.text(losses);
		$("#outcome").text('You lose');
		gameStart();
	}
}

//calls 

gameStart();
