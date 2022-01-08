(function ($) {
  "use strict";


  // window.addEventListener('load', () => {
  //   var
  //     carousels = document.querySelectorAll('.carousel')
  //     ;

  //   for (var i = 0; i < carousels.length; i++) {
  //     carousel(carousels[i]);
  //   }
  // });

  // function carousel(root) {
  //   var
  //     figure = root.querySelector('figure'),
  //     nav = root.querySelector('nav'),
  //     images = figure.children,
  //     n = images.length,
  //     gap = root.dataset.gap || 0,
  //     bfc = 'bfc' in root.dataset,

  //     theta = 2 * Math.PI / n,
  //     currImage = 0
  //     ;

  //   setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  //   window.addEventListener('resize', () => {
  //     setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
  //   });

  //   setupNavigation();

  //   function setupCarousel(n, s) {
  //     var
  //       apothem = s / (2 * Math.tan(Math.PI / n))
  //       ;

  //     figure.style.transformOrigin = `50% 50% ${- apothem}px`;

  //     for (var i = 0; i < n; i++)
  //       images[i].style.padding = `${gap}px`;
  //     for (i = 1; i < n; i++) {
  //       images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
  //       images[i].style.transform = `rotateY(${i * theta}rad)`;
  //     }
  //     if (bfc)
  //       for (i = 0; i < n; i++)
  //         images[i].style.backfaceVisibility = 'hidden';

  //     rotateCarousel(currImage);
  //   }

  //   function setupNavigation() {
  //     nav.addEventListener('click', onClick, true);

  //     function onClick(e) {
  //       e.stopPropagation();

  //       var t = e.target;
  //       if (t.tagName.toUpperCase() != 'BUTTON')
  //         return;

  //       if (t.classList.contains('next')) {
  //         currImage++;
  //       }
  //       else {
  //         currImage--;
  //       }

  //       rotateCarousel(currImage);
  //     }

  //   }

  //   function rotateCarousel(imageIndex) {
  //     figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  //   }

  // }



















  $(document).ready(function () {



    // Query for Preloader 
    $("#preloader").delay(1800).fadeOut("slow");

    // Query For Mobile Menu Activation 
    $('.toggle-bar').on('click', function () {
      $('.mobile-menu-wrapper, .overlay').addClass('show');
    })
    $('.close-mobile-menu, .overlay , .mobile-menu a').on('click', function () {
      $('.mobile-menu-wrapper, .overlay').removeClass('show');
    })





    let rev = $('.slider-one');
    let next, prev;
    rev.on('init', function (event, slick, currentSlide) {
      let cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      cur.removeClass('slick-snext').removeClass('slick-sprev');
      slick.$prev = prev;
      slick.$next = next;
      $('#photo-title').html($('.slick-current div[data-ttl').attr('data-ttl'))
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      let cur = $(slick.$slides[nextSlide]);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      next = cur.next(),
        prev = cur.prev();
      prev.prev();
      prev.next();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev');

    }).on('afterChange', function () {
      $('#photo-title').html($('.slick-current div[data-ttl').attr('data-ttl'))
    })

    rev.slick({
      speed: 1000,
      arrows: true,
      dots: false,
      focusOnSelect: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      infinite: true,
      centerMode: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0',
      swipe: true,
      customPaging: function (slider, i) {
        return '';
      }
    });



    // Query For Header Sticky 
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
      }
      else {
        $('header').removeClass("sticky");
      }
    });

    // Code For Full Screen Slider 
    $('.slider-first-rw').slick({
      infinite: true,
      speed: 12000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: false,
      variableWidth: true,
      slidesToShow: 7,
    });
    $('.slider-second-rw').slick({
      infinite: true,
      speed: 12000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      arrows: false,
      variableWidth: true,
      slidesToShow: 7,
      rtl: true,
    });;


    $('#nav').onePageNav();

    // Action Aos Jquery Plugins 
    AOS.init({
      disable: 'mobile',
      duration: 800
    });



    //   Query For scroll back to top 
    var back = $('.back-to-top');
    back.on('click', function () {
      $('html, body').animate({
        scrollTop: 0,
      }, 900);
    })
    $(window).on('scroll', function () {
      var self = $(this),
        height = self.height(),
        top = self.scrollTop();
      if (top > height) {
        back.addClass('visible');
      } else {
        back.removeClass('visible');
      }
    })


  });




})(jQuery); // End line