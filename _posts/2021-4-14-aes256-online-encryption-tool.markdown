---
layout: post
title:  Online AES 256 Encryption Tool.
description: Use my custom online based AES256 encryption tool, It's fast and easy!
date:   2021-1-17 18:00:55 +0300
image:  '/images/aes256-online-encryption-tool.jpg'
tags:   [Tutorial, Cryptography, coding]
featured: false
---

<strong><label>Your Plaintext: </label></strong>
<textarea id="demo0" class="plaintextfield" cols="25" rows="5"></textarea>

<strong><label>Your Password: </label></strong>
<textarea class="plaintextfield" id="demo" cols="25" rows="5"></textarea>

<button onclick="submitDetails()">Encrypt!</button>

<br>

<strong><label>Your Ciphertext: </label></strong>
<textarea class="plaintextfield" id="cipher" cols="25" rows="5"></textarea>

<strong><label>Your Password: </label></strong>
<textarea class="plaintextfield" id="pass" cols="25" rows="5"></textarea>

<button onclick="submitDetails2()">Decrypt!</button>

<hr>

<strong><label>Encrypted:</label></strong>
<span id="demo1"></span>

<strong><label>Decrypted:</label></strong>
<span id="demo2"></span>

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

function submitDetails2() {

    var cipherText = document.getElementById("cipher").value;
    var pass = document.getElementById("pass").value;

    var decrypted = CryptoJS.AES.decrypt(cipherText, pass);

    document.getElementById("demo1").innerHTML = "---";
    document.getElementById("demo2").innerHTML = decrypted;
    document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);

}

</script>

<style>

.plaintextfield {
     padding: 4px;
     font-size: 15px;
     border-width: 2px;
     border-color: #cccccc;
     background-color: #233840;
     color: #ffffff;
     border-style: solid;
     border-radius: 6px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: 0px 0px 5px rgba(66,66,66,.75);
}

</style>

