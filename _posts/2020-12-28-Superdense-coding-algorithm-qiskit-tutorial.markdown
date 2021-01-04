---
layout: post
title:  Superdense Coding
description: Learn about what the superdense coding algorithm is, and how to replicate it in the Qiskit framework.
date:   2020-12-28 15:00:35 +0300
image:  '/images/110.jpg'
tags:   [Qiskit, Quantum Computing, Tutorial, Algorithms]
---


<!--Use CDNJS to install mathjax, more documentation on this process can be found here -> https://docs.mathjax.org/en/v2.7-latest/start.html-->
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# What is it?

Superdense Coding is a quantum communication protocol that allows for a sender to send two classical bits of information to another user by utilizing only one qubit. This algorithm takes advantage of something called a 'bell circuit'. A bell circuit is a combination of a Hadamard gate going into the control bit of the controlled not gate; *see image below*

![]({{site.baseurl}}/images/bellCircuit.jpg)
*Bell Circuit*

A two qubit bell circuit will have an equal probability of getting either 00 or 11 as results. (Assuming the computer [is noiseless.](https://en.wikipedia.org/wiki/Quantum_noise))

<hr>

# How it works

In the superdense coding algorithm we have three different users.

<div class="table-container">
  <table>
    <tr><th>User 1</th><th>User 2</th><th>User 3</th></tr>
    <tr><td>The first user shares the two outputs of a two qubit bell state with the receiver and the sender.</td><td>The second user who is the sender, encodes the qubits </td><td>The final user receives those qubits and decodes them</td></tr>
  </table>
</div>

<!--1. The first user shares the two outputs of a two qubit bell state with the receiver and the sender.

2. The second user who is the sender, encodes the qubits 

3. And the final user receives those qubits and decodes them-->

With those rules in consideration, your final design will look like this; 

![]({{site.baseurl}}/images/Superdense_coding.jpg)
*Superdense Coding Diagram - [credit](https://en.wikipedia.org/wiki/Superdense_coding)*

A good thing to try and think about is how a bell state truly works. Think about it, the control bit is entangled with the not gate. So when we set the control bit into a super position it also changes the target bit to a superposition as well, because they are entangled. 

We can denote the bell state mathematically like so

$$\tfrac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$$

<hr>

# The Encoder 

The encoders job is simple, take the first qubit from the bell state and apply a single gate operation to it. In the two qubit example of this algorithm there are four different ways for the encoder to encode their qubit. Either with a Identity gate (does no change), X-gate, Z-gate, or a combination of the Z and X-gate. Each of these four different combinations represents an intended message. 

<div class="table-container">
  <table>
    <tr><th>Message</th><th>Applied Gate</th><th>Resulting State</th></tr>
    <tr><td>$$00$$</td><td>$$I$$</td><td>$$|00\rangle + |11\rangle$$</td></tr>
    <tr><td>$$10$$</td><td>$$X$$</td><td>$$|01\rangle + |10\rangle$$</td></tr>
    <tr><td>$$01$$</td><td>$$Z$$</td><td>$$|00\rangle - |11\rangle$$</td></tr>
    <tr><td>$$11$$</td><td>$$ZX$$</td><td>$$-|01\rangle + |10\rangle$$</td></tr>
  </table>
</div>

So if I the sender wanted to pass on the message of 10 to my receiver, I would apply an X-gate.

<hr>

# The Receiver 

The receivers job is bit easier. All they have to do is take the untouched second qubit from the initial bell state and the new encoded qubit from the sender and pass it through a 'reverse' bell circuit. 



the result will end up being what ever the sender has set their gate to. So in our example if the sender applied an X gate the receiver would decode the message and receive 10 as a result.

<hr>

# Qiskit 

Now that we have a foundation for what the superdense coding algorithm is, we can test it on a quantum computer simulator using Qiskit!
If you do not have Qiskit installed yet, check out their official tutorial [here.](https://qiskit.org/documentation/install.html)

### Imports

{% highlight python %}
from qiskit import QuantumCircuit, execute, Aer, IBMQ
from qiskit.visualization import plot_histogram
{% endhighlight %}

### Circuit

{% highlight python %}
#Create a quantum circuit with two qubits .
qc = QuantumCircuit(2, 2)

#create a hadamard gate on qubit zero (the first qubit)
qc.h(0)

#create a controlled not gate with the target bit on qubit 1 (second qubit), and the control bit on qubit 0 (first qubit)
qc.cx(0,1)

#Barriers are for separating the gates from one another to neaten things.
qc.barrier()

#create a not gate on qubit zero
qc.x(0)

qc.barrier()

qc.cx(0,1)
qc.h(0)

#Create a loop to measure all of the qubits in the circuit
for i in range(2):
    qc.measure(i, i)
{% endhighlight %}
    
### Printing Results

{% highlight python %}
#For this example we are setting the backend to a simulator so in this case, no quantum noise will come out in the final result. 
sim_backend = BasicAer.get_backend('qasm_simulator')
job = execute(qc, sim_backend, shots=1024)
result = job.result()
print('Simulator: ')
counts = result.get_counts(qc) #just setting a var
print(counts)
plot_histogram(counts)
{% endhighlight %}

### Printing the circuit

{% highlight python %}
#This line will print out the circuit in MPL form, which is a much cleaner alternative to printing it out in ASCII
#If you wish to print the circuit in ASCII form, write the following 'print(qc)'
qc.draw(output="mpl")
{% endhighlight %}

If you did everything correctly your output should look like the following;

![]({{site.baseurl}}/images/densecodingcircuit.jpg)
*Superdense Coding Circuit Output*

* The far left side of the circuit is your **bell-state preparation** 
* The middle half with the 'X' gate is the **Encoder**
* And the to the far right you have your reverse bell-state, which is the **receiver**. 
* And of course the measurement gates at the end to read the results. 

