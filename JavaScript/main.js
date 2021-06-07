'use strict';

//TODO: Declare all required variables

const hamburgerOpen = document.querySelector('.hamburger--open');
const hamburgerClose = document.querySelector('.hamburger--close');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const body = document.body;


hamburgerClose.classList.add('hidden');
overlay.classList.add('hidden');
// menu.classList.add('menu--active');

hamburgerOpen.addEventListener('click', e => {
    hamburgerOpen.classList.add('hidden');
    hamburgerClose.classList.remove('hidden');
    overlay.classList.remove('hidden');
    menu.classList.remove('menu--active');
    body.style.overflow = 'hidden';
    
})

hamburgerClose.addEventListener('click', e => {
    hamburgerOpen.classList.remove('hidden');
    hamburgerClose.classList.add('hidden');
    overlay.classList.add('hidden');
    menu.classList.add('menu--active');
    body.style.overflow = 'auto';
})

overlay.addEventListener('click', e => {
    hamburgerOpen.classList.remove('hidden');
    hamburgerClose.classList.add('hidden');
    overlay.classList.add('hidden');
    menu.classList.add('menu--active');
    body.style.overflow = 'auto';
})