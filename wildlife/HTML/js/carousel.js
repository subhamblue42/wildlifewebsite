$(document).ready(function() {
          $('#testimonial_slider').owlCarousel({
            loop: false,
            nav: true,
            autoplay: false,
            dots: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                margin: 0
              },
              768: {
                items: 2,
                margin: 30
              }
            }
          })
        })


        $(document).ready(function() {
          $('#banner_slider').owlCarousel({
            loop: false,
            nav: true,
            autoHeight:true,
            autoplay: false,
            dots: false,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                margin: 0
              }
            }
          })
        })
//header scrolled//
  $(window).scroll(function(){
  var sticky = $('.headbar'),
      scroll = $(window).scrollTop();

  if (scroll >= 200) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});