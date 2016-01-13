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

    if (gender === "male" && nature === "forest") {
      $('.answer2').show();
    } else if (gender === "male" && nature === "oceans") {
      $('.answer4').show();
    } else if (gender === "female" && nature === "forest") {
      $('.answer1').show();
    } else {
      $('.answer3').show();
    }
    
    $(".test-contain").hide();
    $(".answers-contain").show();
  });
});
