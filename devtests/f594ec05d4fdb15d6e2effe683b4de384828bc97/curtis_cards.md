---
layout: article
title: Curtis Cards
key: fffy384fad123ds
comment: false
author: Perry
mathjax: true
---

<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Flash Cards</title>
  <meta name="description" content="Simple, animated, and imageless flash cards using HTML/CSS/jQuery.">
  <meta name="author" content="Curtis Blackwell&hellip; sorta.">

  <meta name="viewport" content="width=device-width">

<link rel="stylesheet" type="text/css" href="/css/style.css">

 <link href="http://fonts.googleapis.com/css?family=Schoolbell" rel="stylesheet" type="text/css">
 <script src="js/vendor/modernizr-2.5.3.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle/3.0.3/jquery.cycle.all.min.js ">

</head>
<body>

 <ul id="deck">
    <li class="card">
      <div class="side_one">
        <p>Hello</p>
      </div>
      <div class="side_two">
        <p>안녕하세요</p>
      </div>
    </li>

  <li class="card">
      <div class="side_one">
        <p>How many licks does it take to get to the center of a Tootsie Pop?</p>
      </div>
      <div class="side_two">
        <p>The world may never know.</p>
      </div>
    </li>

  <li class="card">
      <div class="side_one">
        <p>Have you been an un-American?</p>
      </div>
      <div class="side_two">
        <p>Ooh-ooh-hoo-ooh!</p>
      </div>
    </li>
  </ul>

  <div id="nav_deck">
    <span class="icon" id="prev" data-icon="<"><span class="visuallyhidden">Previous</span></span>
    <span class="icon" id="flipper" data-icon="/"><span class="visuallyhidden">Flip</span></span>
    <span class="icon" id="next" data-icon=">"><span class="visuallyhidden">Next</span></span>
  </div>

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.7.2.min.js"><\/script>')</script>

  <script src="js/flash_cards.min.js"></script>
</body>
</html>