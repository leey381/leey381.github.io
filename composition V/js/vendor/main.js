$("body").css("background-color","black")

                    
                    
for (var dots = 0; dots < 100; dots++) {
    $(".wrapper").append("<div class='circle'></div>")
}
 $(".wrapper").append("<div class='circle2'></div>")



var counter = 1;


$(".circle").each(function() {
    console.log(counter);
    $(this).html(counter);
    $(this).css("opacity", (counter/50));
    $(this).css("height",(50+counter));
    $(this).css("width",(50+counter));
    $(this).css("font-size",(counter/50));
    $(this).css("transform", "rotate("+ (counter/50) *360 + "deg)")
    var winWidth = $(window).width();
    var winHeight = $(window).height();
      var newTop= Math.floor(Math.random()*winHeight);
      var newLeft= Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
   counter++;
   
   if (counter > 50) {
       $(this).addClass("bigCircle");
   }
   
   
});

$(".bigCircle").css("background-color", "blue");

$(".bigCircle").mouseenter(function() {
    $(this).css("background-color","white");
})

var circleText = $(".circle");




$(".circle2").mouseenter(function () {
                    $(".circle").css ("background-color", "red");
// if (circlelength > 150){$(".circle").css ("background-color", "darkpink");}               

console.log("mousemove")                  
});
                    

$(".circle2").mouseleave(function() {
                $(".circle").css("background-color", "blue")
                $(".circle").css("opacity","30%")
                $(".circle2").css("background-color", "green")
               
  // run this code when the mouse leaves the target

});

$(".circle2").click(function () {
             $(".circle").css ("background-color", "orange")
           
             $(".circle2").css ("background-color", "orange");


             if(circleText.innerText == "88"){
                 (this).css("background-color", "green")
             }
});


     



    
            

$(window).resize(function() { 
console.log("hello world");
})
