$(document).ready(function(){  
    new WOW().init();
  
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
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