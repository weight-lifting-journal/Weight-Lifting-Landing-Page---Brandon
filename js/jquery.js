/*Scroll on Nav*/
$('a[href*="#"]').on("click", function(e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    1500,
    "linear"
  );
});

/*Waypoints for scrolling*/
$(".js-wp-1").waypoint(
  function(direction) {
    $(".js-wp-1").addClass("animated fadeIn");
  },
  {
    offset: "50%;"
  }
);
$(".js-wp-2").waypoint(
  function(direction) {
    $(".js-wp-2").addClass("animated fadeInUp");
  },
  {
    offset: "50%;"
  }
);
$(".js-wp-3").waypoint(
  function(direction) {
    $(".js-wp-3").addClass("animated slideInLeft");
  },
  {
    offset: "50%;"
  }
);
$(".js-wp-4").waypoint(
  function(direction) {
    $(".js-wp-4").addClass("animated bounceInUp");
  },
  {
    offset: "50%;"
  }
);
