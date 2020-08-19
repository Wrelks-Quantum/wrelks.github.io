---
layout: article 
title: Fast LiPo Charger | Battery Pack Pt. 1
cover: /images/charger.png
key: t487fy112312
aside:
  toc: true
author: Perry
comment: true
#tags: [jekyll, tags, user-experience]
---

## Background

One of my larger side projects has been creating a battery pack using custom designed fast charging technology, and utilizing kinetic energy. Battery packs are fun things that can be built at home with relative ease and without burning a hole in your wallet. If you have decent circuit/PCB design and manufacturing knowledge you can easily design your own battery pack at home. 

### Fast Charging?

For those maybe a little confused on the term 'fast charging', it pretty much means charging that utilizes a much higher wattage then normal USB charging solutions. For example a battery pack that can charge a phone at 15 watts would be considered fast charging capable battery pack. Whereas the normal charging rate is usually around 5 watts.

<br>

## What the Board Does

To be clear this board is **NOT** the entire battery pack logic. It's actually a separate print of the logic which takes in a high amperage 5V USB input and lowers it down to 4.2V at around the same amperage of the initial input. So this would be the initial set of logic that the USB power would go through then after it's been shifted down, out to the battery it goes.

### Why 4.2 Volts?

The battery pack that I have been designing utilizes a 3.7V LiPo battery for it's storage. LiPo batteries are the same batteries that you'll find in **many** of modern day handheld electronics, laptops, phones, tablets, and any other device amongst this category. But wait, 4.2V? Isn't the battery rated at 3.7V? Well the 3.7V simply stands for the voltage output that the LiPo battery is capable of. The battery it's self can be charged with a voltage range of 3.7V - 4.2V.

## How it comes together

### Step 1 | Picking the parts

One of the most difficult parts of designing circuitry is picking out the ICs (Integrated Chips) that you want to use. Many things have to come into consideration. Package of the IC, can it be manufactured onto a PCB, what temperature range can it operate at, what the maximum/minimum amperage/voltage, does it have any charging safeguards, is it configured out of the box or does it have to configured to a certain amperage rating with external capacitors and resistors. These are all of the things that come to mind when picking out a chip to fit your design. Thankfully charging solutions are a very popular market and thus there are many different charging ICs to choose from. So where do I find these ICs to pick from? I personally use either [Mouser](https://www.mouser.com/) or [DigiKey](https://www.digikey.com/) to search for ICs to use in my builds. When you find the IC that sounds appealing based off it's highlighted specs you can then read the datasheet of said IC to learn more about the chip to see if will fit your application.


<!--more-->
