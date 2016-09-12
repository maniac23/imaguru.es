$(function() {
  $('.team__button').click(function() {
    $('.team__list li:hidden').slice(0, 3).fadeIn();
    if ($('.team__list li').length == $('.team__list li:visible').length) {
      $('.team__button').fadeOut();
    }
  });
});
