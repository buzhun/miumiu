function bodyScroll(e) {
  e.preventDefault();
}

function disableSlide(e) {
  window.addEventListener("touchmove", bodyScroll, { passive: false });
}

function allowSlide() {
  window.removeEventListener("touchmove", bodyScroll);
}

function getRem() {
  var htmlwidth =
    document.documentElement.clientWidth || document.body.clientWidth; //浏览器兼容
  if (htmlwidth < 320) htmlwidth = 320;
  return htmlwidth / 20;
}

function getOrientation() {
  var orientation = window.orientation;
  switch (orientation) {
    case 90:
    case -90:
      orientation = "landscape"; //这里是横屏
      break;
    default:
      orientation = "portrait"; //这里是竖屏
      break;
  }
  return orientation;
}

$(document).ready(function () {
  var rem = getRem();
  // var minFontSize = rem * 0.3;
  var $pre_button = $(".pre_button");
  var $next_button = $(".next_button");
  var $playIcon = $(".playIcon");
  var $iosButton = $(".iosButton img");
  var $androidButton = $(".androidButton img");
  // var $bottemText = $(".page3 .logo_text_box .textBox .content");
  // console.log(minFontSize, $bottemText.css("font-size"));
  // if (minFontSize <= 11 && $bottemText.css("font-size") === "12px") {
  //   $bottemText.css({
  //     "width": "21rem",
  //     "margin-left": "-5.5rem",
  //     "margin-top": "-1.15rem",
  //     "transform": "scale(" + minFontSize / 12 + ")",
  //   })
  // }
  var mySwiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    loop: true,
    slidesPerView: "auto",
    loopedSlides: 5,
    grabCursor: true,
    centeredSlides: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    coverflow: {
      rotate: 0,
      stretch: 2.54 * rem,
      depth: 60,
      modifier: 2,
      slideShadows: false,
    },
  });
  //
  $iosButton.on("click", function () {
    $(this).addClass("animated bounceIn");
    window.location.href = "https://restaurant.dhgames.cn/download.html";
  });
  $androidButton.on("click", function () {
    $(this).addClass("animated bounceIn");
    window.location.href = "https://restaurant.dhgames.cn/download.html";
  });
  $pre_button.on("touchstart", function () {
    mySwiper.slidePrev();
  });
  $next_button.on("touchstart", function () {
    mySwiper.slideNext();
  });
  $playIcon.on("click", function () {
    window.location.href = "https://dwct-res.dhgames.cn/video.mp4";
  });
});
