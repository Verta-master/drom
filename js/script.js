//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.header__btn').click(function() {
  $('.header__menu').toggleClass('header__menu--opened');
  $('.header__list').slideToggle();
});
