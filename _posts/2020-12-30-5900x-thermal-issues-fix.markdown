---
layout: post
title:  Fixing Thermal Issues on the Ryzen 5900x
description: When I got my hands on a Ryzen 5900x CPU shortly after launch, I experienced some thermal issues. Here's how I fixed it.
date:   2020-12-30 15:01:35 +0300
image:  '/images/5900x.jpg'
tags:   [Tutorial, Computers, Extra]
---

# Powaaaa

If you'd happen to take a browse over at the new Ryzen 5000s series CPUs you'll quickly know that these things are powerhouses! Rendering machines, and gaming monsters. And all of this with the same 105 watt TDP of the previous Ryzen 3000s series. But all good things can't be simple can they. Myself, along with many others have experienced thermal issues with the 5000s series, specifically the 5900x. 

<hr>

# x570-E Gaming

Now I know that while many of us had this thermal issue, many did not. Chances are, that if you are on any other motherboard besides the **x570-E Gaming** you may've not experienced this issue. The issue stems from a collection of strange auto enabled features in the BIOS, and an un-optimized BIOS to begin with. 

<hr>

# How I found out

I found out that I had obvious thermal issues right after installing my new 5900x. Right after I installed the CPU and booted up my computer into the BIOS, * *VROOOM* *, my computer fans begin going absolutely mad. Which right after booting up a PC, isn't necessarily abnormal. However, this blaring noise continued on and on for minutes. 

And then that's when I see it, the problem. I go over to read my thermals from the BIOS menu, and to my astonishment, it is saying that my CPU is running at ~75-80°C. This is at **IDLE** in the **BIOS** menu! Now for a stock cooler, and a cruddy thermal paste job, a temperature reading like this may not be too hard to see. But for what my setup is rocking for it's cooling solution, Kraken x72 AIO, 6x NF-F12 Noctua fans, and thermal grizzly kryonaut thermal grease, this is unacceptable. 

Now it's time to get down to debugging.

## Re-applying Thermal Paste

My first thought was that my thermal paste application must've been bad. So I grabbed my bottle of 99% isopropyl alcohol, and a microfiber cloth. Cleaned off the old thermal paste from the copper heat plate on the Kraken X72, and from the CPU. Afterwards I made sure to do a much better job of applying my thermal paste. 

![]({{site.baseurl}}/images/5900xthermalpaste.jpg)
*Thermal Paste Re-application*

All thought this helped out my situation, but it didn't solve it. My idle temperatures were still ~70-75°C in BIOS menu, and at windows desktop. So something was still obviously wrong. 

<hr>

# Always Update . . . 

My next step of action was to go through my computer and make sure everything was updated. And that's when it hit me! My BIOS was in version **2802**.
So I rushed to the [BIOS download page for the X570-E Gaming](https://rog.asus.com/us/motherboards/rog-strix/rog-strix-x570-e-gaming-model/helpdesk_bios/). And downloaded version **3001** into my nearest 8 gig flashdrive. Updated my motherboard, and there it was! My BIOS screen idle was ~60-65°C. All though not the temperatures you should be getting with my kind of setup, it was a step closer. 

### BIOS Updating Tutorial

<iframe src="https://www.youtube.com/embed/t36ttKl3kM4" frameborder="0" allowfullscreen></iframe>

<hr>

# BIOS Settings

From here I knew it was time to go through my BIOS to begin looking for possible settings that could have a major affect on my CPUs thermals. When doing my digging I found two very interesting options 

1. **Precision Boost Overdrive**
2. **Core Performance Boost**

Upon disabling these two options, my computer goes dead-silent. Why? My CPU is now running ~45°C *IDLE!* Both in the BIOS menu, and in the Windows desktop.
And when playing games like Warzone I didn't even go above the 62°C mark!

## TLDR - FIX

1. Update your BIOS on the X570-E Gaming to version 3001 or higher
2. Disable **Precision Boost Overdrive**
3. Disable **Core Performance Boost**

Remember to share this content if it helped you out! And comment your questions and concerns if you have any!