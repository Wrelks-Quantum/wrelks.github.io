---
layout: article
title: "Q #1 | Basic"
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

<div class="container">
  <div class="row">
    <div class="col">
      <h2 id="questioncard">Click on the card to reveal the answer</h2>
    </div><!-- end col -->
  </div><!-- end row -->
</div><!-- end container -->

<br>

<div class="container">
  <div class="row">

  <!-------- FLASH CARD 1 -------->
  <div class="col-sm">
      <div class="flashcard">
        <div class="p-3 front border">
          <h5 style="overflow-x: scroll;">$\displaystyle\sum_{n \ = \ 0}^{\infty} \ \frac{(-1)^n \gamma^{2n} B^{2n}}{(2n)!} \ + \ i \displaystyle\sum_{n \ = \ 0}^{\infty} \frac{(-1)^n \gamma^{2n + 1} B^{2n + 1}}{(2n + 1)!}$</h5>
        </div><!-- end front -->
        <div class="p-3 back border">
          <p style="overflow-x: scroll;">$\sum_{P_{n-1},\ldots,P_0 \in \{1,X,Y,Z\}} C_{P_{n-1}\ldots,P_0}~~P_{n-1} \otimes P_{n-2}\otimes\ldots\otimes P_0$</p>
        </div><!-- end back -->
      </div><!-- end flashcard -->
    </div><!-- end col -->

  </div><!-- end row -->
</div><!-- end container -->

<br>
<div id="container">
  <a class="button button--primary button--pill" href="https://wrelks.com/devtests/f594ec05d4fdb15d6e2effe683b4de384828bc97/mobile-study-section"><i class="fas fa-backward"></i> BACK To Home</a>
  <a class="button button--primary button--pill sitck-to-right" href="https://wrelks.com/devtests/f594ec05d4fdb15d6e2effe683b4de384828bc97/2-basic-mobile#questioncard">NEXT <i class="fas fa-forward"></i></a>
</div>

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

MathJax.Hub.Config({
  CommonHTML: {
    linebreaks: {
      automatic: true
    }
  }
});

</script>

<style>
.front,
.back {
  width: 100%;
  max-width: 100%;
  /*min-height: 150px; */
  height: 300px;
  display: table;
  overflow-wrap: break-word;
  padding: 10px;
  box-shadow: 8px 8px 16px 0 rgba(0, 0, 0, 0.15), -8px -8px 12px 0 rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

/*.stick-to-right {
  float: right;
}*/

#container{
    text-align: center;
    overflow-wrap: break-word;
}

@media screen and (max-width : 320px)
{
  .p-3
    {
      font-size: 0.78rem;
    }
}
@media screen and (max-width : 1204px)
{
  .p-3
    {
      font-size: 1.2rem;
    }
}

.front h5,
.back p {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  overflow-wrap: break-word;
}

.fast {
  animation-duration: 0.5s;
}

</style>

<!-- https://codepen.io/dylangggg/pen/YmGMew -->
<!-- https://codepen.io/matie/pen/bvRqLE -->

<!-- Look into this https://codepen.io/herros/pen/rPBvLQ-->