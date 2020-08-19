---
layout: article
title: Linear Algebra | Part 1
key: fffy384fad12
comment: false
#author: Perry
mathjax: true
---
<!--https://codepen.io/jrjones34/pen/NEemmW-->

<body>
<div class="seperate">
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
            <div class="grid-container full-height justify-center align-center text-only"> <!-- 'Text-only' will center text :)-->
              <div class="grid-item"><div class="textfit1">
                <p id="frontCopy" class="text-center" style=""></p></div>
              </div>
            </div>
          </div>
          <!-- End Flash Card Front -->

  <!-- Flash Card Back -->
  <div class="flash-card-back">
            <div class="grid-container full-height justify-center align-center text-only">
              <div class="grid-item">
                <video id="backVideo" class="img-responsive hide" src="" controls></video>
                <img id="backImage" class="img-responsive hide" src="" />
              </div>
              <div class="grid-item"><div class="textfit1">
                <p id="backCopy" class="text-center" style=""></p></div>
              </div>
            </div>
          </div>
          <!-- End Flash Card Back -->
        </div>
      </div>
      <div class="seperate">
      <div class="grid-container justify-center flash-card-nav">
        <div class="spacer"></div>
        <div class="flash-card-nav">
          <button class="btn-circle" id="previousCard" onclick="previousCard();">&lt;</button>
          <span class="ml-1 mr-1">
            <span id="currentPosition"></span>
            /
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
</div>
</div> 
  <br>
    <br>
      <br>
        <br>
</body>

