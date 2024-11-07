$(document).ready(function () {
  // Toggle menu visibility when clicking the menu icon
  $(".menu").click(function (event) {
    event.stopPropagation(); // Prevent the click from propagating to the document
    $("#main-menu").toggle("slide", { direction: "left" }, 500);
  });

  // Hide menu when clicking outside of it
  $(document).click(function (event) {
    if (
      !$(event.target).closest("#main-menu").length &&
      !$(event.target).closest(".menu").length
    ) {
      $("#main-menu").hide("slide", { direction: "left" }, 500);
    }
  });
});
