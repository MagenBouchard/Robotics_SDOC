
function timeRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
};



$(document).ready(function() {
  // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function() {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function() {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function() {
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function() {
    $("#myCarousel").carousel(3);
  });

  // Enable Carousel Controls
  $(".left").click(function() {
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function() {
    $("#myCarousel").carousel("next");
  });
});



$(document).ready(function() {

  
var schoolList = [

  "RASHI",
  "MAB 458",
  "ESMA 457",
  "HBLS 320" 

   ];


   var place = [
     "1st Place IQ",
     "2nd Place",
     "3rd Place",
     "4th Place,"
   ]





  for (var i = 0, x =0 ; i < schoolList.length, x < place.length; i++, x++) {

    console.log(place[x], schoolList[i]);
    $(
      '<div class="item"><img src="red.jpg"> <div class ="carousel-caption">' + place[x] + "<br>" +
        schoolList[i] +
        "</div> </div>"
    ).appendTo(".carousel-inner");
    $(
      '<li data-target="#myCarousel1" "data-slide-to=" ' + i + "></li>"
    ).appendTo(".carousel-indicators");
  }

  $(".item")
    .first()
    .addClass("active");
  $(".carousel-indicator> li")
    .first()
    .addClass("active");
  $("#myCarousel1").carousel();

  console.log(i);
});
