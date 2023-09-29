let height = 100;
let width = 100;
let leaved = true;

$(document).ready(function () {
  height = $('.box').height();

  $('.box')
    .on('mouseenter', function () {
      leaved = false;
      var i = setInterval(function () {
        height += 20;
        width += 20;
        if (height >= 300 || leaved) {
          height = 100;
          width = 100;
          clearInterval(i);
          return;
        }
        $('.box').animate({
          height: height,
          width: width,
        });
      }, 500);
    })
    .on('mouseleave', function () {
      leaved = true;
      $('.box').animate({
        height: 100,
        width: 100,
      });
    });
});
