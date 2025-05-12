const svgLogo = document.getElementById('svg-logo');
const mainDescription = document.getElementById('main-description');

const aboutUs = document.getElementById("about-us-scroll-to");
const reviews = document.getElementById("reviews-scroll-to");
const courses = document.getElementById("courses-scroll-to");
const prices = document.getElementById("prices-scroll-to");
const contacts = document.getElementById("contacts-scroll-to");
const test = document.getElementById("test-scroll-to");
const teachers = document.getElementById("teachers-scroll-to");

const levelOfKnowlege = document.getElementById("level-of-knowlege-button");
const consultingButton = document.getElementById("consulting-button");

const aboutUsBurger = document.getElementById("about-us-burger-scroll-to");
const reviewsBurger = document.getElementById("reviews-burger-scroll-to");
const coursesBurger = document.getElementById("courses-burger-scroll-to");
const pricesBurger = document.getElementById("prices-burger-scroll-to");
const contactsBurger = document.getElementById("contacts-burger-scroll-to");
const faqBurger = document.getElementById("faq-burger-scroll-to");
const testBurger = document.getElementById("test-burger-scroll-to");
const teachersBurger = document.getElementById("teachers-burger-scroll-to");

const cardsWrapper = document.getElementById('cards-wrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


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
console.log(currentTheme);

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
if(cardsWrapper!==null){
  updateButtons();
}
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

consultingButton.addEventListener('click', function() {
  const target = document.getElementById("contacts-target-div");
  target.scrollIntoView({ behavior: 'smooth' }); 
});

test.addEventListener('click', function(){
  alert('Тест временно недоступен. Приносим свои извинения');
})

levelOfKnowlege.addEventListener('click', function(){
  alert('Тест временно недоступен. Приносим свои извинения');
})

teachers.addEventListener('click', function() {
  window.location.href = `./teachers.html?theme=${currentTheme}`;
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

testBurger.addEventListener('click', function(){
  navMenu.classList.remove('active');
  burgerIcon.classList.remove('open');
  alert('Тест временно недоступен. Приносим свои извинения');
})

teachersBurger.addEventListener('click', function() {
  window.location.href = `./teachers.html?theme=${currentTheme}`;
});


if(nextBtn!==null){
  nextBtn.addEventListener('click', () => {
    cardsWrapper.scrollBy({
      left: 391, 
      behavior: 'smooth'
    });
  });
}

if(prevBtn!==null){
  prevBtn.addEventListener('click', () => {
    cardsWrapper.scrollBy({
      left: -391, 
      behavior: 'smooth'
    });
  });
}

if(cardsWrapper!==null){
  cardsWrapper.addEventListener('scroll', updateButtons);
}

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

document.getElementById('faq').addEventListener('click', function() {
  window.location.href = `./faq.html?theme=${currentTheme}`;
});

faqBurger.addEventListener('click', function() {
  window.location.href = `./faq.html?theme=${currentTheme}`;
});

const cardButtons = document.querySelectorAll(".card-button");

cardButtons.forEach(cardButton => {
  cardButton.addEventListener('click', function() {
    const target = document.getElementById("contacts-target-div");
    target.scrollIntoView({ behavior: 'smooth' }); 
  });
});