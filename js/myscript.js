// STICKY MENU

$(document).ready(function() {
var stickyNavTop = $('.top_nav').offset().top;

var stickyNav = function(){

    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
        $('.top_nav_content').css("background-color", "#ffffff");
        $('.top_nav img').attr("src", "img/logo-dark.png");
        $('.top_nav a').css("color", "#000000");
        $('.toggle-nav i').css("color", "#000000");
} else {
        $('.top_nav_content').css("background-color", "transparent");
        $('.top_nav img').attr("src", "img/logo-light.png");
        $('.top_nav a').css("color", "#ffffff");
        $('.toggle-nav i').css("color", "#ffffff");
    }
};

stickyNav();

$(window).scroll(function() {
  stickyNav();
});
});

// OWL CAROUSEL
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      autoPlay: 2000,
      pagination: false,
      loop: true
  });
});

// SCROLL TO TOP

$(".footer_copyright div").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// NAVIGATION
$(".toggle-nav").click(function() {
    $('.top_nav ul').toggle();
    $('.top_nav').toggleClass("active");
});
