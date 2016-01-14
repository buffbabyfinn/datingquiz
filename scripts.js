$(function () {
  $("#startbtn").click(function(){
    $(".test-contain").show();
    $(".answer").hide();
  });
});
$(function(event){
  $("#submit").click(function(){
    var gender = $("select#gender").val();
    var nature = $("select#nature").val();
    var date = $("select#date").val();

    if (gender === "male" && nature === "forest"  && date === "candles") {
      $('.answer2').show();
    } else if (gender === "male" && nature === "forest" && date === "nightout") {
      $('.answer4').show();
    } else if (gender === "female" && nature === "forest" && date === "candles") {
      $('.answer1').show();
    } else if (gender === "female" && nature === "forest" && date === "nightout") {
      $('.answer3').show();
    } else if (gender === "male" && nature === "oceans" && date === "candles") {
        $('.answer5').show();
      } else if (gender === "female" && nature === "oceans" && date === "nightout") {
        $('.answer8').show();
      } else if (gender === "female" && nature === "oceans" && date === "candles") {
        $('.answer6').show();
      } else {
        $('.answer7').show();
      }

    $(".test-contain").hide();
    $(".answers-contain").show();
  });
});
