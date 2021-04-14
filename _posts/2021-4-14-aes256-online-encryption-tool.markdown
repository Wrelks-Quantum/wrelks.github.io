---
layout: post
title:  Online AES 256 Encryption Tool.
description: Use my custom online based AES256 encryption tool, It's fast and easy!
date:   2021-1-17 18:00:55 +0300
image:  '/images/aes256-online-encryption-tool.jpg'
tags:   [Tutorial, Cryptography, coding]
featured: false
---

<script type="text/javascript" src="js/aes.js"></script>
<script type="text/javascript">

require.config({
    paths: {
        'crypto-js': 'js/cryptojs'
    }
});

require(["crypto-js"], function (CryptoJS) {
    console.log(CryptoJS.HmacSHA1("Message", "Key"));
});

</script>


