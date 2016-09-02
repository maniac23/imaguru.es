$('.accelerators-button').click(function(e) {
  e.preventDefault();
  $('#accelerator').slideDown();
});

$('#accelerator__hide').click(function(e) {
  e.preventDefault();
  $('#accelerator').slideUp();
});
