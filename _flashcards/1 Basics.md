---
layout: article
title: Linear Algebra | Part 1
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

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>How do you represent $|1\rangle$ as a vector?</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\begin{pmatrix} 0 \\ 1 \end{pmatrix}$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 3 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>How do you write $\sigma_x$ as a matrix?</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
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
          <h5>Whats the resulting vector after applying $\sigma_x$ to $|1\rangle$</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
        <p>$\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} \ =  \ \begin{pmatrix} 1 \\ 0 \end{pmatrix}$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>How would you find the probability of getting a $|1\rangle$ or $|0\rangle$ using this equation? $\alpha\,\left|0\right\rangle+\beta\,\left|1\right\rangle$</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>By taking the aboslute square of both $\alpha$ and $\beta$, like so, $|\alpha|^2$ & $|\beta|^2$
          The resulting value is the probability of their corresponding ket.
          </p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 3 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>What does $\psi$ represent?</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\psi$ represents some vector space</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
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
          <h5>How do you create the following state? $\tfrac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>By applying a Hadamard gate to $|0\rangle$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>What affect will this matrix have on a single qubit? $\begin{bmatrix} 1 & 0 \\ 0 & 1\end{bmatrix}$</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>Nothing! This is a identity matrix, and when this matrix is multiplied to a vector the product is the same as the initial vector.</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 3 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5>What's another way to write a one qubit system based on the following? $\left|\psi\right\rangle=\begin{bmatrix} a_0 \\ a_1 \end{bmatrix}$
          </h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\left|\psi\right\rangle=a_0\,\left|0\right\rangle+a_1\,\left|1\right\rangle$</p>
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