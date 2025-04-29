document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const navMenu = document.getElementById('nav-menu');

  // При клике на бургер (или крестик)
  burgerIcon.addEventListener('click', function(event) {
    // Переключаем класс для анимации и видимости меню
    navMenu.classList.toggle('active');
    burgerIcon.classList.toggle('open');
    event.stopPropagation(); // Предотвращаем всплытие клика (чтобы не срабатывал следующий обработчик)
  });

  // Закрытие меню, если кликнуть вне меню или бургер-меню
  document.addEventListener('click', function(event) {
    // Проверяем, что клик был не на меню и не на бургер
    if (!navMenu.contains(event.target)) {
      navMenu.classList.remove('active');
      burgerIcon.classList.remove('open');
    }
  });

});
