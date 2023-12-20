$(".btns>li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  //필터기능
  let a = $(this).attr("data-filter");
  $(".content").isotope({ filter: a });
});

/*$(".content").isotope({
  // options
  itemSelector: ".conbox",
  layoutMode: "masonry",
});*/

const grid = new Isotope(".content", {
  itemSelector: ".conbox",
  columnWidth: ".conbox",
  transition: "0.5s",
});

setTimeout(function () {
  $(".contents").Isotope("layout");
}, 100);

$(".fancybox").fancybox();
