$(function() {
  $('#feedback').click(function() {
    $('.feedback__list li:hidden').slice(0, 2).fadeIn().css('display', 'flex');
    if ($('.feedback__list li').length == $('.feedback__list li:visible').length) {
      $('#feedback').fadeOut();
    }
  });
});
