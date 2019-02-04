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
