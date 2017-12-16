//define object crystalscounter
//generate random number for the sum, show random number in #randomNumber div
//generate random number for each crystal
//create on click event for each crystal picture
//for each crystal clicked, player's crystal count = sum of number attached to each crystal clicked
//define function if random number matches with sum of player's clicks, then player wins, wins++
//define function else if sum of player's clicks exceeds the random number, then player loses, losses++
//reset generate new random number for each crystal, generate new random number for the sum

$(document).ready(function() {
	// var crystalValue= 0;
	var crystalsCounter = {
		randomNumber: 0,
		crystalOne: 0,
		crystalTwo: 0,
		crystalThree: 0,
		crystalFour: 0,
		wins: 0,
		losses: 0,
		isOne: false,
		isTwo: false,
		isThree: false,
		isFour: false,
		currentScore: 0,
		generateNumber: function () {
			var target = Math.floor(Math.random()*101+19);
			var randOne = Math.floor(Math.random()*11+1);
			var randTwo = Math.floor(Math.random()*11+1);
			var randThree = Math.floor(Math.random()*11+1);
			var randFour = Math.floor(Math.random()*11+1);
			$("#randomNumber").text(target);
			this.randomNumber = target;
			this.crystalOne = randOne;
			this.crystalTwo = randTwo;
			this.crystalThree = randThree;
			this.crystalFour = randFour;
		},
		addCrystalOne: function() {
			this.currentScore += this.crystalOne;
			console.log(this.currentScore);
		},
		onClickOne: function() {
			$("#crystalOne").on("click", function() {
				crystalsCounter.addCrystalOne();
				crystalsCounter.score();
				crystalsCounter.checkWins();
			});
		},
		addCrystalTwo: function() {
			this.currentScore += this.crystalTwo;
			console.log(this.currentScore);
		},
		onClickTwo: function() {	
			$("#crystalTwo").on("click", function() {
				crystalsCounter.addCrystalTwo();
				crystalsCounter.score();
				crystalsCounter.checkWins();			
			});
		},
		addCrystalThree: function() {
			this.currentScore += this.crystalThree;
			console.log(this.currentScore);
		},
		onClickThree: function () {

			$("#crystalThree").on("click", function() {
				crystalsCounter.addCrystalThree();
				crystalsCounter.score();
				crystalsCounter.checkWins();
			});
		},
		addCrystalFour: function() {
			this.currentScore += this.crystalFour;
			console.log(this.currentScore);
		},
		onClickFour: function () {
			$("#crystalFour").on("click", function() {
				crystalsCounter.addCrystalFour();
				crystalsCounter.score();
				crystalsCounter.checkWins();
			});
		},
		score: function () {
			$("#playerNumber").text(this.currentScore);
		},

		checkWins: function () {
			if (this.currentScore === this.randomNumber) {
				this.wins++;
				$("#wins").text("Wins: " + this.wins);
				crystalsCounter.reset();
			}
			else if (this.currentScore > this.randomNumber) {
				this.losses++;
				$("#losses").text("Losses: " + this.losses);
				crystalsCounter.reset();
			}
		},
		reset: function() {
			crystalsCounter.generateNumber();
			this.currentScore = 0;
			this.score();

		},

	}


	crystalsCounter.onClickOne();
	crystalsCounter.onClickTwo();
	crystalsCounter.onClickThree();
	crystalsCounter.onClickFour();
	crystalsCounter.generateNumber();
	


});