---
layout: article
title: How to install Qiskit (Windows)
cover: /images/qiskit.png
key: A1edas212ssa
aside:
  toc: true
author: Perry
#tags: [jekyll, tags, user-experience]
pageview: true
---

## Anaconda

The first step is to install the latest python 3.x version of anaconda [here.](https://www.anaconda.com/products/individual)

Once you've installed anaconda you need to locate your windows search bar and type "anaconda prompt"
<div class="card">
  <div class="card__image">
    <img class="image" src="/images/anaconda.png"/>
  </div>
</div>
<br>

### Creating the Enviroment
Once you are inside of the anaconda prompt, enter in the following command.


    conda create -n test python=3

This will create an enviroment in python version 3 with the name of "test"

Now you can activate your new enviroment with the following. Of course replacing "test" with the name of your env.


    conda activate test

<br>

## Installing Qiskit

Once inside your enviroment, enter the following. This will install qiskit into your enviroment.

    pip install qiskit

### Verify Installation

to verify the installation, first type "python" into your anaconda prompt

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

## Installing qiskit_textbook

Installing the qiskit textbook allows you to create many more cool things inside of the qiskit framework such as quantum board games and a whole lot more. Thats why I always reccomend new users to install qiskit_textbook

Enter the following commands inside of your enviroment.

    pip install pywin32

then

    pip install git+https://github.com/qiskit-community/qiskit-textbook.git#subdirectory=qiskit-textbook-src

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



## Header 1

### Header 1.1

### Header 1.2

## Header 2

### Header 2.1

## Header 3

[Back](https://wrelks.com/gettingstarted.html){:.button.button--primary.button--rounded}