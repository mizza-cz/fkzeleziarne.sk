$(document).ready(function () {
  $('.headerSection__links a[href^="#"]').bind("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - -0,
        },
        100
      );
    e.preventDefault();
  });
  return false;
});
