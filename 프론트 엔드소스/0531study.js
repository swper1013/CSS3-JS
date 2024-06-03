$(document).ready(function () {
  $(".menu > ul > li  ").on("mouseover", function () {
    $(".menu > ul > li > ul").css({ display: "block" });
  });
  $(".menu > ul > li  ").on("mouseout", function () {
    $(".menu > ul > li > ul").css({ display: "none" });
  });
  $(".tab1").on("click", function () {
    $(".tab1").css({ color: "black" });
    $(".tab1-1").css({ display: "block" });
    $(".tab2").css({ color: "gray" });
    $(".tab2-2").css({ display: "none" });
  });
  $(".tab2").on("click", function () {
    $(".tab2").css({ color: "black" });
    $(".tab2-2").css({ display: "block" });
    $(".tab1").css({ color: "gray" });
    $(".tab1-1").css({ display: "none" });
  });
  var Index = 1;
  setInterval(function () {
    if (Index === 1) {
      $(".img1").fadeIn(1500).css({ "z-index": "-8" });
      $(".img2").fadeOut(1500).css({ "z-index": "9" });
      Index = 2;
    } else {
      $(".img2").fadeIn(1500).css({ "z-index": "-9" });
      $(".img1").fadeOut(1500).css({ "z-index": "-8" });
      Index = 1;
    }
  }, 3000);
});
