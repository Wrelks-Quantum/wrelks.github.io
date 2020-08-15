---
layout: article
title: Experimental Card Test 3
key: fffy384fad
comment: false
author: Perry
mathjax: true
---
<!--https://codepen.io/jrjones34/pen/NEemmW-->

<body>
  <div>
    <div class="bg-full-screen">
      <figure class="figure-centered">
        <img id="fullScreenImg" class="img-fullscreen" src="" />
      </figure>
    </div>
    <div class="flash-card-container">
      <div class="flash-card-view" id="cardViewer">
        <div class="flash-card">
          <!-- Flash Card Front -->
          <div class="flash-card-front">
            <div class="grid-container full-height justify-center align-center text-only">
              <div class="grid-item">
                <h2 id="frontCopy" class="text-center"></h2>
              </div>
            </div>
          </div>
          <!-- End Flash Card Front -->

  <!-- Flash Card Back -->
  <div class="flash-card-back">
            <div class="grid-container full-height justify-center align-center media-and-text">
              <div class="grid-item">
                <video id="backVideo" class="img-responsive hide" src="" controls></video>
                <img id="backImage" class="img-responsive hide" src="" />
              </div>
              <div class="grid-item">
                <h2 id="backCopy" class="text-center"></h2>
              </div>
            </div>
          </div>
          <!-- End Flash Card Back -->
        </div>
      </div>
      <div class="grid-container justify-center flash-card-nav">
        <div class="spacer"></div>
        <div class="flash-card-nav">
          <button class="btn-circle" id="previousCard" onclick="previousCard();">&lt;</button>
          <span class="ml-1 mr-1">Card
            <span id="currentPosition"></span>
            of
            <span id="cardCount"></span>
          </span>
          <button class="btn-circle" id="nextCard" onclick="nextCard();">&gt;</button>
        </div>
        <div class="flash-card-options" style="visibility: hidden;">
          <input type="checkbox" id="cardBacksFirst" value="on" onclick="setInitialCardPosition();">
          <label for="cardBacksFirst">Show answers first</label>
        </div>
      </div>
    </div>
  </div>
</body>

<style>

/*body {
  height: auto;
  max-width: auto;
  margin: 0 auto;
  background-color: #e0e0e0;
} 
*/

.bg-full-screen {
  position: fixed;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: 1;
  background-color: #000;
  opacity: 0;
}

.bg-full-screen.show {
  opacity: 1;
  height: 100vh;
  width: 100vw;
  transition: opacity .25s ease-in-out;
}

.flash-card-container {
  position: absolute;
  top: 20rem; /* org - 2 | Test with this one*/
  left: 0;
  right: 0;
  bottom: 0;
}

.flash-card-view {
  position: relative;
  height: 40%;
  width: 50%; /* Changes size but not pos */
  margin: 0 auto;
  perspective: 1000px;
  transform: translateX(0);
  transition: all .25s ease;
}

.flash-card-view.flip .flash-card {
  transform: rotateX(180deg);
}

.flash-card-nav {
  grid-template-rows: auto auto;
  grid-row-gap: 2em;
}

.btn-circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  outline: 0;
}

.flash-card {
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  transition: 0.6s;
  transform-style: preserve-3d;
}

.flash-card-front, .flash-card-back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backface-visibility: hidden;
}

.flash-card-front {
  transform: rotateX(0deg);
}

.flash-card-back {
  transform: rotateX(180deg);
}

.flash-card-view.slide-left {
  transform: translateX(-110%);
  transition: all .25s ease;
}

.flash-card-view.slide-left-stop {
  transform: translateX(-5%);
  transition: all .05s ease;
}

.flash-card-view.slide-right {
  transform: translateX(110%);
  transition: all .25s ease;
}

.flash-card-view.slide-right-stop {
  transform: translateX(5%);
  transition: all .05s ease;
}

.grid-container {
  overflow-y: auto;
  display: grid;
  padding: 0 .5rem;
}

.grid-container.text-only {
  grid-template-columns: auto;
}

.spacer {
  display: none;
}

.img-responsive {
  width: 100%;
  height: auto;
}

.figure-centered {
  height: 100%;
  width: 100%;
}

.img-fullscreen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-center {
  text-align: center;
}

.full-height {
  height: 100%;
}

.justify-center {
  justify-items: center;
}

.align-center {
  align-items: center;
}

.ml-1 {
  margin-left: 1rem;
}

.mr-1 {
  margin-right: 1rem;
}

.hide {
  display: none;
}

@media screen and (min-width: 901px) {
  .grid-container.media-and-text {
    grid-template-columns: 60% auto;
    grid-column-gap: 1.5rem;
  }
  
  .grid-container.flash-card-nav {
    grid-template-columns: 25% auto 25%;
  }
  
  .spacer {
    display: inline;
  }
}

