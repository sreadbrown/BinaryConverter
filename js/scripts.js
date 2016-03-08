var bottleCount = function(n) {
  var text = "";
  for (i = n ; i > 1; i--) {
    text += i + " bottles of beer on the wall " + i + " bottles of beer...take one down, pass it around, " + [i - 1] + " bottles of beer on the wall. " + "<br>";
    }
  return text;
}

$(document).ready(function() {
  $("form#bottles").submit(function(event) {
    var n = $("input#beers").val();

    var result = bottleCount(n)



    $(".n").html(result);


    $("#result").show();
    event.preventDefault();
  });
});
