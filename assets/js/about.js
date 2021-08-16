$(document).ready(function () {
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
        slidesPerView: 3,
      },
    },
  });

  // Handling data-toggle manually
  $(".nav-item").click(function () {
    let elementId = $(this).children().attr("id");
    console.log(elementId);
    if (elementId === "approch-tab") {
      $("header").css({ background: "#141414" });
      $(".about .logo svg .ico path").css({ fill: "#fff" });
      $(".about .logo svg .text path").css({ fill: "#fff" });
      $(".menu svg line").css({ stroke: "#fff" });
      $("body").css({ background: "#141414" });
      $(".nav-link").addClass("text-light");
      $("footer").css({ background: "#fff" });
      $(".footer .title").css("color", "#000");
      $(".footer button").css({ color: "#000", borderColor: "#000" });
      $(".footer_nav .nav_list a, .footer_socials a").css("color", "#000");
      $(".footer_address, .footer_address a").css("color", "#000");
      $(".copyright-section, .copyright-section").addClass("borderBlack");
      $("footer .footer_links, footer .copyright, footer .footer_links a").css(
        "color",
        "#000"
      );
    } else {
      $("header").css({ background: "#fff" });
      $(".about .logo svg .ico path").css({ fill: "#fcd572" });
      $(".about .logo svg .text path").css({ fill: "#000" });
      $(".menu svg line").css({ stroke: "#000" });
      $("body").css({ background: "#fff" });
      $(".nav-link").removeClass("text-light");
      $("footer").css({ background: "#141414" });
      $(".footer .title").css("color", "#fff");
      $(".footer button").css({ color: "#fff", borderColor: "#fff" });
      $(".footer_nav .nav_list a, .footer_socials a").css("color", "#fff");
      $(".footer_address, .footer_address a").css("color", "#fff");
      $(".copyright-section, .copyright-section").removeClass("borderBlack");
      $("footer .footer_links, footer .copyright, footer .footer_links a").css(
        "color",
        "#fff"
      );
    }
  });

  let videoContainer = $(".approch-section .card-container");
  let video = $(".video-section .video");
  const getVideo = $(".video");

  $(videoContainer).on("mouseenter", function (e) {
    $(videoContainer).css("opacity", "0");
    console.log($(this));
    $("header").css("opacity", "0");
    $(".about-tabs").css("opacity", "0");
    $(".title").css("opacity", "0");

    const current = e.currentTarget;
    const dataId = $(current).data("id");

    if (e.currentTarget) {
      $(current).css("opacity", 1);
      console.log(e.currentTarget);

      if (dataId == 1) {
        $(".video-1").addClass("show");
      }

      if (dataId == 2) {
        $(".video-2").addClass("show");
      }

      if (dataId == 3) {
        $(".video-3").addClass("show");
      }
    }
  });

  videoContainer.on("mouseleave", function (e) {
    $(videoContainer).css("opacity", 1);
    $("header").css("opacity", 1);
    $(".about-tabs").css("opacity", 1);
    $(".title").css("opacity", 1);
    $(getVideo).removeClass("show");
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $(".about-tabs").addClass("about-tabs-sticky");
    } else {
      $(".about-tabs").removeClass("about-tabs-sticky");
    }
  });

  $(".arrow").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });

  // $(".people-scramble .hint .item").mouseenter(function (e) {
  //   let current = e.currentTarget;
  //   let currentID = $(current).data("target");
  //   let getName = $(".title .name");
  //   let getPost = $(".title .job-title");
  //   getName.text($(current).data("name"));
  //   getPost.text($(current).data("area"));
  //   let currentFig = $(".images").find(`[data-target=${currentID}]`);
  //   $(".images figure").each(function (index, value) {
  //     console.log(index, currentID);
  //     if (index == currentID) {
  //       currentFig.css({ position: "absolute", "z-index": 1 });
  //     }
  //   });
  // });

  // $(".people-scramble .hint .item").mouseleave(function (e) {
  //   let current = e.currentTarget;
  //   let currentID = $(current).data("target");
  //   let getName = $(".title .name");
  //   let getPost = $(".title .job-title");

  //   getName.text("the people");
  //   getPost.text("magic");

  //   let currentFig = $(".images").find(`[data-target=${currentID}]`);

  //   $(".images figure").each(function (index, value) {
  //     console.log(index, currentID);

  //     if (index == currentID) {
  //       currentFig.css({ position: "relative", "z-index": 0 });
  //     }
  //   });
  // });



  // Scrumble

  var $webdoor		= $('.webdoor');
  var $peopleList		= $('.people');
  var $peopleScramble	= $('.people-scramble');
  var $itemScramble 	= $peopleScramble.find('.item');

  var $name 			= document.querySelector('.name');
  var $area 			= document.querySelector('.area');

  var _fxName 		= null;
  var _fxArea 		= null;

  var _name 			= null;
  var _area 			= null;
  var _arrPos 		= [ 
                      [12.5 * 0, 12.5 * 1, 12.5 * 1, 12.5 * 0],
                      [12.5 * 1, 12.5 * 2, 12.5 * 2, 12.5 * 1],
                      [12.5 * 2, 12.5 * 3, 12.5 * 3, 12.5 * 2],
                      [12.5 * 3, 12.5 * 4, 12.5 * 4, 12.5 * 3],
                      [12.5 * 4, 12.5 * 5, 12.5 * 5, 12.5 * 4],
                      [12.5 * 5, 12.5 * 6, 12.5 * 6, 12.5 * 5],
                      [12.5 * 6, 12.5 * 7, 12.5 * 7, 12.5 * 6],
                      [12.5 * 7, 12.5 * 8, 12.5 * 8, 12.5 * 7]
            ]

  function scrambleInit(){

    if($(window).width() >= 860){
      _fxName 	= new TextScramble($name);
      _fxArea 	= new TextScramble($area);
      console.log('fxn: ', _fxName);
      console.log('fxarea: ', _fxArea);
      // MouseMove.init($peopleList.find('.item').find('.i-wrapper'));

      $itemScramble.on('mouseenter',mouseEnter);
      $itemScramble.on('mouseleave',mouseLeave);
      
      $peopleScramble.on('mouseleave',function(){
        _fxName.setText('the people');
        _fxArea.setText('magic');
      });
    }


  }

  function mouseEnter(){

    var _target = $(this).data('target');
      _name = $(this).data('name');
      console.log($(this));
      _area = $(this).data('area');
    console.log('_name: ', _name);
    console.log('itemScramble', $itemScramble);
    $itemScramble.each(function(i,e){
      
      var $figure = $peopleScramble.find('.wrapper').find('figure').eq(i);

      gsap.killTweensOf($figure);
      
      if(i == _target){
        gsap.to($figure, 1, { ease: Power3.easeOut, "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"});
      }else{
        
        if((i) < _target){
          gsap.to($figure, 1, { ease: Power3.easeOut, "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"});
        }else{
          gsap.to($figure, 1, { ease: Power3.easeOut, "clip-path": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"});
        }
      }
    });

     _fxName.setText(_name);
     _fxArea.setText(_area);

//    let getName = $(".title .name");
//    let getPost = $(".title .job-title");
//    getName.text($(this).data("name"));
//    getPost.text($(this).data("area"));
    

  }

  function mouseLeave(){
    
    var $this 	= $(this);
    console.log($this.data('area'))

    $itemScramble.each(function(i,e){
      var _target = $(this).data('target');
      var $figure = $this.closest('.wrapper').find('figure').eq(_target);

      gsap.killTweensOf($figure);
      gsap.to($figure, 3, { ease: Elastic.easeOut, "clip-path": "polygon("+_arrPos[i][0]+"% 0%, "+_arrPos[i][1]+"% 0%, "+_arrPos[i][2]+"% 100%, "+_arrPos[i][3]+"% 100%)"});
      
    });

    let getName = $(".title .name");
    let getPost = $(".title .job-title");
    getName.text('the people');
    getPost.text('magic');
    
  }

  class TextScramble {

    constructor(el) {
      this.el 		= el
      this.chars 	= 'abcdefghijlkmnopqrstuvxz'
      this.update 	= this.update.bind(this)
    }

    setText(newText) {
      const oldText = $(".title .name")
      console.log('oldText: ', oldText)
      const length 	= Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update(oldText)
      return promise
    }
    update(oldText) {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
        char = this.randomChar()
        this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
      }
      console.log('output on update', output)
      console.log('this on update: ', this);
      oldText.innerHTML = output
      if (complete === this.queue.length) {
      this.resolve()
      } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  scrambleInit();

  // Scramble
});

// Mouse move 

var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);



// ----------------------------------------- \\\
// ------------------ INIT ----------------- \\\
// ----------------------------------------- \\\
function initMouseMove(_element){
  console.log(12)
  var $el = _element;

	if(!isMobile){
		$el.on('mouseenter',function(){
			$el.on('mousemove',function(e){
				mouseMove(this,e);
			});
		});

		$el.on('mouseleave',function(){
			mouseOut(this);
		});
	}
}

function mouseMove(_this,_e){

	var $this = _this;
    var x = _e.pageX - $($this).offset().left,
		y = _e.pageY - $($this).offset().top;

	var px = x/$($this).width(),
		py = y/$($this).height();
	
	var xx = -20 + (30*px),
		yy = 20 - (30*py);

	gsap.killTweensOf($($this));
	gsap.to($($this), 1, {rotationY: xx, rotationX: yy, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
}

function mouseOut(_this){

	var $this = _this;

    $($this).off('mousemove');

	gsap.killTweensOf($($this));
	gsap.to($($this), .5, {rotationY: 0, rotationX: 0, rotationZ: 0, transformPerspective: 1000, ease: Quad.easeOut});
}

// initMouseMove();