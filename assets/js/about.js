$(document).ready(function(){  
    new WOW().init();
  
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        loopFillGroupWithBlank: true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            400: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 3,
            },
            966: {
                slidesPerView: 3
            }
          }
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('.about-tabs').addClass('about-tabs-sticky')
        }
        else {
            $('.about-tabs').removeClass('about-tabs-sticky')
        }
    });
  
    $('.arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 300);
        return false;
    });
})



var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveElement() {
  x += (lFollowX - x);
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

  $('.animated-btn').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveElement);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; 
  lFollowY = (10 * lMouseY) / 100;
});

moveElement();