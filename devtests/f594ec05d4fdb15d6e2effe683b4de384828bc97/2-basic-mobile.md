---
layout: article
title: "Q #2 | Basic"
key: fffy384fad
comment: true
author: Perry
mathjax: true
---

> <strong>The list of flashcards is continually being updated with new problems on a monthly basis, but if you have any ideas for a good question that belongs here email me at, <perry@wrelks.com></strong>

<!-- 
UNDER CONSTRUCTION 3/13/19 
-->

<!-- BOOTSTRAP 4 -->
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<!-- ANIMATE CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
</head>

<br>
<br>

<div class="container">
  <div class="row">
    <div class="col">
      <h1 class="display-3">Basics</h1>
      <h4>Click on the card to reveal the answer</h4>
    </div><!-- end col -->
  </div><!-- end row -->
</div><!-- end container -->

<br>
<br>

<div class="container">
  <div class="row">

  <!-------- FLASH CARD 1 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>How do you represent $|0\rangle$ as a vector?</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\begin{pmatrix} 1 \\ 0 \end{pmatrix}$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  </div><!-- end row -->
</div><!-- end container -->


<br>
<br>

<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

<script>
$('.back').hide();

//.delay(3000)

$('.front', '.flashcard').on('click', function() {
  $(this).hide();
  $(this).siblings('.back').show();
});

$('.back', '.flashcard').on('click', function() {
  $(this).hide();
  $(this).siblings('.front').show();
});

</script>

<style>
.front,
.back {
  width: 90%;
  /*min-height: 150px; */
  height: 200px;
  display: table;
  padding: 10px;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.15), -8px -8px 12px 0 rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.front h5,
.back p {
  display: table-cell;
  vertical-align: middle;
  text-align: center;

}

.fast {
  animation-duration: 0.5s;
}

</style>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->

<!-- Look into this https://codepen.io/herros/pen/rPBvLQ-->