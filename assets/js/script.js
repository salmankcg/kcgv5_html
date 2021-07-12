
$(document).ready(function(){
new WOW().init();

const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelectorAll(element);
    console.log(typeof(node))
    if(node) {
      node.forEach(currentItem => {
        currentItem.classList.add(`${prefix}animated`, animationName)

        function handleAnimationEnd(event) {
          event.stopPropagation();
          currentItem.classList.remove(`${prefix}animated`, animationName);
          resolve('Animation ended');
        }
    
        currentItem.addEventListener('animationend', handleAnimationEnd, {once: true});
      })
    }
});

function startAnimation(element) {
  animateCSS(element, 'fadeInUp').then((message) => {
    console.log('m', message)
  });
}



const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    // direction: getDirection(),
    direction: 'vertical',
    mousewheel: true,
    effect: "fade",
    speed: 500,
    autoHeight: false,
    // grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
      },
      slideChange: getCurrentSlide,
      slideChangeTransitionStart: function () {
        console.log('slide changed')
        startAnimation(`.animate_element`)

        let index_currentSlide = swiper.realIndex,
        currentSlide = swiper.slides[index_currentSlide]

        if(index_currentSlide == 1) {
          startAnimation(`.animate_element`)
        }
      },
      slideChangeTransitionEnd: function () {
        startAnimation(`.animate_element`)

      },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    
    coverflowEffect: {
        rotate: 100,
        slideShadows: true,
    },
});


function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth >= 767 ? "vertical" : "horizontal";

    return direction;
}

function getCurrentSlide() {
    let index_currentSlide = swiper.realIndex,
    currentSlide = swiper.slides[index_currentSlide]
    console.log(index_currentSlide);

    if(index_currentSlide == 1) {
      $('.animate_element').removeClass('animate__animated animate__fadeInUp')
    }

    if(index_currentSlide == 4) {
        console.log('logged')
        $('.ico path').css('fill', '#fcd572')
        $('.text path').css('fill', '#000')
        $('.swiper-pagination-bullet').css('background', '#000')
        $('.swiper-pagination-bullet-active').css('borderColor', '#000')
        $('.menu a svg line').css('stroke', '#000')
        $('.swiper-pagination-bullet-active').addClass('changed-slider')
    }

    else {
        $('.ico path').css('fill', '#fff')
        $('.text path').css('fill', '#fff')
        $('.swiper-pagination-bullet').css('background', '#fff')
        $('.swiper-pagination-bullet-active').css('borderColor', '#000')
        $('.menu a svg line').css('stroke', '#fff')
        $('.swiper-pagination-bullet-active').removeClass('changed-slider')
    }
    
}

const sliderContainer = document.querySelector('.slider-section')
console.log(swiper.activeIndex == 3 ? true : false)

$('.arrow').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
});
})