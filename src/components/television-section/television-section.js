$(".television-section__inner").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  prevArrow:
    '<button class="television__btn television__btnprev"><img src="images/ico/slider-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="television__btn  television__btnnext"><img src="images/ico/slider-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
