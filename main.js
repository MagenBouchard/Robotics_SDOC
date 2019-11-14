
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


  // IQ
  "MABA 560",
  "MAAB 547",
  "RASHIE 458",
  "ESMA 457",
  "HBLS 320",
  "BGBG 319",
  "GEGE 308",



  //EDR

  "GDGD 587",
  "JYTA 578",
  "GFGF 560",
  "DEDE 420"  

   ];


   


   var place = [
     "1st Place IQ",
     "2nd Place IQ",
     "3rd Place IQ",
     "4th Place IQ",
     "5th Place IQ",
     "6th Place IQ",
     "7th Place IQ",
     "8th Place IQ",
     "9th Place IQ",

     "1st Place EDR",
     "2nd Place EDR",
     "3rd Place EDR",
     "4th Place EDR",
     "5th Place EDR",
     "6th Place EDR",
     "7th Place EDR",
     "8th Place EDR",
     "9th Place EDR"

   ]





  for (var i = 0, x =0 ; i < schoolList.length, x < place.length; i++, x++) {

    console.log(place[x], schoolList[i]);
    

    $(
      '<div class="item"><img src="red.jpg"> <div class ="carousel-caption">' + place[x] + "<br><hr><br>" +
        schoolList[i] +
        "<br><hr><br></div> </div>"
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
