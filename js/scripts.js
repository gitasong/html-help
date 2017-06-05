$(document).ready(function() {
  var queryBlanks = ["h1", "p", "img"];
  var alertBlanks = ["header", "paragraph", "image"];


  queryBlanks.forEach(function(queryBlank) {
    $(queryBlank).click(function() {
      // console.log(queryBlank);
      alert("This is a " + queryBlanks[queryBlanks.indexOf(queryBlank)]);
    });
  });

  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });
});
