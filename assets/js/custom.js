jQuery(document).ready(function () {
  jQuery(".toggleBtn").hover(function () {
    jQuery("header nav.navbar").addClass("show");
    jQuery("header .navBar").addClass("show");
  });

  jQuery("header .navbar").mouseleave(function () {
    jQuery("header nav.navbar").removeClass("show");
    jQuery("header .navBar").removeClass("show");
  });

  var windowsize = jQuery(window).width();
  if (windowsize < 961) {
    jQuery(".navbar-nav").before(
      '<button type="button" class="btn-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>'
    );
  }

  jQuery(".btn-close").on("click", function () {
    jQuery("header .navBar").removeClass("show");
    jQuery("header nav.navbar").removeClass("show");
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


// 1. Header scroll shadow
        window.addEventListener('scroll', function () {
            document.querySelector('header').classList.toggle('header-scrolled', window.scrollY > 50);
        });

        // 2. Scroll Reveal
        var animEls = document.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right');
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-visible');
                }
            });
        }, { threshold: 0.15 });
        animEls.forEach(function (el) { revealObserver.observe(el); });

        // 3. Number Counter Animation
        function runCounter(el) {
            if (el.dataset.done) return;
            el.dataset.done = 'true';
            var target = parseInt(el.dataset.target);
            var suffix = el.dataset.suffix || '';
            var duration = 1800;
            var start = performance.now();
            function tick(now) {
                var elapsed = now - start;
                var progress = Math.min(elapsed / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(target * eased).toLocaleString() + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }

        var counters = document.querySelectorAll('.js-counter');
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) runCounter(entry.target);
            });
        }, { threshold: 0.4 });
        counters.forEach(function (el) { counterObserver.observe(el); });
