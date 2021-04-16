---
layout: post
title:  Free Online AES256 Encryption Tool
description: Wrelks' free online AES256 encryption tool, It's fast and easy!
date:   2021-4-14 18:00:55 +0300
image:  '/images/aes256-online-encryption-tool.jpg'
tags:   [Tutorial, Cryptography, Coding]
featured: false
---

<strong><label>Your Plaintext: </label></strong>
<textarea id="demo0" class="plaintextfield" cols="25" rows="5"></textarea>

<strong><label>Your Password: </label></strong>
<input type="text" class="plaintextfield" id="demo">

<button class="encrypt" onclick="submitDetails()">Encrypt!</button>

<br>

<strong><label>Your Ciphertext: </label></strong>
<textarea class="plaintextfield" id="cipher" cols="25" rows="5"></textarea>

<strong><label>Your Password: </label></strong>
<input type="text" class="plaintextfield" id="pass">

<button class="decrypt" onclick="submitDetails2()">Decrypt!</button>

<hr>

<strong><label>Encrypted:</label></strong>
<span id="demo1"></span>

<strong><label>Decrypted:</label></strong>
<span id="demo2"></span>

<strong><label>String after Decryption:</label></strong>
<span id="demo3"></span>

<hr>

## What is AES256 Encryption?

> The current encryption standard for most government and private sector IT security purposes is called the Advanced Encryption System.  AES was chosen as the U.S. government security standard in 2001, and eventually also evolved into the encryption standard for most private sector enterprises.
> AES uses a symmetric algorithm, which means the same key is applied for both encryption and decryption. The algorithm provides 128-bit block encryption and has been designed to supports key sizes of 128, 192 and 256 bits. AES 256-bit encryption is the strongest and most robust encryption standard that is commercially available today.
>
> <cite>idera.com</cite>

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

.encrypt {
	box-shadow:inset 0px 1px 0px 0px #cf866c;
	background:linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
	background-color:#d0451b;
	border-radius:3px;
	border:1px solid #942911;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #854629;
}
.encrypt:hover {
	background:linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
	background-color:#bc3315;
}
.encrypt:active {
	position:relative;
	top:1px;
}

.decrypt {
	box-shadow:inset 0px 1px 0px 0px #9acc85;
	background:linear-gradient(to bottom, #74ad5a 5%, #68a54b 100%);
	background-color:#74ad5a;
	border:1px solid #3b6e22;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
}
.decrypt:hover {
	background:linear-gradient(to bottom, #68a54b 5%, #74ad5a 100%);
	background-color:#68a54b;
}
.decrypt:active {
	position:relative;
	top:1px;
}

</style>

