//define object crystalscounter
//generate random number for the sum, show random number in #randomNumber div
//generate random number for each crystal
//create on click event for each crystal picture
//for each crystal clicked, player's crystal count = sum of number attached to each crystal clicked
//define function if random number matches with sum of player's clicks, then player wins, wins++
//define function else if sum of player's clicks exceeds the random number, then player loses, losses++
//reset generate new random number for each crystal, generate new random number for the sum

$(document).ready(function() {

	var crystalsCounter = {

		randomNumber: Math.floor(Math.random()*101+19),
		wins: 0,
		losses: 0,
		isOne: false,
		isTwo: false,
		isThree: false,
		isFour: false,


//create function to show random number in #randomNumber div
		generateNumber: function () {
			$("#randomNumber").text(this.randomNumber);
		},

//if on click picture crystalOne, var playerCount = crystalOne + previous crystal picture clicked 
//if on click picture crystalTwo, var playerCount = crystalTwo + previous crystal picture clicked
		playerCounter: function() {

			var currentScore = this.addCrystalOne(crystalOne) + this.addCrystalTwo(crystalTwo) + this.addCrystalThree(crystalThree) + this.addCrystalFour(crystalFour);
			
			$("#playerNumber").text(currentScore);
		},

		addCrystalOne: function() {

			var crystalOne = Math.floor(Math.random()*11+1);
			var clickOne = 0;

			$("#crystalOne").on("click", function() {
				clickOne = crystalOne;
				console.log(crystalOne);
				console.log(clickOne);
				crystalsCounter.playerCounter();
			});
			

		},
		addCrystalTwo: function() {

			var crystalTwo = Math.floor(Math.random()*11+1);
			var clickTwo = 0;

			$("#crystalTwo").on("click", function() {
				clickTwo = crystalTwo;
				console.log(crystalTwo);
				console.log(clickTwo);
				$("#playerNumber").text(clickTwo);
				this.isTwo = true;
				crystalsCounter.playerCounter();
			});


		},
		addCrystalThree: function() {
			var crystalThree = Math.floor(Math.random()*11+1);
			var clickThree = 0;

			$("#crystalThree").on("click", function() {
				clickThree = crystalThree;
				console.log(crystalThree);
				console.log(clickThree);
				$("#playerNumber").text(clickThree);
				this.isThree = true;
				crystalsCounter.playerCounter();
			});
		},
		addCrystalFour: function() {
			var crystalFour = Math.floor(Math.random()*11+1);
			var clickFour = 0;

			$("#crystalFour").on("click", function() {
				clickFour = crystalFour;
				console.log(crystalFour);
				console.log(clickFour);
				$("#playerNumber").text(clickFour);
				this.isFour = true;
				crystalsCounter.playerCounter();
			});
		},


	}

	crystalsCounter.generateNumber();
	crystalsCounter.addCrystalFour();
	crystalsCounter.addCrystalThree();
crystalsCounter.addCrystalTwo();
crystalsCounter.addCrystalOne();

});