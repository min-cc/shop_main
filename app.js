
// back to top
var btn = $('.arrow-up');
$(window).scroll(function() {
  if ($(window).scrollTop() > 900) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});