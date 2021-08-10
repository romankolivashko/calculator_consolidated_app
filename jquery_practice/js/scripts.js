// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("this is a heading.");
//   });
//   alert("This is a heading.");
//   alert("Are you sure you want to leave?");
//   alert("Please don't go!");
// });

// $("p").click(function() {
//   alert("This is a paragraph.");
// });

// $("img").click(function() {
//   alert("This is an image.");
// });

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});