$("body").css("background-color","black")

                    
                    
for (var dots = 0; dots < 100; dots++) {
    $(".wrapper").append("<div class='circle'></div>")
}
 $(".wrapper").append("<div class='circle2'></div>")



var counter = 1;


$(".circle").each(function() {
    console.log(counter);
    $(this).html(counter);
    $(this).css("opacity", (counter/100));
    $(this).css("height",(50+counter));
    $(this).css("width",(50+counter));
    $(this).css("font-size",(counter/50));
    $(this).css("transform", "rotate("+ (counter/100) *360 + "deg)")
    var winWidth = $(window).width();
    var winHeight = $(window).height();
      var newTop= Math.floor(Math.random()*winHeight);
      var newLeft= Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
   counter++;
   
   
});

var circleText = $(".circle");




$(".circle2").mouseenter(function () {
                    $(".circle").css ("background-color", "red");
                   
// if (circlelength > 150){$(".circle").css ("background-color", "darkpink");}               

console.log("mousemove")                  
});

$(".circle2").click(function () {
             $(".circle").css ("background-color", "orange");
             $("circle2").css ("background-color", "blue");
             if(circleText.innerText == "88"){
                 (this).css("background-color", "green")
             }
});

$(".circle3").show()
    
            

$(window).resize(function() { 
console.log("hello world");
})
