const svgLogo = document.getElementById('svg-logo');
const mainDescription = document.getElementById('main-description');

const aboutUs = document.getElementById("about-us-scroll-to");
const reviews = document.getElementById("reviews-scroll-to");
const courses = document.getElementById("courses-scroll-to");
const prices = document.getElementById("prices-scroll-to");
const contacts = document.getElementById("contacts-scroll-to");
const logo = document.getElementById("logo-scroll-to");
const test = document.getElementById("test-scroll-to");

const aboutUsBurger = document.getElementById("about-us-burger-scroll-to");
const reviewsBurger = document.getElementById("reviews-burger-scroll-to");
const coursesBurger = document.getElementById("courses-burger-scroll-to");
const pricesBurger = document.getElementById("prices-burger-scroll-to");
const contactsBurger = document.getElementById("contacts-burger-scroll-to");
const faqBurger = document.getElementById("faq-burger-scroll-to");
const logoBurger = document.getElementById("logo-burger-scroll-to");
const testBurger = document.getElementById("test-burger-scroll-to");

const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const burgerModeSwitcher = document.getElementById('circle-burger');

const lightModeBurger = document.getElementById('light-mode-burger');
const darkModeBurger = document.getElementById('dark-mode-burger');

const burgerIcon = document.getElementById('burger-icon');
const navMenu = document.getElementById('nav-menu');


function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Получаем тему из URL
const theme = getQueryParameter('theme');

if (theme === 'dark-theme') {
  document.body.classList.add(theme); // Устанавливаем класс для темы
}

var currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : "light-theme";


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
themeDetection();
window.addEventListener('resize', updatePadding);


lightMode.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');
  currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : "light-theme";
  themeDetection();
});

darkMode.addEventListener('click', ()=>{
  document.body.classList.add('dark-theme');
  currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : "light-theme";
  console.log(currentTheme);
  themeDetection();
})

lightModeBurger.addEventListener('click', () => {
  document.body.classList.remove('dark-theme');
  currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : "light-theme";
  themeDetection();
});

darkModeBurger.addEventListener('click', ()=>{
  document.body.classList.add('dark-theme');
  currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : "light-theme";
  themeDetection();
})

burgerModeSwitcher.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : "light-theme";
});


// Для бургера

coursesBurger.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#courses-target-div`;
});

aboutUsBurger.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#about-us-target-div`;
});

reviewsBurger.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#reviews-target-div`;
});

contactsBurger.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#contacts-target-div`;
});

pricesBurger.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#prices-target-div`;
});

logoBurger.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}`;
});


faqBurger.addEventListener('click', function() {
  window.location.href = `./faq.html?theme=${currentTheme}`;
});

testBurger.addEventListener('click', function(){
  alert('Тест временно недоступен. Приносим свои извинения');
})

document.getElementById('faq').addEventListener('click', function() {
  window.location.href = `./faq.html?theme=${currentTheme}`;
});

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

courses.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#courses-target-div`;
});

aboutUs.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#about-us-target-div`;
});

reviews.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#reviews-target-div`;
});

contacts.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#contacts-target-div`;
});

prices.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}#prices-target-div`;
});

logo.addEventListener('click', function() {
  window.location.href = `./index.html?theme=${currentTheme}`;
});

test.addEventListener('click', function(){
  alert('Тест временно недоступен. Приносим свои извинения');
})