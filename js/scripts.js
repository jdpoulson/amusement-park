$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height > 35) {
    $('#rides').show();
  } else {
    $('#under-35').show();
  }
});
