var latter;
//select latter coding......
$(document).ready(function(){
  $(".main-div div").click(function(){
    $(this).css({'background':'green'});
    latter = $(this).html();
    document.getElementById("store-word").innerHTML += latter;
  });
  //add words to li
  //frow paragraph
  $(".add").click(function(){
        var store = document.getElementById("store-word").innerHTML;
        if (store.length > 1) 
        {
            var li = document.createElement("LI");
            li.append(document.createTextNode(store));
            $("#ul").append(li);
            document.getElementById("store-word").innerHTML = "";
             $(".main-div div").css({'background':'#333333'});
        }
  });
  //clear word from paragrapg
  $(".clear").click(function(){
        document.getElementById("store-word").innerHTML = "";
        $(".main-div div").css({'background':'#333333'});
  });
});

//timer  coding
$(document).ready(function(){
  var sec = 59;
  function incriment(){
    if (sec<10) 
    {
      $(".sec").html(" 0"+sec--);
    }
    else{
      $(".sec").html(" "+sec--);
    }
    if (sec === -1) 
    {
      clearInterval(wap);
      $(".min").html("01 ");
    }

  }
  var wap = setInterval(incriment,1000);
});
