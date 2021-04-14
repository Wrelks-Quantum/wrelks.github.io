---
layout: post
title:  Online AES 256 Encryption Tool.
description: Use my custom online based AES256 encryption tool, It's fast and easy!
date:   2021-1-17 18:00:55 +0300
image:  '/images/aes256-online-encryption-tool.jpg'
tags:   [Tutorial, Cryptography, coding]
featured: false
---

<strong><label>Your String:</label></strong>
<input type="text" id="demo0">

  <br>

<strong><label>Your Password:</label></strong>
<input type="text" id="demo">

  <br>

<button onclick="submitDetails()">Encrypt!</button>

<strong><label>Encrypted:</label></strong>
<span id="demo1"></span>

  <br>

<strong><label>Decrypted:</label></strong>
<span id="demo2"></span>

  <br>

<strong><label>String after Decryption:</label></strong>
<span id="demo3"></span>

  <br>

<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script>

function submitDetails() {

    var myString = document.getElementById("demo0").value;
    var myPassword = document.getElementById("demo").value;

    var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
    var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);

    document.getElementById("demo1").innerHTML = encrypted;
    document.getElementById("demo2").innerHTML = decrypted;
    document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);

}

</script>

