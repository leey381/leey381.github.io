console.log("Weather");

$("body").css("background-color","blue");


$(".window").each(function() {
    console.log(counter);
    counter++;
    $(this).html(Math.random());
})

$(".window").click(function() {
    console.log("you clicked it...");
    $(this).css("background-color","white");
     $(this).css("border-radius","0%");
    $(this).html("Umbrella");
    
    
});


$(".window").mouseleave(function() {
    if (mouseleave == true) {
         $("#sunny").show();
    }
  // run this code when the mouse leaves the target

});
