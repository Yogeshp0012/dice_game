//Declaring Variables
var scores, activePlayer, roundScore,gamePlaying;

//Beginning of the game
init();



//Roll dice button
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
	document.querySelector('.dice').style.display = 'block';
	var dice = Math.floor(Math.random() * 6) + 1;
	if(dice !== 1){
	document.querySelector('.dice').src = "dice-" + dice + '.png';
	roundScore += dice
	document.getElementById('current-'+activePlayer).textContent = roundScore;
}
else {
	document.getElementById('score-'+activePlayer).textContent = '0';
	roundScore = 0;
	scores[activePlayer] = 0;
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	document.querySelector('.dice').style.display = 'None';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}
}
});


//Hold button
document.querySelector('.btn-hold').addEventListener('click',function() {
	if(gamePlaying){
	scores[activePlayer] += roundScore;
	document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];
	if(scores[activePlayer] >= 100) {
		document.getElementById('name-'+activePlayer).textContent='Winner';
		document.querySelector('.dice').style.display = 'None';
		gamePlaying = false;
	}
	else {
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	}
}
});


//New game
document.querySelector('.btn-new').addEventListener('click', function() {
	init();
	gamePlaying = true;
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.add('active');
});


//initializing the game
function init() {
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.dice').style.display = 'None';

}