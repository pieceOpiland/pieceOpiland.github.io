---
layout: post
title:  "More Progress?"
hero_image: /assets/img/lochmere_bg.png
categories: status
---

### What is going on?? Two posts in one week?

Well, yeah! I'm kinda going pretty well with this. I was able to tackle the task of
adding a parallax effect to the hero image. I initially was going to leverage
`background-attachment: fixed` to accomplish this. However, mobile browsers told me
other-wise. So, I changed how I accomplished the parallax effect to leverage what many
other developers had indicated as a performant alternative: `transform:translate3d(...)`.

I have to say, this implementation was not as difficult as I thought it was. I had
already done most of the leg-work in the world of JavaScript. I simply had to adjust
what I had been doing with `background-position-y` and adjust it to use a `transform`.
There are still some items left to tackle to clean up the effect.

The items left for efficiency that remain are:
- Disable the effect when the element is offscreen.
- Allow arbitrary parallax locations and heights.

As I mentioned yesterday, I'd like to go ahead and make the home page better. It could
use a little TLC. On top of that, I think that I should make some overall improvements
on the UI of the site. Right now, I'm using the basic fonts from
[bootstrap](https://getbootstrap.com), but I feel like it could really stand out if
I pull in some additional fonts. The spacing on the posts could also be improved. I'm
thinking about making the space for the text content narrower.

We'll see how this all pans out! Hopefully I'll be able to keep this going!