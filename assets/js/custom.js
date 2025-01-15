jQuery(document).ready(function () {
  jQuery(".toggleBtn").hover(function () {
    jQuery("header nav.navbar").toggleClass("show");
    jQuery("header .navBar").addClass("show");
  });

  jQuery(".navbar-nav").mouseleave(function () {
    jQuery("header nav.navbar").removeClass("show");
    jQuery("header .navBar").removeClass("show");
  });

  var windowsize = jQuery(window).width();
  if (windowsize < 961) {
    jQuery(".navbar-nav").before('<button type="button" class="btn-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>');
  }

  jQuery(window).resize(function () {
    if (jQuery(window).width() >= 961) {
      jQuery("header nav.navbar").addClass("show");
    }
  });

  jQuery(".logo_slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });

  jQuery(".logo_slider_2").owlCarousel({
    loop: true,
    margin: 0,
    rtl: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 8000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
});
