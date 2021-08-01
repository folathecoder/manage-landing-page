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
const footer = document.querySelector('footer');
//* ==============================================================================

//TODO: Create dropdown menu functionality 

//* Add class to hide gamburger close icon and overlay
hamburgerClose.classList.add('hidden');
overlay.classList.add('hidden');

//* Create functions that opens the dropdown menu on mobile
const openDropdown = function() {
    hamburgerOpen.classList.add('hidden');
    hamburgerClose.classList.remove('hidden');
    overlay.classList.remove('hidden');
    menu.classList.remove('menu--active');
    body.style.overflow = 'hidden';
} 

//* Create functions that closes the dropdown menu on mobile
const closeDropdown = function() {
    hamburgerOpen.classList.remove('hidden');
    hamburgerClose.classList.add('hidden');
    overlay.classList.add('hidden');
    menu.classList.add('menu--active');
    body.style.overflow = 'auto';
} 

//* Event Listeners that opens or closes the dropdown
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

//* ==============================================================================

//TODO: Smooth Scroll To The Top

jumpUpBtn.addEventListener('click', e => {
    console.log(e.target);
    header.scrollIntoView({behavior:"smooth"});
})

//* ==============================================================================

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

//* ==============================================================================

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

//* ==============================================================================

//TODO: Email Validation 

const form = document.querySelector('.foot--form');
const email = document.querySelector("#email");
const errorMessage = document.querySelector('.email--error');

console.log(email.value);

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
})

const checkInputs = function() {
    //* Get value from input
    const emailValue = email.value.trim();
    console.log(emailValue);

}

const footButton = document.querySelector('.foot--btn');

footButton.addEventListener('click', e => {
    errorMessage.classList.add('error--active');
})

//* ==============================================================================

//TODO: Slider Component using swiper.js library

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    flipEffect: {
        slideShadows: false,
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },

      mousewheel: {
        invert: true,
      },

      autoplay: {
        delay: 5000,
      },
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
  });

//* ==============================================================================

