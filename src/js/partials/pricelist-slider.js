$('.pricelist > ul').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: false,
  dots: false,
  arrows: false,
  draggable: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        arrows: true,
        draggable: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: true,
        draggable: true
      }
    }
  ]
});
