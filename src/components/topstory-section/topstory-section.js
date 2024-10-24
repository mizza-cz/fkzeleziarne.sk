$(".topstory-section__inner").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button class="topstory__btn topstory__btnprev"><img src="images/ico/slider-left.svg" loading="lazy" alt="" /></button> ',
  nextArrow:
    ' <button class="topstory__btn  topstory__btnnext"><img src="/images/ico/slider-right.svg" loading="lazy" alt="" /></button>',
  responsive: [
    {
      breakpoint: 1313,
      settings: {},
    },
    {
      breakpoint: 541,
      settings: {
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
      },
    },
  ],
});
