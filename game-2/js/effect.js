
$(document).ready(function(){
  $(".card-1,.card-2,.card-3,.card-4,.card-5,.card-6,.card-7,.card-8,.card-9,.card-10").draggable({
    containment:'.main-container',
    revert : true,
    stack:'div',
  });
  $(".accept-1").droppable({
    accept:'.card-6',
    drop:function(event,ui){
      $(".accept-1").append(ui.draggable);
      $(".accept-1").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-6").css({'display':'none'});
      $(".accept-1").html("1");
    }
  });

  $(".accept-2").droppable({
    accept:'.card-8',
    drop:function(event,ui){
      $(".accept-2").append(ui.draggable);
      $(".accept-2").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-8").css({'display':'none'});
      $(".accept-2").html("2");
    }
  });

  $(".accept-3").droppable({
    accept:'.card-5',
    drop:function(event,ui){
      $(".accept-3").append(ui.draggable);
      $(".accept-3").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-5").css({'display':'none'});
      $(".accept-3").html("3");
    }
  });

  $(".accept-4").droppable({
    accept:'.card-1',
    drop:function(event,ui){
      $(".accept-4").append(ui.draggable);
      $(".accept-4").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-1").css({'display':'none'});
      $(".accept-4").html("4");
    }
  });

    $(".accept-5").droppable({
    accept:'.card-4',
    drop:function(event,ui){
      $(".accept-5").append(ui.draggable);
      $(".accept-5").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-4").css({'display':'none'});
      $(".accept-5").html("5");
    }
  });

  $(".accept-6").droppable({
    accept:'.card-10',
    drop:function(event,ui){
      $(".accept-6").append(ui.draggable);
      $(".accept-6").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-10").css({'display':'none'});
      $(".accept-6").html("6");
    }
  });

  $(".accept-7").droppable({
    accept:'.card-3',
    drop:function(event,ui){
      $(".accept-7").append(ui.draggable);
      $(".accept-7").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-3").css({'display':'none'});
      $(".accept-7").html("7");
    }
  });

  $(".accept-8").droppable({
    accept:'.card-9',
    drop:function(event,ui){
      $(".accept-8").append(ui.draggable);
      $(".accept-8").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-9").css({'display':'none'});
      $(".accept-8").html("8");
    }
  });

  $(".accept-9").droppable({
    accept:'.card-7',
    drop:function(event,ui){
      $(".accept-9").append(ui.draggable);
      $(".accept-9").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-7").css({'display':'none'});
      $(".accept-9").html("9");
    }
  });

  $(".accept-10").droppable({
    accept:'.card-2',
    drop:function(event,ui){
      $(".accept-10").append(ui.draggable);
      $(".accept-10").css({
        'background':'green',
        'color':'white',
        'font-size':'50px',
        'padding-top':'30px',
        'border':'2px solid #333333',
      });
      $(".card-2").css({'display':'none'});
      $(".accept-10").html("10");
      var a = $(".accept-1").html();
      var b = $(".accept-2").html();
      var c = $(".accept-3").html();
      var d = $(".accept-4").html();
      var e = $(".accept-5").html();
      var f = $(".accept-6").html();
      var g = $(".accept-7").html();
      var h = $(".accept-8").html();
      var i = $(".accept-9").html();
      var j = $(".accept-10").html();
      if (a == 1 && b == 2 && c == 3 && d == 4 && e == 5 && f == 6 && g == 7 && h == 8 && i == 9 && j == 10) 
      {
        $(".main-container div").slideDown(500);
        $(".po-pop button").click(function(){
          window.location = location.href;
        });
        var store = $(".sec").html();
        $(".po-pop p").html("You did it in "+store+"s");
        $(".po-pop p").css({'color':'green'});
        $(".sec").css({'display':'none'});
        $(".stop").html(store);
      }
    }
  });

});
//timer coding
$(document).ready(function(){
  var sec = 39;
  function demo(){
    if (sec<10) 
    {
      $(".sec").html("0"+sec--);
    }
    else{
      $(".sec").html(sec--);
    }
    if (sec === -1) 
    {
      clearInterval(wap);
      $(".main-container div").slideDown(500);
      $(".po-pop p").html("Time Out !");
      $(".po-pop p").css({'color':'red'});
        $(".po-pop button").click(function(){
          window.location = location.href;
        });
    }
  }
  var wap = setInterval(demo,1000);
});




