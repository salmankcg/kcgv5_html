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

    // Handling data-toggle manually
    $('.nav-item').click(function(){
        let elementId = $(this).children().attr('id');
        console.log(elementId);
        if(elementId === 'approch-tab') {
            $('header').css({'background': '#141414'})
            $('.about .logo svg .ico path').css({'fill': '#fff'})
            $('.about .logo svg .text path').css({'fill': '#fff'})
            $('.menu svg line').css({'stroke': '#fff'})
            $('body').css({'background': '#141414'})
            $('.nav-link').addClass('text-light')
            $('footer').css({'background': '#fff'})
            $('.footer .title').css('color', '#000')
            $('.footer button').css({'color': '#000', 'borderColor': '#000'})
            $('.footer_nav .nav_list a, .footer_socials a').css('color', '#000')
            $('.footer_address, .footer_address a').css('color', '#000')
            $('.copyright-section, .copyright-section').addClass('borderBlack')
            $('footer .footer_links, footer .copyright, footer .footer_links a').css('color', '#000')
        }
        else {
            $('header').css({'background': '#fff'})
            $('.about .logo svg .ico path').css({'fill': '#fcd572'})
            $('.about .logo svg .text path').css({'fill': '#000'})
            $('.menu svg line').css({'stroke': '#000'})
            $('body').css({'background': '#fff'})
            $('.nav-link').removeClass('text-light')
            $('footer').css({'background': '#141414'})
            $('.footer .title').css('color', '#fff')
            $('.footer button').css({'color': '#fff', 'borderColor': '#fff'})
            $('.footer_nav .nav_list a, .footer_socials a').css('color', '#fff')
            $('.footer_address, .footer_address a').css('color', '#fff')
            $('.copyright-section, .copyright-section').removeClass('borderBlack')
            $('footer .footer_links, footer .copyright, footer .footer_links a').css('color', '#fff')
        }
    });

    let videoContainer = $('.approch-section .card-container');
    let video = $('.video-section .video');
    const getVideo = $('.video')

    $(videoContainer).on('mouseenter', function(e) {
        $(videoContainer).css('opacity', '0');
        console.log($(this))
        $('header').css('opacity', '0');
        $('.about-tabs').css('opacity', '0');
        $('.title').css('opacity', '0');
        
        const current = e.currentTarget
        const dataId = $(current).data('id')


        if(e.currentTarget){
            $(current).css('opacity', 1);
            console.log(e.currentTarget);

            if(dataId == 1) {
                $('.video-1').addClass('show');
            }

            if(dataId == 2) {
                $('.video-2').addClass('show');
            }

            if(dataId == 3) {
                $('.video-3').addClass('show');
            }
        }
    })

    videoContainer.on('mouseleave', function(e) {
        $(videoContainer).css('opacity', 1);
        $('header').css('opacity', 1);
        $('.about-tabs').css('opacity', 1);
        $('.title').css('opacity', 1);
        $(getVideo).removeClass('show')
    })

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
    rotate = 0,
    friction = 1 / 30;

function moveElement() {
  x += (lFollowX - x);
  y += (lFollowY - y) * friction;
  rotate += 2 * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) rotate(' + rotate + 'deg)';

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

// moveElement();

let mm = new MagnetMouse({
    magnet: {
      element: '.magnet',
      distance: 2
    }
});
  

mm.init();