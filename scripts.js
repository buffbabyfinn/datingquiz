$(function () {
  $("#startbtn").click(function(){
    $(".test-contain").show();
  });
});
$(function(event){
  $("#submit").click(function(){
    var gender = $("select#gender").val();
    var nature = $("select#nature").val();


    if (gender === "male" && nature === "forest") {
      $(".answer2").show();
      $(".answer1").hide();
      $(".answer3").hide();
      $(".answer4").hide();
    } else if (gender === "male" && nature === "oceans") {
      $(".answer4").show();
      $(".answer1").hide();
      $(".answer3").hide();
      $(".answer2").hide();
    }
     else if (gender === "female" && nature === "forest") {
      $(".answer1").show();
      $(".answer2").hide();
      $(".answer3").hide();
      $(".answer4").hide();
    } else {
      $(".answer3").show();
      $(".answer1").hide();
      $(".answer2").hide();
      $(".answer4").hide();
    }


    $(".test-contain").hide();
    $(".answers-contain").show();
  });
});
