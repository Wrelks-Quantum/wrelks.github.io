---
layout: post
title:  Online AES 256 Encryption Tool.
description: Use my custom online based AES256 encryption tool, It's fast and easy!
date:   2021-1-17 18:00:55 +0300
image:  '/images/aes256-online-encryption-tool.jpg'
tags:   [Tutorial, Cryptography, coding]
featured: false
---

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script type="text/javascript">
    // INIT
    var myString   = "blablabla Card game bla";
    var myPassword = "myPassword";
    
    // PROCESS
    var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
    var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
    document.getElementById("demo0").innerHTML = myString;
    document.getElementById("demo1").innerHTML = encrypted;
    document.getElementById("demo2").innerHTML = decrypted;
    document.getElementById("demo3").innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
</script>

<html>

<strong><label>Original String:</label></strong>
<span id="demo0"></span>

  <br>
  <br>

<strong><label>Encrypted:</label></strong>
<span id="demo1"></span>

  <br>
  <br>

<strong><label>Decrypted:</label></strong>
<span id="demo2"></span>

  <br> 
  <br>

<strong><label>String after Decryption:</label></strong>
<span id="demo3"></span>


  <br/>
  <br/>


</html>
