# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox

### What I learned
I studied how to make the background image adaptive and I figured out how to remove the blue background when you press buttons from the phoneю.

```html
<div class="major-news__image"></div>
```
```css
.major-news__image {
    width: 100%;
    height: 0;
    padding-top: 41.09%;
    margin: 0 0 25px 0;
    background: no-repeat center / contain url('/assets/images/image-web-3-desktop.jpg');
}
```
```css
.header__icon {
    display: none;
    cursor: pointer;
    width: 40px;
    height: 17px;
    background: no-repeat center / cover url(./assets/images/icon-menu.svg);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```
### Continued development

Adaptive layout - [Resource 1](https://kokoc.com/blog/chto-takoe-adaptivnaya-vyorstka-sajta-primery/)

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/@shuvalovrus)


