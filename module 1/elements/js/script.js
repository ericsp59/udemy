'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'green';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = "crimson";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.cssText = 'border: 15px dotted green; background-color: yellow';
// }

hearts.forEach(item => {
    item.style.cssText = 'border: 15px dotted green; background-color: yellow';
});

const div = document.createElement('div');
const text = document.createTextNode('Some Text');
div.classList.add('black');

// wrapper.append(div);

// wrapper.prepend(div);
// hearts[1].before(div);
wrapper.insertBefore(div, hearts[1]);
// circles[2].remove();
// circles[0].replaceWith(hearts[1]);

div.innerHTML = "<h1>Hello</h1>";
// div.textContent = text.nodeValue;
//div.insertAdjacentHTML('beforeBegin', "<h2>Hello!!!<h1>");
// div.insertAdjacentHTML('AfterBegin', "<h2>Hello!!!<h1>");
// div.insertAdjacentHTML('beforeEnd', "<h2>Hello!!!<h1>");
// div.insertAdjacentHTML('AfterEnd', "<h2>Hello!!!<h1>");