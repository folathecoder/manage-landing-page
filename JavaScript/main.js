'use strict';

//TODO: Declare all required variables
const hamburgerOpen = document.querySelector('.hamburger--open');
const hamburgerClose = document.querySelector('.hamburger--close');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const body = document.body;

//* Add class to hide gamburger close icon and overlay
hamburgerClose.classList.add('hidden');
overlay.classList.add('hidden');

//* Functions that opens and closes the dropdown menu on mobile
const openDropdown = function() {
    hamburgerOpen.classList.add('hidden');
    hamburgerClose.classList.remove('hidden');
    overlay.classList.remove('hidden');
    menu.classList.remove('menu--active');
    body.style.overflow = 'hidden';
} 

const closeDropdown = function() {
    hamburgerOpen.classList.remove('hidden');
    hamburgerClose.classList.add('hidden');
    overlay.classList.add('hidden');
    menu.classList.add('menu--active');
    body.style.overflow = 'auto';
} 

//* Dropdown Open
hamburgerOpen.addEventListener('click', e => {
    openDropdown();   
});
//* Dropdown Close
hamburgerClose.addEventListener('click', e => {
    closeDropdown();
})
//* Dropdown Close when the overlay is clicked
overlay.addEventListener('click', e => {
    closeDropdown();
})