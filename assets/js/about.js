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
  
    $('.arrow').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 300);
        return false;
    });
})