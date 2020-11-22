

$(document).ready(function(){
  $(".object").click(function(){    
    setTimeout(function() { 
    $(".env-des").fadeOut();   
    }, 2000);
    setTimeout(function() { 
    $("#snowflakes").fadeIn();
    }, 3000);
    setTimeout(function() { 
    $(".card-des").fadeIn();      
    }, 5000);
  });
});






//; setTimeout(myFunction, 2000); was in html before 