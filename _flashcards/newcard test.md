---
layout: article
title: Experimental Card Test
key: fffy384fad
comment: false
author: Perry
mathjax: true
---

> <strong>The list of flashcards is continually being updated with new problems on a monthly basis, but if you have any ideas for a good question that belongs here email me at, <perry@wrelks.com></strong>


  <div class="container">
      <div class="row" id="midrow">

  <div class="flip-container" id="flashcard">
          <div class="flipper">
            <div class="front">
              <span id="flashcard--content_en">almonds</span>
            </div>
            <div class="back">
              <span id="flashcard--content_es">almendras</span>
            </div>
          </div>
        </div>
  
<br>
<br>
  <div class="button-container">
          <button class="refresh"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
          <button class="refresh"><i class="fa fa-random" aria-hidden="true"></i></button>
          <!--           <button class="refresh"><i class="fa fa-star-o" aria-hidden="true"></i></button> -->
          <button class="refresh"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>

  </div>
    </div>




<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
}

wrap{ /* No affect */
  min-height:100%;
  height: auto;
  margin: 0 auto -60px;
  padding: 0 0 60px;
}

.navbar {
  box-shadow: 0px 5px 16px -1px rgba(163, 163, 163, 0.4);
  font-family: "Sorts Mill Goudy", serif;
  color: #a78ac3;
  height: 82px;
  vertical-align: middle;
  background-color: white;
}

.navbar-brand {
  position: relative;
  padding: 0 28px 0 15px;
  font-size: 25px;
  font-weight: bold;
  vertical-align: middle;
  line-height: 80px;
  letter-spacing: 2px;
}

.nav li {
  display: inline;
  vertical-align: middle;
}

.navbar-nav li a {
  font-size: 15px;
  font-weight: bold;
  padding: 30px 25px 33px 25px;
}

.navbar-nav li a:hover {
  background-color: #d9d9d9;
  height: 100%;
}

#navbar-collapse {
  background-color: white;
}

.glyphicon-menu-hamburger {
  padding: 10px 0 10px 0;
  vertical-align: middle;
  font-size: 20px;
  color: #337ab7;
}

#midrow {
  margin-top: 120px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}

/* FLASH CARD STYLING */

.container .button-container {
  text-align: center;
  /*   margin-top: 10px;   */
}

.container .button-container button {
  font-size: 15px;
}

.container .button-container i {
  font-size: 25px;
}

.button-container button {
  padding: 10px 15px;
  font-weight: bold;
  background-color: transparent;
  border-radius: 5px;
  color: black;
}

.button-container {
  display: block;
}

.container button:hover {
  /* cursor: pointer; */
}

.container button:focus {
  outline: 0;
}

.container button.button-active {
  /* 	background-color: gray; */
  /* 	color: #374D57; */
}

.flag {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 51%;
  border: 0;
  width: 3em;
  height: 3em;
  font-size: 0.5em;
  color: white;
  background-color: #337ab7;
}

.flag:focus {
  outline: 0;
}

/* entire container, keeps perspective */

.container .flip-container {
  margin: 0 auto;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -ms-transform: perspective(1000px);
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
} /* No affect */

/* flip the pane  */
.container .flip-container.flipped .flipper,
.container .flip-container.flipped .flipper {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.container .flip-container,
.front,
.back {
  width: 400px;
  height: 250px;
 	border-radius: 12px; 
  box-sizing: border-box;
}

@media only screen and (max-width: 200px) {
  .flip-container {
    /* 		margin: 10vh auto; */
  }

  .flip-container,
  .front,
  .back {
    width: 150vw;
    height: 80vh;
  }
}

.front,
.back {
  text-align: center;
  font-family: "Arvo";
  font-size: 2.4em;
  line-height: 1em;
  padding-top: calc(50% - 3em); /* No affect*/
  color: #ffffff;
  /* 	border: 1px solid #95A39D; */
}

/* flip speed goes here */
.flipper {
  -webkit-transition: 0.2s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 0.2s;
  -moz-transition: 0.2s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 0.2s;
  transform-style: preserve-3d;
  position: relative;
}

/* hide back of pane during swap */
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.3s;
  -webkit-transform-style: preserve-3d;
  -webkit-transform: rotateY(0deg);
  -moz-transition: 0.3s;
  -moz-transform-style: preserve-3d;
  -moz-transform: rotateY(0deg);
  -o-transition: 0.3s;
  -o-transform-style: preserve-3d;
  -o-transform: rotateY(0deg);
  -ms-transition: 0.3s;
  -ms-transform-style: preserve-3d;
  -ms-transform: rotateY(0deg);
  transition: 0.3s;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 10px 10px 16px -1px rgba(163, 163, 163, 0.4);
}

/* front pane, placed above back */
.front {
  /* 	z-index: 2; */
  /* for firefox 31 */
  -webkit-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  background-color: #337ab7;
}

/* back, initially hidden pane */
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  background-color: #2bbe83;
}

.container .refresh {
  border: 0;
}

.container .refresh:hover {
  border: 0;
  background-color: transparent;
}


</style>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
   <script src="https://isotope.metafizzy.co/jquery.isotope.min.js"></script> 

<script>

$.getJSON(
  "https://wrelks.com/flashcards/questions.json",
  function (data) {
    vocabWords = data.feed.entry;
    numVocabWords = vocabWords.length;
  }
);

