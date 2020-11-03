---
layout: article
title: Qiskit | Part 3
key: fffy384fa123124eddsad12
comment: false
#author: Perry
mathjax: true
description: A basic set linear algebra flashcards. This flashcard deck is continually getting updates. There is no other experience like this. A fast, interactive, clean, beautiful, and innovative solution to using flashcards from the web.
permalink: /blochtesting2
sharing: true
---

    <!-- three.jsを読み込む -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.0/math.js"></script>
    <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js"></script>
    <script src="http://jsrun.it/assets/s/l/o/p/slopo"></script>
    <!-- <script src="js/EffectComposer.js"></script> -->
    <!-- <script src="js/RenderPass.js"></script> -->
    <!-- <script src="js/CopyShader.js"></script> -->
    <!-- <script src="js/ShaderPass.js"></script> -->
    <!-- <script src="js/OutlinePass.js"></script> -->
    <!-- <script src="js/OrbitControls.js"></script> -->

    <script src="js/bloch.js"></script>
    <script src="js/bloch-gui.js"></script>


    <link rel="stylesheet" href="css/bloch.css">    
</head>
<body>
    <div class="plotArea">
        <div class="bloch">
            <div class="caption">qubit 0</div>
            <canvas></canvas>
        </div>
        <div class="bloch">
            <div class="caption">qubit 1</div>
            <canvas></canvas>
        </div>
        <div class="bloch">
            <div class="caption">qubit 2</div>
            <canvas></canvas>
        </div>
        <div class="bloch">
            <div class="caption">qubit 3</div>
            <canvas></canvas>
        </div>
        <div class="bloch">
            <div class="caption">qubit 4</div>
            <canvas></canvas>
        </div>
    </div>

    <div class="console">
        <div id="history"></div>
        <div id="input">
            <span class="prompt">&gt;</span>
            <span class="editer" contenteditable="true"></span>
        </div>
    </div>
</body>
</html>


