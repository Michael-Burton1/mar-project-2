$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const dob = $("#born").val();
    const quest5Ans=parseInt($("#qFour").val());
   
    if (quest5Ans===1){
      $(".main").hide();
      $(".mainimg").hide();
      $(".jsresult").show();
    }else if (quest5Ans===2){
      $(".main").hide();
      $(".mainimg").hide();
      $(".csharpresult").show();
    }else if (quest5Ans===3){
      $(".main").hide();
      $(".mainimg").hide();
      $(".rubyresult").show();
    }else {
      $(".main").hide();
      $(".mainimg").hide();
      $(".confusedresult").show();
    }
  });

  $("#again1").click(function(){
    $(".jsresult").hide();
    $(".mainimg").show();
    $(".main").show();
    document.getElementById("formOne").reset();
  });
  $("#again2").click(function(){
    $(".csharpresult").hide();
    $(".mainimg").show();
    $(".main").show();
    document.getElementById("formOne").reset();
  });
  $("#again3").click(function(){
    $(".rubyresult").hide();
    $(".mainimg").show();
    $(".main").show();
    document.getElementById("formOne").reset();
  });
  $("#again4").click(function(){
    $(".confusedresult").hide();
    $(".mainimg").show();
    $(".main").show();
    document.getElementById("formOne").reset();
  });
});

