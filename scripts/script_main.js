const svgLogo = document.getElementById('svg-logo');
const mainDescription = document.getElementById('main-description');

const aboutUs = document.getElementById("about-us-scroll-to");
const reviews = document.getElementById("reviews-scroll-to");
const courses = document.getElementById("courses-scroll-to");
const prices = document.getElementById("prices-scroll-to");
const contacts = document.getElementById("contacts-scroll-to");

const aboutUsBurger = document.getElementById("about-us-burger-scroll-to");
const reviewsBurger = document.getElementById("reviews-burger-scroll-to");
const coursesBurger = document.getElementById("courses-burger-scroll-to");
const pricesBurger = document.getElementById("prices-burger-scroll-to");
const contactsBurger = document.getElementById("contacts-burger-scroll-to");

const cardsWrapper = document.getElementById('cards-wrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');

const lightModeBurger = document.getElementById('light-mode-burger');
const darkModeBurger = document.getElementById('dark-mode-burger');

const burgerIcon = document.getElementById('burger-icon');
const navMenu = document.getElementById('nav-menu');


function updatePadding() {
  const rect = svgLogo.getBoundingClientRect();
  const distanceFromLeft = rect.left;

  mainDescription.style.paddingLeft = distanceFromLeft + 'px'; // Устанавливаем отступ с единицами
}

function themeDetection(){
  if(document.body.classList.contains('dark-theme')){
    darkMode.style.textDecoration = "underline";
    lightMode.style.textDecoration = "none";
    darkModeBurger.style.textDecoration = "underline";
    lightModeBurger.style.textDecoration = "none";
  }
  else{
    lightMode.style.textDecoration = "underline";
    darkMode.style.textDecoration = "none";
    lightModeBurger.style.textDecoration = "underline";
    darkModeBurger.style.textDecoration = "none";
  }
}

function updateButtons() {
  const scrollLeft = cardsWrapper.scrollLeft;
  const scrollWidth = cardsWrapper.scrollWidth;
  const clientWidth = cardsWrapper.clientWidth;

  if (scrollLeft <= 0) {
    prevBtn.style.opacity = '0.3';
    prevBtn.style.pointerEvents = 'none';
  } else {
    prevBtn.style.opacity = '1';
    prevBtn.style.pointerEvents = 'auto';
  }

  if (scrollLeft + clientWidth >= scrollWidth - 5) {
    nextBtn.style.opacity = '0.3';
    nextBtn.style.pointerEvents = 'none';
  } else {
    nextBtn.style.opacity = '1';
    nextBtn.style.pointerEvents = 'auto';
  }
}

//сразу при загрузке
updatePadding();
updateButtons();
themeDetection();
window.addEventListener('resize', updatePadding);


lightMode.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');
  themeDetection();
});

darkMode.addEventListener('click', ()=>{
  document.body.classList.add('dark-theme');
  themeDetection();
})

lightModeBurger.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');
  themeDetection();
});

darkModeBurger.addEventListener('click', ()=>{
  document.body.classList.add('dark-theme');
  themeDetection();
})



aboutUs.addEventListener('click', function() {
  const target = document.getElementById("about-us-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
});

reviews.addEventListener('click', function() {
  const target = document.getElementById("reviews-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
});

courses.addEventListener('click', function() {
  const target = document.getElementById("courses-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
});

prices.addEventListener('click', function() {
  const target = document.getElementById("prices-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
});

contacts.addEventListener('click', function() {
  const target = document.getElementById("contacts-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
});

// Для бургера

aboutUsBurger.addEventListener('click', function() {
  const target = document.getElementById("about-us-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('open');
});

reviewsBurger.addEventListener('click', function() {
  const target = document.getElementById("reviews-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('open');
});

coursesBurger.addEventListener('click', function() {
  const target = document.getElementById("courses-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('open');
});

pricesBurger.addEventListener('click', function() {
  const target = document.getElementById("prices-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('open');
});

contactsBurger.addEventListener('click', function() {
  const target = document.getElementById("contacts-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('open');
});




nextBtn.addEventListener('click', () => {
  cardsWrapper.scrollBy({
    left: 391, 
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  cardsWrapper.scrollBy({
    left: -391, 
    behavior: 'smooth'
  });
});

cardsWrapper.addEventListener('scroll', updateButtons);

document.addEventListener('DOMContentLoaded', function() {
  
  burgerIcon.addEventListener('click', function(event) {

    navMenu.classList.toggle('active');
    burgerIcon.classList.toggle('open');
    event.stopPropagation(); 
  });


  document.addEventListener('click', function(event) {

    if (!navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      burgerIcon.classList.remove('open');
    }
  });

});