@media (orientation: landscape) {
  .img-fullscreen {
    height: 100%;
    width: auto;
  }
}

@media (orientation: portrait) {
  .img-fullscreen {
    height: auto;
    width: 100%;
  }
}

.debug-red {
  border: 1px solid red;
}

.debug-green {
  border: 1px solid green;
}

.debug-blue {
  border: 1px solid blue;
}

</style>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js"></script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js"></script> 

<script>
 const deck = {
  "cards": [
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "$$\\displaystyle\\sum_{n \\ = \\ 0}^{\\infty} \\ \\frac{(-1)^n \\gamma^{2n} B^{2n}}{(2n)!} \\ + \\ i \\displaystyle\\sum_{n \\ = \\ 0}^{\\infty} \\frac{(-1)^n \\gamma^{2n + 1} B^{2n + 1}}{(2n + 1)!}$$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "The bilaterally symmetric sympathetic chain ganglia, also called the paravertebral ganglia, are located just ventral and lateral to the spinal cord. The chain extends from the upper neck down to the coccyx, forming the unpaired coccygeal ganglion"
    },
    {
      "position": 2,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "$$10101203$$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "Supine position with head resting on pillow"
    }
  ]
};

window.onload = function() {
  hideNavButtonsForMobileOperatingSystems();
  showCard(0);
  var initialX = null;
  
  document.getElementsByClassName('flash-card')[0]
    .addEventListener('click', handleClick, false);
  document.getElementsByClassName('bg-full-screen')[0]
    .addEventListener('click', handleClick, false);
  document.getElementsByClassName('img-responsive')[0]
    .addEventListener('click', handleClick, false);
  
  var swipe = document.getElementById('cardViewer');
  swipe.addEventListener('touchstart', handleTouchStart, false);
  swipe.addEventListener('touchmove', handleTouchMove, false);
  swipe.addEventListener('touchend', handleTouchEnd, false);
}

document.body.onkeyup = function(e) {
  const spaceBar = 32;
  const leftArrow = 37;
  const rightArrow = 39;
  
  switch (e.keyCode) {
    case spaceBar:
      flipCard();
      break;
    case leftArrow:
      previousCard();
      break;
    case rightArrow:
      nextCard();
      break;
  }
}

function toggleFullscreen(event, el) {
  event.stopPropagation();
  
  if (el) {
    src = el.src;
    document.getElementById('fullScreenImg').src = src;
  } else {
    document.getElementById('fullScreenImg').src = '';
  }
  
  document.getElementsByClassName('bg-full-screen')[0].classList.toggle('show');
}
 
function flipCard() { document.getElementById('cardViewer').classList.toggle('flip');
}
 
function nextCard() {
MathJax.Hub.Typeset()
  const newIndex = parseInt(document.getElementById('currentPosition').textContent, 10);
  const cardCount = deck.cards.length;
  
  let transformClass = 'slide-right-stop';
  let transitionTime = 50;
  if (cardCount > newIndex) {
    transformClass = 'slide-right';
    transitionTime = 250;
  }
  
  document.getElementsByClassName('flash-card-view')[0].classList.add(transformClass);
  setTimeout(function(){
    if (cardCount > newIndex) showCard(newIndex);
    document.getElementsByClassName('flash-card-view')[0].classList.remove(transformClass);
  }, transitionTime);
}

function previousCard() {
MathJax.Hub.Typeset()
  const newIndex = parseInt(document.getElementById('currentPosition').textContent, 10) - 2;
  
  let transformClass = 'slide-left-stop';
  let transitionTime = 50;
  if (newIndex >= 0) {
    transformClass = 'slide-left';
    transitionTime = 250;
  }
  
  document.getElementsByClassName('flash-card-view')[0].classList.add(transformClass);
  setTimeout(function() {
    if (newIndex >= 0) showCard(newIndex);
    document.getElementsByClassName('flash-card-view')[0].classList.remove(transformClass);
  }, transitionTime);
}

function swipeNextCard() {
 MathJax.Hub.Typeset()
  const newIndex = parseInt(document.getElementById('currentPosition').textContent, 10);
  const cardCount = deck.cards.length;
  let transformClass = 'slide-left-stop';
  let transitionTime = 50;
  if (cardCount > newIndex) {
    transformClass = 'slide-left';
    transitionTime = 250;
  }
  
  let cardView = document.getElementById('cardViewer');
  
  cardView.style.transform = null;
  cardView.classList.add(transformClass);
  setTimeout(function() {
    if (cardCount > newIndex) showCard(newIndex);
    document.getElementsByClassName('flash-card-view')[0].classList.remove(transformClass);
  }, transitionTime);
}

