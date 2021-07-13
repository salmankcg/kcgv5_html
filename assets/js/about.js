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