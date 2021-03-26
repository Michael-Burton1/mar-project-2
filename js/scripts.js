$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const dob = $("#born").val();
    const quest5Ans=parseInt($("#qFour").val());
    console.log("dob: " + dob);
    console.log(quest5Ans);

    if (quest5Ans===1){
      $(".jsresult").show();
    }else if (quest5Ans===2){
      $(".csharpresult").show();
    }else if (quest5Ans===3){
      $(".rubyresult").show();
    }else {
      $(".confusedresult").show();
    }
  });
});
