---
layout: article
title: Experimental Card Test 2
key: fffy384fad
comment: false
author: Perry
mathjax: true
---
<div id="root"></div>

<style>

/* code needed to work on safari 
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
*/

body {
	margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	text-align:center;
  background-color: #040404e8;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

html, body, #root, .App {
	height: 100%;
}

.App {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

.flashcard-viewer {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

.flashcard-item-wrapper {
	width: 50%;
}

.flashcard-item {
	height: 0;
	width: 100%;
	padding-top: 60%;
	margin: 0.5rem;
	position: relative;
	perspective: 1000px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

}

.flashcard-item-inner {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	cursor: pointer;
	box-shadow: #4e4e4e6e 2px 2px 0;
	background: white;
	backface-visibility: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flashcard-item-helper {
	position: absolute;
	font-size: 1.5rem;
	color: #000000;
	top: 0;
	left: 0;
}

.nav-buttons-wrapper {
	color: #000000;
	font-size: 1.5rem;
	margin: 1rem 0;
}

.nav-arrow-btn {
	display: inline-block;
	margin: 0 2rem;
	cursor: pointer;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

} 

/* src of flash cards -> https://codepen.io/dylangggg/pen/YmGMew*/

</style>

 <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js"></script> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js"></script> 

<script>
          
function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
      { front: "yo yo $$\\displaystyle\\sum_{n \\ = \\ 0}^{\\infty} \\ \\frac{(-1)^n \\gamma^{2n} B^{2n}}{(2n)!} \\ + \\ i \\displaystyle\\sum_ {n \\ = \\ 0}^{\\infty} \\frac{(-1)^n \\gamma^{2n + 1} B^{2n + 1}}{(2n + 1)!}$$", back: "$$1$$" },
      { front: "$$\\displaystyle\\sum_{n \\ = \\ 0}^{\\infty} \\ \\frac{(-1)^n \\gamma^{2n} B^{2n}}{(2n)!} \\ + \\ i \\displaystyle\\sum_ {n \\ = \\ 0}^{\\infty} \\frac{(-1)^n \\gamma^{2n + 1} B^{2n + 1}}{(2n + 1)!}$$", back: "You're welcome" },
      { front: "$$00000000$$", back: "test1" },
      { front: "$$00000000$$", back: "test2" },
      { front: "$$00000000$$", back: "test3" },
      { front: "$$00000000$$", back: "test4" },
      { front: "$$00000000$$", back: "test5" },
      { front: "$$00000000$$", back: "test6" },
      { front: "$$00000000$$", back: "test7" },
      { front: "$$00000000$$", back: "test8" },
      { front: "$$00000000$$", back: "test9" },
      { front: "$$00000000$$", back: "test10" },
      { front: "$$00000000$$", back: "test11" }] }; 
  }
  render() {
    return (
      React.createElement("div", { className: "App" },
      React.createElement(Flashcards, { cards: this.state.cards })));
      MathJax.Hub.Typeset() 
  }}


class Flashcards extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "arrowHandler",




    left => {
      const { cardIndex } = this.state;
      if (left) {
        if (cardIndex - 1 >= 0) {
          this.setState({ cardIndex: cardIndex - 1 });
        }
      } else {
        if (cardIndex + 1 < this.props.cards.length) {
          this.setState({ cardIndex: cardIndex + 1 });
        }
      }
    });this.state = { cardIndex: 0 };}
  render() {
    return (
      React.createElement("div", { className: "flashcard-viewer noselect" },
      React.createElement("div", { className: "flashcard-item-wrapper" },
      React.createElement(FlashcardItem, {
        cardIndex: this.state.cardIndex,
        card: this.props.cards[this.state.cardIndex] })),


      React.createElement("div", null,
      React.createElement(NavButtons, {
        arrowHandler: this.arrowHandler,
        cardIndex: this.state.cardIndex,
        cardLength: this.props.cards.length }))));




  }}


class FlashcardItem extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clickHandler",













    () => {
      this.setState({
        flipped: !this.state.flipped,
        flipStyle: { transition: "transform 0.5s" } });

    });this.state = { flipped: false, flipStyle: { transition: "transform 0.5s" } };}componentDidUpdate(prevProps) {if (prevProps.cardIndex !== this.props.cardIndex) {this.setState({ flipped: false, flipStyle: {} });}}
  render() {
    const rotation = this.state.flipped ? 180 : 0;
    const frontStyle = {
      ...this.state.flipStyle,
      transform: `rotateY(${rotation}deg)` };

    const backStyle = {
      ...this.state.flipStyle,
      transform: `rotateY(${180 + rotation}deg)` };

    return (
      React.createElement("div", { className: "flashcard-item", onClick: () => this.clickHandler() },
      React.createElement("div", { className: "flashcard-item-inner", style: frontStyle },
      React.createElement("div", { className: "flashcard-item-helper" }, "Q: "),
      this.props.card.front),

      React.createElement("div", { className: "flashcard-item-inner", style: backStyle },
      React.createElement("div", { className: "flashcard-item-helper" }, "A: "),
      this.props.card.back)));



  }}


NavButtons = props => {
  const leftStyle = props.cardIndex - 1 < 0 ? { opacity: 0.5 } : {};
  const rightStyle =
  props.cardIndex + 1 >= props.cardLength ? { opacity: 0.5 } : {};
  return (
    React.createElement("div", { className: "nav-buttons-wrapper" },
    React.createElement("div", {
      className: "nav-arrow-btn",
      style: leftStyle,
      onClick: () => props.arrowHandler(true) }, "\u2190"),



    `${props.cardIndex + 1}/${props.cardLength}`,
    React.createElement("div", {
      className: "nav-arrow-btn",
      style: rightStyle,
      onClick: () => props.arrowHandler(false) }, "\u2192")));





};

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
</script>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->

<!-- Look into this https://codepen.io/herros/pen/rPBvLQ-->

<!-- The different deck type of flash cards https://codepen.io/demelere/pen/jrZXVJ-->
<!-- Try to edit the style of this design to make it work on wrelks.com!-->