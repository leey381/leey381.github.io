console.log("Weather");

for (var i = 0; i < 50; i++) {
    $(".wrapper").append("<div class='go'></div>");
    // $(".wrapper").click(function() {
    //     $(".wrapper").append("<img class='pic' src='img/gloomy.jpg'>");
    // });
    
  
}

var opacity = 0;

$(".go").each(function() {
  opacity += .01
   $(this).css("opacity", opacity);
});


// $(".circle").click(function() {
//     var newCat = cats[Math.floor(Math.random()*cats.length)];
//     $("body").append('<img src="' + newCat + '" class="cat">');
// });
var weather = ["img/gloomy.jpg", "img/sunny.jpg", "img/rainbow.jpeg"];

$(".images").each( function() {

$(".go").click(function(i) {
    var newWeather = weather[Math.floor(Math.random()*weather.length)];
    $(".images").append('<img src="' + newWeather + '" class="cat">');
});
});

weather[Math.floor(Math.random()*weather.length)];


