---
layout: article
title: Quantum Matching
key: fffy384fa123124eddsad12
comment: false
#author: Perry
mathjax: true
description: Matching game for quantum computing, qiskit, silq, and Q#
permalink: /match
sharing: true
---

<!-- org code https://codepen.io/sshastri/pen/mjJjWz -->

  <div class="container">

  <h1>Easy</h1>


  <section class="score-panel">
      <ul class="stars">
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-star"></i></li>
      </ul>

  <span class="moves">0</span> Moves
      <span><time id="timer">00Mins:00Secs</time></span>
      <div class="restart">
        <i class="fa fa-repeat"></i>
      </div>
    </section>

  <ul class="deck"></ul>

<!-- Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark" id="exampleModalLongTitle">Congratulations!!🎉🎇🎊</h5>
          </div>
          <div class="modal-body text-dark">
             <span class="moves">0</span> Moves
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary reset" data-dismiss="modal">Play Again</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

<style>

html {
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html,


.container {
    /*display: flex;*/
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/*h1 {
  margin-top: 20px;
    font-family: 'Pacifico', cursive;
    font-weight: 400;
  color:  #ff6600;
}*/


/*
 * Styles for the deck of cards
 */

.deck {
    width: 660px;
    min-height: 680px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    padding: 32px;
    border-radius: 10px;
    box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 3em;
}

.deck .card {
    height: 125px;
    width: 125px;
    background: #999999;
    font-size: 0;
    color: #111111;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
}

.deck .card.open {
    transform: rotateY(0);
    background: #F9A602;
    cursor: default;
}

.deck .card.show {
    font-size: 33px;
}

.deck .card.notMatch {
    background: #99ff66;
}

.deck .card.match {
    cursor: default;
    background: #00e6b8;
    font-size: 33px;
}


/*
 * Styles for the Score Panel
 */

.score-panel {
    text-align: left;
    width: 345px;
  margin:30px 5px 10px 5px;
  padding-left: 10px;
}

.score-panel .stars {
    margin: 0px;
    padding:0px;
    display: inline-block;
}

.score-panel .stars li {
    list-style: none;
    display: inline-block;
}

.score-panel .restart {
    float: right;
    cursor: pointer;
}

#timer{
  margin-left:5px;
  }

.moves{
  font-family: 'Roboto', sans-serif;
  padding-left: 5px;
}



@media screen and (max-width: 690px) {
	.deck{
		width: 600px;
		min-height: 620px;
	}
	.deck .card {
		height: 115px;
		width: 115px;
	}
}

@media screen and (max-width: 615px) {
	.deck {
		width: 550px;
		min-height: 570px;
	}

	.deck .card {
		height: 100px;
		width: 100px;
	}
}

@media screen and (max-width: 550px) {
	.deck {
		width: 500px;
		min-height: 520px;
	}

	.deck .card {
		height: 90px;
		width: 90px;
	}
}
@media screen and (max-width: 500px) {
	.deck {
		width: 400px;
		min-height: 420px;
	}

	.deck .card {
		height: 70px;
		width: 70px;
	}
	.score-panel {
	  font-size: 0.8em;
	  width: 300px;
	}
.score-panel .stars {
		margin-left: 15px;
		padding-left:5px;
		padding-right: 5px;
	}
	.deck .card.show{
		font-size: 27px;
	}
	.deck .card.match {
		font-size: 27px;
	}

}

@media screen and (max-width: 400px) {
	.container {
		font-size: 1.2em;
	}
	.deck {
		width: 350px;
		min-height: 370px;
		padding: 20px;
		margin: 0 0 2em;
	}
	.deck .card {
		height: 65px;
		width: 65px;
	}
	.score-panel {
		width: 350px;
    margin-right: 21px;
    padding:0px;
	}
	.deck .card.show{
		font-size: 22px;
	}
	.deck .card.match {
		font-size: 22px;
	}
}
@media screen and (max-width: 350px) {
	.container {
		font-size: 1em;
	}
/*	header {
		font-size: 3em;
    text-align: center;
	}*/

	.deck {
		width: 300px;
		min-height: 320px;
	}

	.deck .card {
		height: 55px;
		width: 55px;
	}

	.score-panel {
		width: 290px;
    margin-right: 20px;
    padding:0px;
	}
	.deck .card.show{
		font-size: 19px;
	}
	.deck .card.match {
		font-size: 19px;
	}
}

@media screen and (max-width: 300px){
	.container {
		font-size: 0.8em;
	}
/*	header {
		font-size: 2.8em;
    text-align: center;
	}*/

	.deck {
		width: 260px;
		min-height: 300px;
	}

	.deck .card {
		height: 45px;
		width: 45px;
	}

	.score-panel {
 		width: 220px;
		font-size: 0.7em;
    margin-right: 20px;
    padding:0px;
	}
	.deck .card .show{
		font-size: 15px;
	}
	.deck .card.match {
		font-size: 15px;
	}
}

</style>

<script>

// Create a list that holds all of your cards
let cards = [
  "fa fa-paper-plane-o",
  "fa fa-anchor",
  "fa fa-leaf",
  "fa fa-bicycle",
  "fa fa-diamond",
  "fa fa-bomb",
  "fa fa-bolt",
  "fa fa-cube"
];

cards = cards.concat(cards);

//creating an array to check the opneing of cards
let opened = [];

let counter = 0;

let moves = 0;

let stars = document.getElementsByClassName("fa fa-star");
console.log(stars);
let rating = 3;

let shuffledCards;

let hasTheTimerStarted = false;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Creation of cards dyanamically
function createCards() {
  
  //Storing the function in a var
  let shuffledCards = shuffle(cards);

  /*Accessing each card using for each loop $ item is the array element i.e its the classname*/
  shuffledCards.forEach(function(item) {
    
    /*Here we are creating li element and appending it to the ul and assiging the card name as a class name to the icon tag*/
    $("ul.deck").append(`<li class='card'><i class="${item}"></i></li>`);
  });
}

//Calling creating cards fuction will create cards dyanamically
createCards();

//Selecting every ele with card class nd binding a click event to each card
$(".card").click(function() {
  
  //Selcting current ele being clicked
  openCards($(this));
  console.log(this);
});

// Creating a function to open cards
function openCards(card) {
  
  /*checking if any card is opened or not if nothing is opened*/
  if (opened.length === 0) {
    
    //push a card into array
    opened.push(card);

    //open the card
    card.toggleClass("open show animated headShake");

    //Calling timer
    if (!hasTheTimerStarted) {
      timer();
      hasTheTimerStarted = true;
    }
  } 
  //if one card has already been pushed
  else if (opened.length === 1 && opened[0][0]!== card[0]) {
    
        //push that card in array
    opened.push(card);
    
    //open that card
    card.toggleClass("open show animated headShake");




    
    //a card will open
    timeOut = setTimeout(checkMatch, 500);
  }
}

/*creating a function to check whether the cards matched or not
when we have two opened cards in an array
*/
function checkMatch() {
  //an array to keep the track of opened cards
  let open = opened;

  open[0].toggleClass("disable");
  moveCounter();

  /*will check the matching of cards using same class name
  open[0][0]means first opned card at index 0
  open[1][0]means second opned card at index 0 
  we are seleting classname of icon tag
  */
  if (
    open[0][0].firstChild.className === open[1][0].firstChild.className &&
    open[0][0] !== open[1][0]
  ) {
    //matching cards
    open[0].toggleClass("match tada");
    open[1].toggleClass("match tada");

    //to stop click event on the opened cards
    open[0].css("pointer-events", "none");
    open[1].css("pointer-events", "none");

    //clear the array for next two cards
    opened = [];
    timeOut2 = setTimeout(matchCounter, 1000);
  } else if (opened.length === 1 && opened[0][0] !== card[0]) {
    opened.toggleClass("disable");
  } else {
    open[0].toggleClass("notMatch");
    open[1].toggleClass("notMatch");
    opened = [];
    setTimeout(function() {
      open[0].toggleClass("open show animated notMatch headShake");
      open[1].toggleClass("open show animated notMatch headShake");
    }, 300);
  }
}

/*creating a counter to check all for all the opened cards
if all the 8 pair matches then create an alert  
*/
function matchCounter() {
  counter++;
  if (counter === 8) {
    shouldTimerTick = false;
    openWinModal();
  }
}

//counting the no of moves
function moveCounter() {
  moves++;

  //accessing moves from span ele n changing the content means counting the moves
  $(".moves").html(moves);
  checkStars();
}

function checkStars() {
  if (moves > 10 && moves < 19) {
    stars[2].style.display = "none";
    rating = 2;
  } else if (moves >= 20) {
    stars[1].style.display = "none";
    rating = 1;
  }
}

  

function openWinModal() {
  const move = document.querySelector(".moves").innerText;
  
  
  if (move > 10 && move < 19) {
    stars[2].style.display = "none";
    rating = 2;
  } else if (moves >= 20) {
    stars[1].style.display = "none";
    rating = 1;
  }
  const times = document.querySelector("#timer").innerText;
  $(".modal-body").html(
    `You completed the game in ${times} . <br></br> You used ${move} moves. <br></br> You get ${rating} stars.`
  );

  document.querySelector(".reset").addEventListener("click", reset);
  $("#myModal").modal("show");
}

function reset() {
  $(".deck").html("");
  opened = [];
  counter = 0;
  moves = -1;
  rating = 3;
  moveCounter();
  shuffledCards = [];
  createCards();
  hasTheTimerStarted = false;
  shouldTimerTick = false;
  t.textContent = "00Mins:00Secs";
  seconds = 0;
  minutes = 0;
  $(".card").click(function() {
    openCards($(this));
  });
  stars[1].style.display = "block";
  stars[2].style.display = "block";
  $("#myModal").css("display", "none");
}

$(".restart").click(function() {
  reset();
});

//Timer
let shouldTimerTick;
let t = document.getElementById("timer"),
  seconds = 0,
  minutes = 0;

function timer() {
  let time;
  shouldTimerTick = true;

  time = setInterval(function() {
    if (shouldTimerTick) {
      (function add() {
        seconds++;
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }

        t.textContent =
          (minutes
            ? minutes > 9 ? minutes + "Mins" : "0" + minutes + "Mins"
            : "00Mins") +
          ":" +
          (seconds > 9 ? seconds + "Secs" : "0" + seconds + "Secs");
      })();
    } else {
      clearInterval(time);
    }
  }, 1000);
}


</script>