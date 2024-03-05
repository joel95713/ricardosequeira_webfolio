var parallaxContainer = document.querySelector(".parallax-container");
var parallaxBg = document.querySelector(".parallax-bg");
var parallaxVideo = document.querySelector(".parallax-video");

window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset;
  parallaxBg.style.top = -(scrolled * 0.3) + "px";
  parallaxVideo.style.top = -(scrolled * 0.6) + "px";
});