/*var vocabulary = [{
 	"en": "no",
 	"es": "yes"
 }, {
 	"en": "nono",
 	"es": "yesyes"
 }, {
 	"en": "nonono",
 	"es": "yesyesyes"
 }];
  var numDictionaryItems = vocabulary.length;*/



var flashcard = document.getElementById("flashcard");
var refreshBtns = document.getElementsByClassName("refresh");

flashcard.addEventListener(
  "click",
  function () {
    this.classList.toggle("flipped");
  },
  false
);

// window.addEventListener('keydown', checkKeyPressed, false);

// function checkKeyPressed(e) {
//     if (e.keyCode == "39") {
//         this.classList.toggle('flipped');
//     }
// }

// left and right - next and previous card
// up and down - flip card
// space or enter - star card

// left = 37
// up = 38
// right = 39
// down = 40
// spaceBar: 32

for (i = 0; i < refreshBtns.length; i++) {
  refreshBtns[i].addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      e.preventDefault();
      var randomNum = getRandomInt(0, numVocabWords);
      newWord = vocabWords[randomNum];
      var enContent = document.getElementById("flashcard--content_en");
      var esContent = document.getElementById("flashcard--content_es");
      enContent.textContent = newWord.gsx$en.$t;
      esContent.textContent = newWord.gsx$es.$t;
    },
    false
  );
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// ***PREV NEXT BUTTONS***

// ***JSON DATA***

// var vocabulary = [{
// 	"en": "beer",
// 	"es": "la cerveza"
// }, {
// 	"en": "biscuit",
// 	"es": "la galleta"
// }, {
// 	"en": "bonbon",
// 	"es": "el bombón"
// }, {
// 	"en": "brandy",
// 	"es": "el aguardiente"
// }, {
// 	"en": "bratwurst",
// 	"es": "la salchicha"
// }, {
// 	"en": "bread",
// 	"es": "el pan"
// }, {
// 	"en": "bun",
// 	"es": "el panecillo"
// }, {
// 	"en": "butter",
// 	"es": "la mantequilla"
// }, {
// 	"en": "cake",
// 	"es": "el bollo"
// }, {
// 	"en": "can, tin",
// 	"es": "la conserva"
// }, {
// 	"en": "champagne",
// 	"es": "el champán"
// }, {
// 	"en": "cheese",
// 	"es": "el queso"
// }, {
// 	"en": "chocolate",
// 	"es": "el chocolate"
// }, {
// 	"en": "cider",
// 	"es": "la sidra"
// }, {
// 	"en": "cinnamon",
// 	"es": "la canela"
// }, {
// 	"en": "cocoa",
// 	"es": "el cacao"
// }, {
// 	"en": "coffee",
// 	"es": "el café"
// }, {
// 	"en": "cream",
// 	"es": "la nata"
// }, {
// 	"en": "egg",
// 	"es": "el huevo"
// }, {
// 	"en": "fish",
// 	"es": "el pescado"
// }, {
// 	"en": "flour",
// 	"es": "la harina"
// }, {
// 	"en": "ham",
// 	"es": "el jamón"
// }, {
// 	"en": "honey",
// 	"es": "la miel"
// }, {
// 	"en": "ice cream",
// 	"es": "el helado"
// }, {
// 	"en": "juice",
// 	"es": "el zumo"
// }, {
// 	"en": "kefir",
// 	"es": "el kéfir"
// }, {
// 	"en": "margarine",
// 	"es": "la margarina"
// }, {
// 	"en": "meat",
// 	"es": "la carne"
// }, {
// 	"en": "milk",
// 	"es": "la leche"
// }, {
// 	"en": "milk powder",
// 	"es": "la leche en polvo"
// }, {
// 	"en": "mineral water",
// 	"es": "el agua mineral"
// }, {
// 	"en": "mustard",
// 	"es": "la mostaza"
// }, {
// 	"en": "olive oil",
// 	"es": "el aceite de oliva"
// }, {
// 	"en": "pepper",
// 	"es": "la pimienta"
// }, {
// 	"en": "raisin",
// 	"es": "la uva pasa"
// }, {
// 	"en": "rice",
// 	"es": "el arroz"
// }, {
// 	"en": "salt",
// 	"es": "la sal"
// }, {
// 	"en": "sausage",
// 	"es": "el chorizo"
// }, {
// 	"en": "soft drink",
// 	"es": "el refresco"
// }, {
// 	"en": "spice",
// 	"es": "la especia"
// }, {
// 	"en": "sugar",
// 	"es": "el azúcar"
// }, {
// 	"en": "tea",
// 	"es": "el té"
// }, {
// 	"en": "vinegar",
// 	"es": "el vinagre"
// }, {
// 	"en": "water",
// 	"es": "el agua"
// }, {
// 	"en": "wine",
// 	"es": "el vino"
// }, {
// 	"en": "yoghurt",
// 	"es": "el yogurt"
// }];
// var numDictionaryItems = vocabulary.length;

</script>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->

<!-- Look into this https://codepen.io/herros/pen/rPBvLQ-->

<!-- The different deck type of flash cards https://codepen.io/demelere/pen/jrZXVJ-->
<!-- Try to edit the style of this design to make it work on wrelks.com!-->