---
layout: article
title: How to install Qiskit (Linux)
cover: /images/qiskit2.png
key: b1edas212123ssa
aside:
  toc: true
author: Perry
#tags: [jekyll, tags, user-experience]
pageview: true
---

## Installing Python

**WARNING: To prevent any errors please enter in the following commands before continuing with the tutorial**

    sudo apt-get update
    sudo apt-get upgrade

The first step is to install python 3 

    sudo apt install python3

at the time of writing this is the latest version of python

to ensure the installation went through enter the following

    python --version

if the correct version of python was printed then your good to go!
But if another version of python appears that means you need to uninstall it.

    sudo apt remove python(version)
    #replace version with the old installed python version


Once you've installed the anaconda installer you need to open a termainal window and cd into your downloads directory. 

    cd
    cd Downloads/

you can now make sure the installer is located here by entering the dir command

<div class="card">
  <div class="card__image">
    <img class="image" src="/images/Linux.png"/>
  </div>
</div>
<br>

### Installing Anaconda
Once you are inside of the downloads directory you can execute the installer with the following

    sudo bash Anaconda-2020.02-Linux-x86_64.sh

of course the name of the file name will differ depending when you download the installer

a screen asking you to read the license should apear

![Image](/images/Linux2.png){:.border.rounded}

<br>

After you have read the licensing agreement and have said yes to the prompt you will be asked if you want anaconda installed into your root directory, press enter to say yes.

If you made this far then Anaconda should be installed! To check enter the following into your terminal

    conda

this should print out a help prompt

Now you can setup your enviroment

    conda create -n Test python=3

this will create an enviroment in python3 with the name 'Test'




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

[Back](https://wrelks.com/gettingstarted.html){:.button.button--primary.button--rounded}