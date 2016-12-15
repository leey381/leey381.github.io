console.log("Weather");

for (var i = 0; i < 50; i++) {
    $(".wrapper").append("<div class='go'></div>");
    // $(".wrapper").click(function() {
    //     $(".wrapper").append("<img class='pic' src='img/gloomy.jpg'>");
    // });
    
  
}

var opacity = 0;

$(".go").each(function() {
  opacity += .03
   $(this).css("opacity", opacity);
   
   if (opacity > 0.3){
       $(this).addClass("bigGo");
   }
});

$(".bigGo").css("background-color","yellow")

$(".bigCircle").mouseenter(function() {
    $(this).css("background-color","#DB7093");
   
})



// $(".circle").click(function() {
//     var newCat = cats[Math.floor(Math.random()*cats.length)];
//     $("body").append('<img src="' + newCat + '" class="cat">');
// });
var weather = ["img/one.jpg", "img/two.jpg", "img/three.jpg"];

$(".images").each( function() {

$(".go").click(function(i) {
    var newWeather = weather[Math.floor(Math.random()*weather.length)];
    $(".images").append('<img src="' + newWeather + '" class="cat">');
});
});






weather[Math.floor(Math.random()*weather.length)];


