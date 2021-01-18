---
layout: post
title:  Installing Jupyer Notebook
description: How to install Jupyter Notebook, the dos and don'ts!
date:   2021-1-17 18:00:55 +0300
image:  '/images/jupyter-notebook-anaconda.jpg'
tags:   [Tutorial, Quantum Computing]
featured: true
---

# Getting started 

First make sure that you are inside of your anaconda environment

{% highlight python %}
conda acitvate 'name'
{% endhighlight %}


Afterwards you can install jupyter notebook with either conda or pip

# Anaconda install

{% highlight python %}
conda install -c conda-forge notebook
{% endhighlight %}


# Pip install 

{% highlight python %}
pip install notebook
{% endhighlight %}


**Congratulations** jupyter notebook is now installed 🎉

<hr>

# Password Config

Now you can set your notebook password with the following command

* Make a easy to remember password

{% highlight python %}
jupyter notebook password
{% endhighlight %}

<br>

# Starting juypter notebook 

To start up a notebook session enter in the following command into your terminal 

{% highlight python %}
jupyter notebook
{% endhighlight %}

A new browser window should've been opened automatically pointing to the notebook Interface

If you weren't automatically directed, go to your browser can enter in the following url

{% highlight python %}
localhost:8888/
{% endhighlight %}

If this still didn't work double check the output in the terminal to see if any url was provided 

![]({{site.baseurl}}/images/jupyter-notebook-tutorial.jpg)
*Expected Terminal Output*
