$('.developers-button').click(function(e) {
  e.preventDefault();
  $('#developer').slideDown();
});

$('#developers__hide').click(function(e) {
  e.preventDefault();
  $('#developer').slideUp();
});
