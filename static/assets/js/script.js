// ================ Navbar ================
function myFunction(x) {
    x.classList.toggle("change");
    $(document).ready(function () {
        $(".navbar-nav li.nav-item a").click(function(event) {
          $(".navbar-collapse").collapse('hide');;
          $(".navbar-toggler").removeClass("change");
        });
      });
}




// ================ Typed.js ================
if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// ================ Smooth scrolling ================
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1500,
    speedAsDuration: true
});

// ================ owl carosel ================
$('.owl-portfolio-slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeInDown',
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause:true,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
    }
});

// ================ AOS ================
AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });
