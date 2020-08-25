---
layout: article
title: Quantum History in a 🥜
show_edit_on_github: false
description: Learn about the history behind quantum computing with a beautiful intuitive timeline. The timeline has been condensed, and only highlights the most significant events that have occurred since the 1900s. Quantum History | Quantum | History |
permalink: /quantum-computing-history
sharing: true
---

<style>
body {
  color: #768390;
  background: #FFF;
  font-family: "Effra", Helvetica, sans-serif;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  color: #3D4351;
  margin-top: 0;
}

a {
  color: #FF6B6B;
}
a:hover {
  color: #ff9a9a;
  text-decoration: none;
}

.example-header {
  background: #3D4351;
  color: #FFF;
  font-weight: 300;
  padding: 3em 1em;
  text-align: center;
}
.example-header h1 {
  color: #FFF;
  font-weight: 300;
  margin-bottom: 20px;
}
.example-header p {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
}

.container-fluid .row {
  padding: 0 0 4em 0;
}
.container-fluid .row:nth-child(even) {
  background: #F1F4F5;
}

.example-title {
  text-align: center;
  margin-bottom: 60px;
  padding: 3em 0;
  border-bottom: 1px solid #E4EAEC;
}
.example-title p {
  margin: 0 auto;
  font-size: 16px;
  max-width: 400px;
}

/*==================================
    TIMELINE
==================================*/
/*-- GENERAL STYLES
------------------------------*/
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
.timeline h1, .timeline h2, .timeline h3, .timeline h4, .timeline h5, .timeline h6 {
  line-height: inherit;
}

/*----- TIMELINE ITEM -----*/
.timeline-item {
  padding-left: 40px;
  position: relative;
}
.timeline-item:last-child {
  padding-bottom: 0;
}

/*----- TIMELINE INFO -----*/
.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 .5em 0;
  text-transform: uppercase;
  white-space: nowrap;
}

/*----- TIMELINE MARKER -----*/
.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;
}
.timeline-marker:before {
  background: #FF6B6B;
  border: 3px solid transparent;
  border-radius: 100%;
  content: "";
  display: block;
  height: 15px;
  position: absolute;
  top: 4px;
  left: 0;
  width: 15px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
}
.timeline-marker:after {
  content: "";
  width: 3px;
  background: #CCD5DB;
  display: block;
  position: absolute;
  top: 24px;
  bottom: 0;
  left: 6px;
}
.timeline-item:last-child .timeline-marker:after {
  content: none;
}

.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid #FF6B6B;
}

/*----- TIMELINE CONTENT -----*/
.timeline-content {
  padding-bottom: 40px;
}
.timeline-content p:last-child {
  margin-bottom: 0;
}

/*----- TIMELINE PERIOD -----*/
.period {
  padding: 0;
}
.period .timeline-info {
  display: none;
}
.period .timeline-marker:before {
  background: transparent;
  content: "";
  width: 15px;
  height: auto;
  border: none;
  border-radius: 0;
  top: 0;
  bottom: 30px;
  position: absolute;
  border-top: 3px solid #CCD5DB;
  border-bottom: 3px solid #CCD5DB;
}
.period .timeline-marker:after {
  content: "";
  height: 32px;
  top: auto;
}
.period .timeline-content {
  padding: 40px 0 70px;
}
.period .timeline-title {
  margin: 0;
}

