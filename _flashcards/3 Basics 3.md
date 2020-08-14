---
layout: article
title: Linear Algebra | Part 3
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
      <h1 class="display-3">Advanced</h1>
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
          <h3>Knowing that matricies can be written purley with outer products, what is another way to write the following? $M= \begin{pmatrix} m_{0,0}&m_{0,1} \\\\ m_{1,0}&m_{1,1} \end{pmatrix}$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$m_{0,0} |0\rangle\langle0|+ m_{0,1} |0\rangle\langle1|+ m_{1,0} |1\rangle\langle0|+ m_{1,1} |1\rangle\langle1|$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>Is it true that any matrix can be expressed in terms of tensor products with pauli matricies? If so how do you denote it with sigma notation?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\sum_{P_{n-1},\ldots,P_0 \in \{1,X,Y,Z\}} C_{P_{n-1}\ldots,P_0}~~P_{n-1} \otimes P_{n-2}\otimes\ldots\otimes P_0$</p>
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
          <h3>How do we denote with sigma notation applying $N$ amount of hadamard gates to a quantum register $|00\dots 0\rangle$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
        <p>$|00\dots 0\rangle \xrightarrow{H^{\otimes n}} \frac{1}{\sqrt{2^n}} \sum_{x\in \{0,1\}^n} |x\rangle$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>Unitary matrices preserve the inner product no matter how you transform a vector under a sequence of unitary matrices. How can you demonstrate this proof with linear algebra</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\langle \psi | \psi \rangle \ = \ 1 \ \Rightarrow \ |\psi\rangle \ \rightarrow \ U |\psi\rangle \ = \ |\psi'\rangle \ \Rightarrow \ \langle \psi' | \psi' \rangle \ = \ (U |\psi\rangle)^{\dagger} U|\psi\rangle \ = \ \langle \psi | U^{\dagger} U |\psi\rangle \ = \ \langle \psi | \psi \rangle \ = \ 1$
          </p>
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
          <h3>How do you write a formula which expresses a function such that a controlled unitary operator $C - U$ applies some unitary operator $U$ on a given target register only if it's corresponding control bit is $|1\rangle$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$U^{2^{j}}|\psi \rangle =U^{2^{j}-1}U|\psi \rangle =U^{2^{j}-1}e^{2\pi i\theta }|\psi \rangle =\cdots =e^{2\pi i2^{j}\theta }|\psi \rangle$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>What will the following Maclaurin series equation look like if you split it into two different sigma notation equations. One part being real and the other being imaginary. $e^{i \gamma B} \ = \ \displaystyle\sum_{n \ = \ 0}^{\infty} \ \frac{(i \gamma B)^n}{n!}$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\displaystyle\sum_{n \ = \ 0}^{\infty} \ \frac{(-1)^n \gamma^{2n} B^{2n}}{(2n)!} \ + \ i \displaystyle\sum_{n \ = \ 0}^{\infty} \frac{(-1)^n \gamma^{2n + 1} B^{2n + 1}}{(2n + 1)!}$</p>
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
  width: 100%;
  /*min-height: 150px; */
  height: 400px;
  display: table;
  padding: 10px;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.15), -8px -8px 12px 0 rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

.front h3,
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
