---
layout: article
title: Linear Algebra | Part 2
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
      <h1 class="display-3">Intermediate</h1>
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
          <h3>How do you write $\sigma_y$ as a matrix?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>What kind of operation does $U \ = \ e^{i\gamma H}$ 
          refer to?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>A unitary operation.</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 3 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>What is the result from taking the conjugate transpose of $U$?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\Big( e^{i\gamma H} \Big)^{\dagger} \ = \ e^{-i \gamma H^{\dagger}}$</p>
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
          <h3>How would you write $|{+++}\rangle$ as a vector?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
        <p>$\frac{1}{\sqrt{8}}\begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \\ 1 \\ 1 \\ 1 \\ 1 \\\end{bmatrix}$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>How would you write $\text{CNOT}|0{+}\rangle$ in ket notation?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\tfrac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 3 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>If you multiply the matricies from the NOT gate & the Hadamard gate what will be your resulting matrix?</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \otimes \tfrac{1}{\sqrt{2}}\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} = \frac{1}{\sqrt{2}}
\begin{bmatrix} 0 \times \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
              & 1 \times \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
                \\ 
                1 \times \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
              & 0 \times \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
\end{bmatrix} = \frac{1}{\sqrt{2}}
\begin{bmatrix} 0 & 0 & 1 & 1 \\
                0 & 0 & 1 & -1 \\
                1 & 1 & 0 & 0 \\
                1 & -1 & 0 & 0 \\
\end{bmatrix}$</p>
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
          <h3>What is one other way to write $U U^\dagger$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$U^\dagger U$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 2 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>How would you expand the following equation? $\displaystyle\sum_{i} \ f_i |v_i\rangle$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>$|v\rangle \ = \ f_1 |v_1\rangle \ + \ f_2 |v_2\rangle \ + \ ... \ + \ f_n |v_n\rangle$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  <!-------- FLASH CARD 3 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h3>What does the following mean? $H^{\otimes n}$</h3>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p>This represents applying a hadamard gate on some $N$ amount of qubits.</p>
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

.front h3
{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.back p {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 20px;
}


.fast {
  animation-duration: 0.5s;
}

</style>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->