/*----------------------------------------------
    MOD: TIMELINE SPLIT
----------------------------------------------*/
@media (min-width: 768px) {
  .timeline-split .timeline, .timeline-centered .timeline {
    display: table;
  }
  .timeline-split .timeline-item, .timeline-centered .timeline-item {
    display: table-row;
    padding: 0;
  }
  .timeline-split .timeline-info, .timeline-centered .timeline-info,
  .timeline-split .timeline-marker,
  .timeline-centered .timeline-marker,
  .timeline-split .timeline-content,
  .timeline-centered .timeline-content,
  .timeline-split .period .timeline-info,
  .timeline-centered .period .timeline-info {
    display: table-cell;
    vertical-align: top;
  }
  .timeline-split .timeline-marker, .timeline-centered .timeline-marker {
    position: relative;
  }
  .timeline-split .timeline-content, .timeline-centered .timeline-content {
    padding-left: 30px;
  }
  .timeline-split .timeline-info, .timeline-centered .timeline-info {
    padding-right: 30px;
  }
  .timeline-split .period .timeline-title, .timeline-centered .period .timeline-title {
    position: relative;
    left: -45px;
  }
}

/*----------------------------------------------
    MOD: TIMELINE CENTERED
----------------------------------------------*/
@media (min-width: 992px) {
  .timeline-centered,
  .timeline-centered .timeline-item,
  .timeline-centered .timeline-info,
  .timeline-centered .timeline-marker,
  .timeline-centered .timeline-content {
    display: block;
    margin: 0;
    padding: 0;
  }
  .timeline-centered .timeline-item {
    padding-bottom: 40px;
    overflow: hidden;
  }
  .timeline-centered .timeline-marker {
    position: absolute;
    left: 50%;
    margin-left: -7.5px;
  }
  .timeline-centered .timeline-info,
  .timeline-centered .timeline-content {
    width: 50%;
  }
  .timeline-centered > .timeline-item:nth-child(odd) .timeline-info {
    float: left;
    text-align: right;
    padding-right: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(odd) .timeline-content {
    float: right;
    text-align: left;
    padding-left: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(even) .timeline-info {
    float: right;
    text-align: left;
    padding-left: 30px;
  }
  .timeline-centered > .timeline-item:nth-child(even) .timeline-content {
    float: left;
    text-align: right;
    padding-right: 30px;
  }
  .timeline-centered > .timeline-item.period .timeline-content {
    float: none;
    padding: 0;
    width: 100%;
    text-align: center;
  }
  .timeline-centered .timeline-item.period {
    padding: 50px 0 90px;
  }
  .timeline-centered .period .timeline-marker:after {
    height: 30px;
    bottom: 0;
    top: auto;
  }
  .timeline-centered .period .timeline-title {
    left: auto;
  }
}

/*----------------------------------------------
    MOD: MARKER OUTLINE
----------------------------------------------*/
.marker-outline .timeline-marker:before {
  background: transparent;
  border-color: #FF6B6B;
}
.marker-outline .timeline-item:hover .timeline-marker:before {
  background: #FF6B6B;
}

</style>

<!-- code by https://codepen.io/brady_wright/pen/NNOvrW-->

<script src="https://use.typekit.net/bkt6ydm.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<header class="example-header">
    <h1 class="text-center">A Quantum History</h1>
    <p>Written by <a target="_blank">Perry Newlin</a></p>
    <p>Designed by <a target="_blank">Brady Wright</a></p>
</header>
<br>
<div class="container-fluid">
    <div class="row example-basic">
      <!--   <div class="col-md-12 example-title">
            <h2>Basic Timeline</h2>
            <p>Extra small devices (phones, less than 768px)</p>
        </div> -->
        <div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul class="timeline">
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>December 14, 1900</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Quantum Theory is born</h3>
                        <p>The first paper on quantum theory is published by the German physicist Max Planck. The publication was based around a study of a "blackbody substance". The main take-away from Mr. Planck's study was that energy, given the right environment, can exhibit physical properties. From here until the 1960s there was no mention of quantum computing. Only quantum mechanics and theories and studies of quantum but no mention of it being applied to computing.</p>
                    </div>
                </li>
                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">Quantum Computing Begins</h2>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>Late 1960</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Conjugate Coding is Invented</h3>
                        <p>In the late 60s Stephen Wiesner created a cryptographic tool, Conjugate Coding, that utilized quantum mechanics. This is regarded as the first time quantum and computing had ever been brought together in the same scenario, hence the creation of quantum computing. The abstract idea is that you send out multiple messages in a way that when one is read, it destroys the others. The design used photons polarized in the conjugate bases as it's qubits to pass information.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1970</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">No-Cloning Theorem is Articulated</h3>
                        <p>James Park made a now famous statement in 1970 stating that it is impossible to create an independent and identical clone of some unknown quantum state. At first this was dubbed as the no-go theorem of quantum mechanics.</p>
                    </div>
                </li>
                  <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1973</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Alexander Holevo's famous paper</h3>
                        <p>In 1973 Alexander Holevo publishes a paper stating that some $N$ number of qubits can hold more bits of information than $N$ number of classical bits.</p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1975</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">First signs of a quantum advantage</h3>
                        <p>R. P Poplavskii publishes his now famous paper on "Thermodynamical models of information processing". The main take away from Poplavskii's paper is that it's computationally infeasible to simulate a quantum system on a classical computer due to the superposition principle. This is the first sign of a quantum computing advantage. Here is a system that cannot be simulated on a classical computer.</p>
                    </div>
                </li>
                <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">The Crazy 80s</h2>
                    </div> <!-- Base findings off the wikipedia time line here https://en.wikipedia.org/wiki/Timeline_of_quantum_computing#cite_note-park-2-->
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1980</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Three Major Changes</h3>
                        <p>
                        <ul><b>1) </b>Paul Benioff outlines for the first time what a quantum mechanical computer would look like. He described how such a computer would operate under the laws of quantum mechanics. He demonstrated this by applying Schrödinger's equation to turning machines. The paper was published for public access in April of 1980</ul><br>
                       <ul><b>2) </b>Yuri Manin motivates the idea for quantum computing by publishing his book in the 80s titled, "Computable and Uncomputable".</ul><br>
                         <ul><b>3) </b>Tommaso Toffoli introduces the Toffoli gate for the first time. The Toffoli gate is a controlled controlled not gate, meaning that it has two control bits and one target bit. The gate is referred to as the ccx gate in qiskit.</ul>
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1982</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">No-cloning theorem is rediscovered.</h3>
                        <p>Both William Wootters and Wojciech Zurek rediscover the no-cloning theorem. Dennis Dieks would also independently rediscover it as well. This marks great significance because these three would go on to be the ones to officially mark the no-cloning <i>theory</i> as a theorem for the firs time.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1984</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Conjugate coding is Applied for the first time</h3>
                        <p>Charles Bennett and Gilles Brassard would incorporate conjugate coding in use for distribution of cryptographic keys.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1985</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Universal Quantum Computer is described</h3>
                        <p>For the first time ever a universal quantum computer is described by David Deutsch at the university of Oxford. He would go onto describe it as a universal turning machine that can effectively simulate any other turning machine efficiently. </p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1988</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">First Physical Realization of a Quantum Computer</h3>
                        <p>Yoshihisa Yamamoto, & K. lgeta propose for the first time, a physical realization of a quantum computer. They also made a physical realization of the CNOT gate. The way that they came to this realization was by using atoms and photons as the computing quantum bits. They would use photons to transmit qubits, and use atoms to preform qubit operations</p>
                          <h3 class="timeline-title">Fredkin Gate</h3>
                        <p>Fredkin Gate is proposed for the firs time. The gate was essentially a controlled swap gate. The gate has three inputs and three outputs, the outputs transmit the first bit unchanged and swaps the last two bits only if the first bit is 1. Reccomend to read more <a href="https://en.wikipedia.org/wiki/Fredkin_gate">here.</a></p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1989</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Applications of Quantum Fluctuations</h3>
                        <p>Bikas K. Chakrabarti and collaborators from Saha Institute of Nuclear Physics, come to the conclusion the quantum fluctuations could be used to explore energy landscapes. The proposed thought is by using quantum annealing, a type of quantum fluctuation.</p>
                    </div>
                </li>
                 <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">The 90s</h2>
                    </div> <!-- Base findings off the wikipedia time line here https://en.wikipedia.org/wiki/Timeline_of_quantum_computing#cite_note-park-2-->
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1992</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">First Signs of a Quantum Speed up</h3>
                        <p>David Deutsch and Richard Jozsa propse a new type of problem that can be efficiently solved with the Deutsch-Jozsa algorithm on a quantum computer. They claimed that no classical algorithm could solve the same problem as effectively, and so this marks most likely the earliest example of a quantum advantage over classical computers. <i>If you aren't aware of the Deutsch-Jozsa algorithm yet, please check out this <a href="https://www.quantiki.org/wiki/deutsch-jozsa-algorithm">resource.</a></i>
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1993</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Oracle Problem Invented</h3>
                        <p>Dan Simon invents an oracle problem that would could be solved exponentially faster on a quantum computer compared to it's classical counter part. The main underlying concepts of this problem would later be applied in Shor's Factoring Algorithm.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1994</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Quantum Factoring</h3>
                        <p>Peter Shor discovers a very important algorithm in quantum computing. It allows for a quantum computer to factor large integers extremely quickly. This was later of course named the now famous, Shor's Algorithm. This discovery brought much attention to the field of quantum computing because theoretically speaking if given a big enough quantum computer, Shor's Algorithm can break many large scale cryptosystems in use today! </p>
                         <h3 class="timeline-title">USA gets Involved</h3>
                        <p>The United States Gov. organizes the first quantum computing workshop, co-organized by NIST.</p>
                         <h3 class="timeline-title">First Optical Proposal</h3>
                        <p>Isaac Chuang and Yoshihisa Yamamoto propose for the first time a quantum-optical computer that could in theory implement the Deutsch-Jozsa algorithm.</p>
                         <h3 class="timeline-title">Controlled-NOT Gate First Steps</h3>
                        <p>A large group of researchers at the University of Castilla-La Mancha and the University of Innsbruck make a proposal for cold trapped ion based Controlled-NOT gate.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1995</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                         <h3 class="timeline-title">QEC</h3>
                        <p>Peter Shor proposed for the first time, schemes for quantum error correction and how it may work in the future. <i>If you are not already familiar with QEC, please check out the following <a href="https://www.quantiki.org/wiki/quantum-error-correction-and-fault-tolerance-0">resource.</a></i></p>
                         <h3 class="timeline-title">Universal Quantum Computer is described</h3>
                        <p>Two researchers at NIST, Christopher Monroe, and David Wineland experimentally realize a quantum Controlled-NOT gate. The experiment was conducted with trapped ions. <i>Learn more about trapped ion quantum computers <a href="https://www.quantiki.org/wiki/ion-traps">here.</a></i></p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1996</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Database Searching gets an Upgrade</h3>
                        <p>Lov Grover, invents a new algorithm later named, Grover's algorithm. The premises around the algorithm is that by using the properties of quantum computing we can search an extremely large unsorted database very fast. Grover's algorithm is said to provide a quadradic speedup over classical versions of unsorted database searching algorithms. <i>Learn more about Grover's Algo <a href="https://www.quantiki.org/wiki/grovers-search-algorithm">here.</a></i></p>
                          <h3 class="timeline-title">USA Invests More in Quantum</h3>
                        <p>The United States Gov. begins to dedicate more resources in the Army research office, and in the NSA to researching quantum systems.</p>
                          <h3 class="timeline-title">QEC Codes</h3>
                        <p>Andrew Steane designs the now known Steane Codes for quantum error correction. <i>You can learn more about Steane codes <a href="https://en.wikipedia.org/wiki/Steane_code">here.</a></i></p>
                          <h3 class="timeline-title">Quantum Computers become more realistic</h3>
                        <p>David P. DiVincenzo, a researcher at IBM, proposes a list of all the minimal requirements for creating a quantum computer.</p>
                    </div>
                </li>
               <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1997</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Realizing Gates for Quantum Computers</h3>
                        <p>David Cory, Amr Fahmy and Timothy Havel, along with Neil Gershenfeld and Isaac L. Chuang at MIT publish the first public papers that discuss how quantum gates can be realized on Quantum Computers by using nuclear spin resonance technology.</p>
                          <h3 class="timeline-title">Topological Quantum Computing?</h3>
                        <p>A new type of quantum computer is discussed by Alexei Kitaev, a Topological quantum computer. The main benefit that was discussed about such a computer is it's apparent ability to combat decoherence.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1998</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">First Quantum Algorithm Demonstrated</h3>
                        <p>A working 2 qubit nuclear magnetic Resonance (NMR) quantum computer is used to solve Deutsch's problem. The project was put together by Jonathan A. Jones, and Michele Mosca at Oxford University</p>
                          <h3 class="timeline-title">Upgrades</h3>
                        <p>The first working 3-qubit NMR Quantum Computer is constructed.</p>
                          <h3 class="timeline-title">A New Design</h3>
                        <p>Bruce Kane proposes a new type of NMR Quantum Computer, one that would use a silicon based nuclear spin to represent it's qubits.</p>
                          <h3 class="timeline-title">Another Quantum Speedup is Proven</h3>
                        <p>Hidetoshi Nishimori, and others from the Tokyo Institute of Technology prove that quantum annealing algorithms will run better and more efficiently on a quantum computer than simulating it on a classical computer</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>1999</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">NMR Gets Discontinued</h3>
                        <p>Samuel L. Braunstien and other colleagues prove that many past experiments conducted with NMR Quantum Computer didn't in fact use any quantum entanglement. This is used as evidence to prove that NMR computers will not bring any future benefits so, they are for the most part discontinued.</p>
                          <h3 class="timeline-title">Quantum Annealing Applied</h3>
                        <p>Gebriel Aeppli, and Thomas Felix Rosenbaum, along with other colleagues demonstrate for the first time quantum annealing in a condensed matter system</p>
                          <h3 class="timeline-title"><b>Major:</b> Superconducting Circuits Become Qubits?</h3>
                        <p>Yasunobu Nakamura and Jaw-Shen Tsai prove that a superconducting circuit in the correct environment, can simulate a quantum bit. This would be a major breakthrough. Even to this day, a majority of Quantum Computing efforts are done by utilizing superconducting based quantum computers.</p>
                    </div>
                </li>
                  <li class="timeline-item period">
                    <div class="timeline-info"></div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h2 class="timeline-title">2000s</h2>
                    </div> <!-- Base findings off the wikipedia time line here https://en.wikipedia.org/wiki/Timeline_of_quantum_computing#cite_note-park-2-->
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2000</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Further NMR Upgrades</h3>
                        <p>The first ever 5-qubit NMR Quantum Computer is demonstrated at the University of Munich. Shortly after this a new 7-qubit NMR Quantum Computer would be shown at the Los Alamos National Laboratory.
                        </p>
                         <h3 class="timeline-title">A New Resource</h3>
                        <p>It was also around this time when the now famous textbook, "Quantum Computation and Quantum Information" was first published by Michael Nielsen and Isaac Chuang. 
                        </p>
                    </div>
                </li>
                <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2001</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">MAJOR: 1st Execution of Shor's</h3>
                        <p>At the IBM Almaden Research Center and at at Stanford University. The number 15 was factored on nuclear spin based qubits for the first time. This marks the first time that Shor's algorithm was run.</p>
                           <h3 class="timeline-title">Importance of Entanglement</h3>
                        <p>Noah Linden and Sandu Popescu prove that in order to have very large quantum protocol take place, a presence of entanglement is needed. You can see this in modern day implementations of Quantum Algorithms by taking notice of the high count of CNOT/CCNOT gates in those algorithms.</p>
                           <h3 class="timeline-title">A bright future ahead</h3>
                        <p>Emanuel Knill, Raymond Laflamme, and Gerard Milburn propose that optical based quantum computing is possible. Aka; Using photos to represent qubits.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2002</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Roadmap</h3>
                        <p>A new project was started, named the "The Quantum Information Science and Technology Road mapping Project", the project had some of the biggest names in the field and together they layed out the quantum computation roadmap. <i>You can browse the road map <a href="https://qist.lanl.gov/qcomp_map.shtml">here</a></i></p>
                         <h3 class="timeline-title">Waterloo gets involved more</h3>
                        <p>The Institute for Quantum Computing (IQC) was founded at the University of Waterloo. <i>You can checkout the IQC <a href="https://uwaterloo.ca/institute-for-quantum-computing/">here</a></i></p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2003</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                         <h3 class="timeline-title">Deutsch-Jozsa Algorithm is Executed</h3>
                        <p>For the first time ever the Deutsch-Jozsa algorithm is executed on a trapped-ion quantum computer, hosted at the university of Innsbruck</p>
                         <h3 class="timeline-title">Linear Optics Demo</h3>
                        <p>Collaborators at John Hopkins University demonstrated a quantum controlled not-gates by using linear optic equipment. Later the first implementation of a CNOT gate would be done by a group at the University of Innsbruck.</p>
                          <h3 class="timeline-title">Quantum Network Goes Online</h3>
                        <p>DARPA, a defense organization</p>
                         <h3 class="timeline-title">New Org is Formed</h3>
                        <p>The <a href="https://iqoqi.at/en">IQOQI</a> was officially established in Innsbruck. The parent agency is currently the Austrian Academy of Sciences.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2004</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Working Pure State</h3>
                        <p>The first working pure state NMR Quantum Computer is demonstrated at Oxford University & at the University of York. <i>Learn more about what a pure state is <a href="https://en.wikipedia.org/wiki/Quantum_state#Pure_states">here</a></i></p>
                          <h3 class="timeline-title">USA Invests More in Quantum</h3>
                        <p>The United States Gov. begins to dedicate more resources in the Army research office, and in the NSA to researching quantum systems.</p>
                          <h3 class="timeline-title">Quantum Teleportation?!</h3>
                        <p>For the first time ever, quantum-state teleportation is demonstrated between two qubits by the research team at the University of Innsbruck.</p>
                          <h3 class="timeline-title">Large Photon Entanglement</h3>
                        <p>A five photon entanglement state is demonstrated in China at the University of Science and Technology. This was a rather important breakthrough as this is the minimal number of qubits needed for QEC.</p>
                    </div>
                </li>
               <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2005</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Josephson Junction Measured!</h3>
                        <p>For the first time ever a Josephson Junction's capacitance is measured. The methods used in this study could potentially later be used to measure the state of quantum bits without disturbing the state.</p>
                          <h3 class="timeline-title">Qubyte</h3>
                        <p>In December of this year, the first 8 qubit system is made by the researchers at IQOQI, and collaborators at the University of Innsbruck.</p>
                        <h3 class="timeline-title">Transfers</h3>
                        <p>Researchers at Harvard University and Georgia Institute of Technology completed a quantum system that had the ability to transfer information from one quantum but on an atom to another quantum bit but on a photon. They were able to do this back and forth.</p>
                    </div>
                </li>
                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2006</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">QEC Demo</h3>
                        <p>The Materials Science Department at Oxford University demonstrate quantum "bang-bang" error correction</p>
                          <h3 class="timeline-title">No Change</h3>
                        <p>Zeno Effect is taken advantage of for the first time by a group of researchers from the University of Illinois at Urbana-Champaign. This effect allows for repetitious measurements of a photon without affecting it's state. In essence this allows a program to search a database without running.</p>
                          <h3 class="timeline-title">Room Temperature Manipulation</h3>
                        <p>Researchers at the University of Sheffield develop a method which allows for a user to create and interact with photons with a great deal of accuracy while maintaining room temperature.</p>
                          <h3 class="timeline-title">More then 10 qubits!</h3>
                        <p>First quantum computer with a density of more than 10 qubits is demonstrated by researchers at the Institute for Quantum Computing and the Perimeter Institute for Theoretical Physics. MIT was also involved during this demo.</p>
                        <h3 class="timeline-title">Quantum Dot Manipulation</h3>
                        <p>A research team at Delft University creates a new device that can manipulate spin states of electrons that are on quantum dots. <i>Learn more about quantum dots <a href="https://en.wikipedia.org/wiki/Quantum_dot">here</a></i></p>
                          <h3 class="timeline-title">University of Arkansas Breakthrough</h3>
                        <p>Researchers at University of Arkansas creates new quantum dot molecules.</p>
                          <h3 class="timeline-title">One to the Other</h3>
                        <p>University of Copenhagen create a new a teleportation method that allows for quantum teleportation between photons and atoms.</p>
                          <h3 class="timeline-title">Another Quantum Speedup is Proven</h3>
                        <p>Hidetoshi Nishimori, and others from the Tokyo Institute of Technology prove that quantum annealing algorithms will run better and more efficiently on a quantum computer than simulating it on a classical computer</p>
                    </div>
                </li>
                                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2007</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">A new Deutsch Implementation</h3>
                        <p>The Deutsch-Jozsa algorithm is implemented in a cluster state quantum computer for the first time.</p>
                          <h3 class="timeline-title">Coupled Qubits!</h3>
                        <p>For the first time ever a successful demonstration of controllable coupled qubits is done. This breakthrough was lead by NEC, JST, and RIKEN.</p>
                          <h3 class="timeline-title">More Controlled-NOT Discoveries</h3>
                        <p>A controlled-NOT quantum gate on a pair of superconducting quantum bits is realized by the following researchers J. H.; De Groot, P. C.; Harmans, C. J. P. M.; Mooij, J. E.</p>
                          <h3 class="timeline-title">Large Quantities</h3>
                        <p>In general this year was regarded as one of the best years for quantum computing as groups of scientist and researchers demo very large density quantum computers / systems for the first time by using the new superconducting technology.</p>
                      </div>
                </li>
                                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2008</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">New Quantum Dot Technology </h3>
                        <p>A group of researchers, Ensslin, along with fellows at the Solid State Physics Laboratory create a new quantum dot device that utilized Graphene as it's main material.</p>
                          <h3 class="timeline-title">Quantum Bit Stored!</h3>
                        <p>In a major breakthrough, a group of scientists at the University of Heidelberg (Germany) store a quantum bit for the first time.</p>
                          <h3 class="timeline-title">First Qutrit</h3>
                        <p>Qutrits are discovered; a qutrit is a superposition of three mutually orthogonal quantum states. So instead of a having a qubit which can be in a superposition of either 0 or 1, qutrits can be in a superposition of 0, 1, and some other third energy state.</p>
                          <h3 class="timeline-title">Atomic Storage</h3>
                        <p>A Qubit for the first time has been stored in an atomic nucleus for over 1 second.</p>
                        <h3 class="timeline-title">First Major Controversies</h3>
                        <p>Around this year D-Wave Systems will make the claim to have created a working 128 qubit quantum computer. This has become a major controversy in the community, as D-Wave has never proved this claim before. The only piece of evidence we have of this quantum computer is D-Waves word. To this day many of D-Waves claims remain controversial.</p>
                    </div>
                </li>
                                                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2009</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">Photons</h3>
                        <p>First ever times we are able to have a 'quantum' control over over photons</p>
                          <h3 class="timeline-title">Qubit Lifespan</h3>
                        <p>During this period a major breakthrough would be made which allowed for researchers to extend the time of a qubit to decay by 1000 times. This meant qubits could be used for a much longer duration of time before they decayed beyond the point of usability. This was first reported by Nicole Casal Moore.</p>
                          <h3 class="timeline-title">Electronic Quantum Processor?</h3>
                        <p>The first ever electric based quantum processor, one that doesn't utilize atom spins or photons but rather superconducting technology. We still use this same technology today, aka the superconducting qubit!</p>
                          <h3 class="timeline-title">Individual Read and Writing</h3>
                        <p>NIST gains the ability to read and write a single qubit without disturbing other qubits.</p>
                        <h3 class="timeline-title">Shor's Algorithm Demo</h3>
                        <p>Researchers at the University of Bristol run Shor's algorithm on a silicon photonic chip for the first time.</p>
                          <h3 class="timeline-title">Programmable Quantum Computer</h3>
                        <p>For a while a quantum computer couldn't be programmed after it was built. Until 2009 that is! In early 2009, the National Institute of Standards and Technology in Boulder, Colorado, constructed a quantum computer with a size of 2 qubits that could be programmed before and after an experiment was run.</p>
                    </div>
                </li>
                <!--                                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2008</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">New Quantum Dot Technology </h3>
                        <p>A group of researchers, Ensslin, along with fellows at the Solid State Physics Laboratory create a new quantum dot device that utilized Graphene as it's main material.</p>
                          <h3 class="timeline-title">Quantum Bit Stored!</h3>
                        <p>In a major breakthrough, a group of scientists at the University of Heidelberg (Germany) store a quantum bit for the first time.</p>
                          <h3 class="timeline-title">First Qutrit</h3>
                        <p>Qutrits are discovered; a qutrit is a superposition of three mutually orthogonal quantum states. So instead of a having a qubit which can be in a superposition of either 0 or 1, qutrits can be in a superposition of 0, 1, and some other third energy state.</p>
                          <h3 class="timeline-title">Atomic Storage</h3>
                        <p>A Qubit for the first time has been stored in an atomic nucleus for over 1 second.</p>
                        <h3 class="timeline-title">First Major Controversies</h3>
                        <p>Around this year D-Wave Systems will make the claim to have created a working 128 qubit quantum computer. This has become a major controversy in the community, as D-Wave has never proved this claim before. The only piece of evidence we have of this quantum computer is D-Waves word. To this day many of D-Waves claims remain controversial.</p>
                    </div>
                </li>
                                                 <li class="timeline-item">
                    <div class="timeline-info">
                        <span>2008</span>
                    </div>
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3 class="timeline-title">New Quantum Dot Technology </h3>
                        <p>A group of researchers, Ensslin, along with fellows at the Solid State Physics Laboratory create a new quantum dot device that utilized Graphene as it's main material.</p>
                          <h3 class="timeline-title">Quantum Bit Stored!</h3>
                        <p>In a major breakthrough, a group of scientists at the University of Heidelberg (Germany) store a quantum bit for the first time.</p>
                          <h3 class="timeline-title">First Qutrit</h3>
                        <p>Qutrits are discovered; a qutrit is a superposition of three mutually orthogonal quantum states. So instead of a having a qubit which can be in a superposition of either 0 or 1, qutrits can be in a superposition of 0, 1, and some other third energy state.</p>
                          <h3 class="timeline-title">Atomic Storage</h3>
                        <p>A Qubit for the first time has been stored in an atomic nucleus for over 1 second.</p>
                        <h3 class="timeline-title">First Major Controversies</h3>
                        <p>Around this year D-Wave Systems will make the claim to have created a working 128 qubit quantum computer. This has become a major controversy in the community, as D-Wave has never proved this claim before. The only piece of evidence we have of this quantum computer is D-Waves word. To this day many of D-Waves claims remain controversial.</p>
                    </div>
                </li>-->
            </ul>
        </div>
    </div>

<center>
<h6>Timeline is still in progress!</h6> </center>
<center><h6>Writing, and other aspects may seem a tad off until the final version is announced. Thank you for understanding.</h6></center>
