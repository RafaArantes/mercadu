$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop: true,
    margin: 25,
    autoplay: true,
    autoplayTimeout: 4000,
	autoplayHoverPause: false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        },
        1300:{
            items:8
        }
    }
  });
});