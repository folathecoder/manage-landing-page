'use strict';

//TODO: Declare all required variables
const hamburgerOpen = document.querySelector('.hamburger--open');
const hamburgerClose = document.querySelector('.hamburger--close');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const body = document.body;
const header = document.querySelector('.intro__container');
const jumpUpBtn = document.querySelector('.jump--top'); 
const heroSection = document.querySelector('.hero');
const ctaSection = document.querySelector('.cta');
const jumpIcon = document.querySelector('.jump--top-icon i');

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

//TODO: Smooth Scroll To The Top

jumpUpBtn.addEventListener('click', e => {
    console.log(e.target);
    header.scrollIntoView({behavior:"smooth"});
})

//TODO: Hide Jump-to-top Button 

const heroCallback = function(entries) {
    const [entry] = entries;

    if(entry.isIntersecting) {
        jumpUpBtn.style.display = 'none';
    }
    else {
        jumpUpBtn.style.display = 'grid';
    }
}

const heroOptions = {
    root: null,
    threshold: 0.5,
}

const heroObserver = new IntersectionObserver(heroCallback, heroOptions);

heroObserver.observe(heroSection);

//TODO: Cookies Pop-Up Message

//* Create Outter and Inner divs
const cookies = document.createElement('div');
const cookiesContainer = document.createElement('div');

//* Append the inner container to the outter container
cookies.append(cookiesContainer);

//* Add classes
cookies.classList.add('cookies');
cookiesContainer.classList.add('cookies__inner');

cookiesContainer.innerHTML = '<p>This site uses cookies to provide you with the best user experience. By using Manage, you accept our <a href="">use of cookies.</a></p>'

//* Attach the cookie container before the header section
header.before(cookies);

//TODO: Automatically remove the cookie message after 20 seconds of activity or idleness

setTimeout(() => cookies.remove(), 20000);

//TODO: Change Background Color Jump To Button When It Hovers CTA Section + Remove Cookie when user scrolls to CTA Section

const ctaCallback = function(entries) {
    const [entry] = entries;
    
    if(entry.isIntersecting) {
        jumpUpBtn.style.backgroundColor = '#ffffff';
        jumpIcon.style.color = '#f25f3a';
        cookies.remove();
    }
    else {
        jumpUpBtn.style.backgroundColor = '#f25f3a';
        jumpIcon.style.color = '#ffffff';
    }

}

const ctaOptions = {
    root: null,
    threshold: 0,
}

const ctaObserver = new IntersectionObserver(ctaCallback, ctaOptions);

ctaObserver.observe(ctaSection);


//TODO: Email Validation 

const email = document.querySelector("#email");
const errorMessage = document.querySelector('.email--error');

console.log(email.value);

let regExp = /^[^ ]+@[^ ]+.[a-z]{2,3}$/;

function emailValidation() {
    if(email.value.match(regExp)) {
        errorMessage.style.display = "none";
        email.style.borderColor = "#f25f3a";
    }
    else {
        alert("Error");
        // errorMessage.style.display = "block";
        // email.style.borderColor = "#F33C3C";
    }
    // if (email.value == ""){
    //     errorMessage.style.display = "block";
    //     email.style.borderColor = "#f99076";
    // }
};

// emailValidation();


//TODO: Slider Component

const slides = document.querySelectorAll('.slide');

let currentSlide = -1;

slides.forEach((s,i) => {
    s.style.transform = `translateX(${100 * (currentSlide + i)}%)`;
})
