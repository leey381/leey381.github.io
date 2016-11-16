var numOfClicks = 0;

$(".button").click(function() {
    // do stuff....
    numOfClicks = numOfClicks++ ;
    console. log(numOfClicks);
    
    $("mark").html(numOfClicks);
});



