
$('.benefits__button').click(function() {
  $('.benefits__list li:hidden').slice(0, 6).fadeIn();
  if ($('.benefits__list li').length == $('.benefits__list li:visible').length) {
    $('.benefits__button').fadeOut();
  }
});