[Back](https://wrelks.com){:.button.button--primary.button--rounded}

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

.seperate {
  padding: 200px;
}

/*fontCopy {
  font-size: 1.3rem;
}*/

body

@media screen and (max-width : 500px) /*mobile phones */
{
  .flash-card-view
    {
      width: 100%
    }
  .textfit1 {
      font-size: 0.745rem;
  }
  .flash-card-container {
    top: 16rem;
  }
}

@media screen and (min-width : 501px)
{
  .flash-card-view
    {
      width: 70%
    }
  .textfit1 {
      font-size: 1.3rem;
  }
  .flash-card-container {
    top: 20rem;
  }
}

.bg-full-screen.show {
  opacity: 1;
  height: 100vh;
  width: 100vw;
  transition: opacity .25s ease-in-out;
}

/* code needed to work on safari - Back of flash card test
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
*/

.flash-card-container {
  position: absolute;
  /*top: 16rem;*/ /* org - 2 | Test with this one CHANGES HOW HIGH IT IS*/
  left: 0;
  right: 0;
  bottom: 0; /* 0 fixes cut off problems on ipad - laptops? */
  /*margin: 1em auto 0 auto;*/
  /*padding: 0 20px;*/
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 300px;
}

/* make mathjax fit container */

.MathJax {
font-size: 0.2em;
}

.flash-card-view {
  position: relative;
  height: 40%; /* how thicc it is */
  /*width: 70%; */ /* Changes size but not pos */ /* how long it is*/ /*70% on everything, 100% on phones%*/
  margin: 0 auto;
  perspective: 1000px;
  transform: translateX(0);
  transition: all .25s ease;
  /*border: 1px solid red;*/
  border-radius: 5px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flash-card-view.flip .flash-card {
  transform: rotateX(180deg);
}

.flash-card-nav {
  grid-template-rows: auto auto;
  grid-row-gap: 9rem;
}

.btn-circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  outline: 0;
}

.article__content { /*fixed copped off n on bottom of sigma notation for apple ipad*/
    line-height: 1.8;
    word-wrap: break-word;
}

.flash-card {
  height: 100%;
  background-color: #fff;
  border-radius: 1rem;
  transition: 0.6s;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

.flash-card-front, .flash-card-back {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
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
  height: 70px;
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

/*
@media screen and (min-width: 801px) {
  .grid-container.media-and-text {
    grid-template-columns: 60% auto;
    grid-column-gap: 1.5rem;
  }

@media screen and (min-width: 801px){
    .flash-card-view {
    width: 100%;
  }
}

@media screen and (min-width: 801px){
  .text-center {
  font-size:1.2rem;
  }
} */

  
  .grid-container.flash-card-nav {
    grid-template-columns: 25% auto 25%;
    height: 30px;
  }
  
  .spacer {
    display: inline;
  }
}

@media (orientation: landscape) {
  .img-fullscreen {
    height: 0px;
    width: 0px;
  }
}

@media (orientation: portrait) {
  .img-fullscreen {
    height: 0px;
    width: 0px;
  }
}

.debug-red {
  border: 1px solid red;
}

.article__content { /*fixed copped off n on bottom of sigma notation for apple ipad*/
    line-height: 1.5;
}

.debug-green {
  border: 1px solid green;
}

.debug-blue {
  border: 1px solid blue;
}

</style>

<!-- MathJax auto fit container code
<script type="text/javascript">
  window.MathJax = {
    AuthorInit: function () {
      MathJax.Hub.Register.StartupHook("Begin",function () {
        MathJax.Hub.Queue(function () {
          var math = document.getElementById("rescale");
          var w = math.offsetWidth, W = math.parentNode.offsetWidth-40;
          if (w > W) {
            math.style.fontSize = (95*W/w)+"%";
            MathJax.Hub.getAllJax(math)[0].Rerender();
          }
        });
      });
    },
    jax: ["input/TeX","output/HTML-CSS","output/NativeMML"],
  };
</script> -->

 <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js"></script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js"></script> 

<script>

  window.MathJax = {
    AuthorInit: function () {
      MathJax.Hub.Register.StartupHook("Begin",function () {
        MathJax.Hub.Queue(function () {
          var math = document.getElementById("rescale");
          var w = math.offsetWidth, W = math.parentNode.offsetWidth-40;
          if (w > W) {
            math.style.fontSize = (95*W/w)+"%";
            MathJax.Hub.getAllJax(math)[0].Rerender();
          }
        });
      });
    },
    jax: ["input/TeX","output/HTML-CSS","output/NativeMML"],
  };

 const deck = {
  "cards": [
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "How do you represent $|0\\rangle$ as a vector?",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "$\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$"
    },
    {
      "position": 2,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "How do you represent $|1\\rangle$ as a vector?",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "$\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$"
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "How do you write $\\sigma_x$ as a matrix?",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$"
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "What is the resulting vector after applying $\\sigma_x$ to $|1\\rangle$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} \\ =  \\ \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$"
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "How would you find the probability of getting a $|1\\rangle$ or $|0\\rangle$ using this equation? $\\alpha\\,\\left|0\\right\\rangle+\\beta\\,\\left|1\\right\\rangle$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "By taking the absolute square of both $\\alpha$ and $\\beta$, like so, $|\\alpha|^2$ & $|\\beta|^2$ The resulting value is the probability of their corresponding ket."
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "What does $\\psi$ represent?",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "$\\psi$ represents some vector space"
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "How do you create the following state? $\\tfrac{1}{\\sqrt{2}}(|0\\rangle + |1\\rangle)$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "By applying a Hadamard gate to $|0\\rangle$"
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "What affect will this matrix have on a single qubit? $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1\\end{bmatrix}$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "Nothing! This is a identity matrix, and when this matrix is multiplied to a vector the product is the same as the initial vector."
    },
    {
      "position": 1,
      "frontMedia": {
        "mimeType": null,
        "src": null
      },
      "frontCopy": "What's another way to write a one qubit system based on the following? $\\left|\\psi\\right\\rangle=\\begin{bmatrix} a_0 \\\\ a_1 \\end{bmatrix}$",
      "backMedia": {
        "mimeType": null,
        "src": null
      },
      "backCopy": "$\\left|\\psi\\right\\rangle=a_0\\,\\left|0\\right\\rangle+a_1\\,\\left|1\\right\\rangle$"
    },
  ]
};

window.onload = function() {
 /* hideNavButtonsForMobileOperatingSystems();*/
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
  MathJax.Hub.Typeset()
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
  MathJax.Hub.Typeset()
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
  MathJax.Hub.Typeset()
  if (initialX === null) return;
  
  let currentX = e.changedTouches[0].clientX;
  let diffX = currentX - initialX;
  let card = document.getElementById('cardViewer');
  
  card.style.transform = 'translateX(' + diffX + 'px)';
  
  e.preventDefault();
}

function handleTouchEnd(e) {
  MathJax.Hub.Typeset()
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
  MathJax.Hub.Typeset()
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
/*
function hideNavButtonsForMobileOperatingSystems() {
  if (isMobileOperatingSystem()) {
    document.querySelectorAll('.btn-circle').forEach(function(el) {
      el.style.display = 'none';
    });
    document.getElementById('previousCard').style.display = 'none';
    document.getElementById('nextCard').style.display = 'none';
  }
} */

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

/*if (isMobile == true){
  alert("Hello, I see that you are using a mobile device! That's totally ok, just please be aware that at the current moment, flash cards work best on desktops, laptops, and tablet devices. You may experience errors or cut off text on mobile. You will now be re-directed to a more mobile friendly flashcards section. Thank you!");
  window.location.href = "https://wrelks.com";
}*/

</script>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->

<!-- Look into this https://codepen.io/herros/pen/rPBvLQ-->

<!-- The different deck type of flash cards https://codepen.io/demelere/pen/jrZXVJ-->
<!-- Try to edit the style of this design to make it work on wrelks.com!-->