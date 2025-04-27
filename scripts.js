const cardsWrapper = document.getElementById('cardsWrapper');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
  cardsWrapper.scrollBy({
    left: 320,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  cardsWrapper.scrollBy({
    left: -320,
    behavior: 'smooth'
  });
});