function swipePreviousCard() {
MathJax.Hub.Typeset()
  const newIndex = parseInt(document.getElementById('currentPosition').textContent, 10) - 2;
  
  let transformClass = 'slide-right-stop';
  let transitionTime = 50;
  if (newIndex >= 0) {
    transformClass = 'slide-right';
    transitionTime = 250;
  }
  
  let cardView = document.getElementById('cardViewer');
  
  cardView.style.transform = null;
  cardView.classList.add(transformClass);
  setTimeout(function() {
    if (newIndex >= 0) showCard(newIndex);
    document.getElementsByClassName('flash-card-view')[0].classList.remove(transformClass);
  }, transitionTime);
}

function showCard(i) {
  setInitialCardPosition();
  const card = deck.cards[i];
  
  setFrontMedia(card.frontMedia);
  document.getElementById('frontCopy').innerHTML = card.frontCopy;
  
  setBackMedia(card.backMedia);
  document.getElementById('backCopy').innerHTML = card.backCopy;
  
  document.getElementById('currentPosition').innerHTML = i + 1;
  document.getElementById('cardCount').innerHTML = deck.cards.length;
}

function setFrontMedia(media) {
 
  if (media.src === null) return false;
  
  let mediaEl;
  if (media.mimeType.indexOf("video") >= 0) {
    mediaEl = document.getElementById('frontVideo');
    
    mediaEl.classList.remove('hide');
    document.getElementById('frontImage').classList.add('hide');
  } else {
    mediaEl = document.getElementById('frontImage');
    
    mediaEl.classList.remove('hide');
    document.getElementById('frontVideo').classList.add('hide');
  }
  
  mediaEl.src = media.src;
  mediaEl.type = media.mimeType;
}

function setBackMedia(media) {
  MathJax.Hub.Typeset()
  if (media.src === null) return false;
  
  let mediaEl;
  if (media.mimeType.indexOf("video") >= 0) {
    mediaEl = document.getElementById('backVideo');
    
    mediaEl.classList.remove('hide');
    document.getElementById('backImage').classList.add('hide');
  }  else {
    mediaEl = document.getElementById('backImage');
    
    mediaEl.classList.remove('hide');
    document.getElementById('backVideo').classList.add('hide');
  }
  
  mediaEl.src = media.src;
  mediaEl.type = media.mimeType;
}

function showCardBacksFirst() {
  return document.getElementById('cardBacksFirst').checked;
}

function setInitialCardPosition() {
  if (showCardBacksFirst()) {
    document.getElementById('cardViewer').classList.add('flip');
  } else {
    document.getElementById('cardViewer').classList.remove('flip');
  }
}

function handleTouchStart(e) {
  initialX = e.touches[0].clientX;
  e.preventDefault();
}

function handleTouchMove(e) {
  if (initialX === null) return;
  
  let currentX = e.changedTouches[0].clientX;
  let diffX = currentX - initialX;
  let card = document.getElementById('cardViewer');
  
  card.style.transform = 'translateX(' + diffX + 'px)';
  
  e.preventDefault();
}

function handleTouchEnd(e) {
  if (initialX === null) return;

  let currentX = e.changedTouches[0].clientX;
  
  let diffX = currentX - initialX;
  let card = document.getElementById('cardViewer');
  let cardWidth = card.offsetWidth;
  let percentMovedX = diffX / cardWidth;
  
  if (Math.abs(percentMovedX) >= 0.2) {
    // sliding horizontally
    if (percentMovedX >= 0.2) {
      // swiped left
      card.style.transform = null;
      swipePreviousCard();
      e.preventDefault();
    } else if (percentMovedX <= -0.2) {
      // swiped right
      card.style.transform = null;
      swipeNextCard();
      e.preventDefault();
    }
  } else if (Math.abs(diffX) <= 35) {
    if (e.target.classList.contains('img-responsive')) {
      toggleFullscreen(e, e.target);
    } else {
      flipCard();
    }
  }
  
  initialX = null;
}

function handleClick(e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    toggleFullscreen(e, e.target);
  } else {
    flipCard();
  }
}

function isMobileOperatingSystem() {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/windows phone/i.test(userAgent) ||
      /android/i.test(userAgent) ||
      /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)
  {
    return true;
  }

  return false;
}

function hideNavButtonsForMobileOperatingSystems() {
  if (isMobileOperatingSystem()) {
    document.querySelectorAll('.btn-circle').forEach(function(el) {
      el.style.display = 'none';
    });
    document.getElementById('previousCard').style.display = 'none';
    document.getElementById('nextCard').style.display = 'none';
  }
}
</script>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->

<!-- Look into this https://codepen.io/herros/pen/rPBvLQ-->

<!-- The different deck type of flash cards https://codepen.io/demelere/pen/jrZXVJ-->
<!-- Try to edit the style of this design to make it work on wrelks.com!-->