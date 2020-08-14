---
layout: article 
title: Fast LiPo Charger
cover: /images/charger.png
key: t487fy12
aside:
  toc: true
author: Perry
#tags: [jekyll, tags, user-experience]
---
<!--https://hitcounter.pythonanywhere.com/--> 
<!--https://github.com/brentvollebregt/hit-counter
^^Docs for hit counter^^
-->

<!--<script>

  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count', false);
  xmlHttp.send(null);
  count = xmlHttp.responseText;

</script>

<center>
<div class="card">
  <div class="card__content">
    <p class="warning">
    Views: <Strong>
    <script type="text/javascript">
            document.write(count)
    </script>
    </Strong>
    </p>
  </div>
</div>
</center> -->

## Anaconda 

The first step is to install the latest python 3.x version of anaconda [here.](https://www.anaconda.com/products/individual)

**Windows Users:**

Once you've installed anaconda you need to locate your windows search bar and type "anaconda prompt"
<div class="card">
  <div class="card__image">
    <img class="image" src="/images/anaconda.png"/>
  </div>
</div>
Linux users can simply enter conda commands straight into the terminal

<br>

### Creating the Enviroment
Once anaconda has been installed, enter in the following command.

    conda create -n test python=3

This will create an enviroment in python version 3 with the name of "test"

Now you can activate your new enviroment with the following. Of course replacing "test" with the name of your env.

    conda activate test

<br>

## Installing Qiskit

Once inside your enviroment, enter the following. This will install qiskit into your enviroment.

    pip install qiskit

<br>

### Verify Installation

to verify the installation, first type "python" into your terminal

    python

this will open a python terminal, from where you can import qiskit

    from qiskit import *

if the console returns to a new line afterwards, it means that qiskit was installed successfully!

<div class="card">
  <div class="card__image">
    <img class="image" src="/images/qiskittest.png"/>
  </div>
</div>

To exit the python terminal enter in the exit command 

    exit()

<br>

## Install Qiskit Visulation

Installing qiskit visulation adds tons of visulation features to jupyter notebooks for qiskit programs

I would **highly** reccomend to install this extension

    pip install qiskit[visualization]

<br>

## Install qiskit_textbook

Installing the qiskit textbook allows you to create many more cool things inside of the qiskit framework such as quantum board games and a whole lot more. Thats why I always reccomend new users to install qiskit_textbook

**Windows Users need to install pywin32**

    pip install pywin32

then

    pip install git+https://github.com/qiskit-community/qiskit-textbook.git#subdirectory=qiskit-textbook-src

<br>

### Verify Installation

You can verify the installation the same way as before, by opening a python terminal and typing in the following 

    from qiskit_textbook.games import hello_quantum

if it returns a blank output then you have successfuly installed the qiskit textbook library!

<div class="card">
  <div class="card__image">
    <img class="image" src="/images/qiskittest2.png"/>
  </div>
</div>

<!--more-->
