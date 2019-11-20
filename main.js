
function timeRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
};



$(document).ready(function() {

  
  // let refresh = setInterval(timerUpdate, 1000)


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
  "NCMS.B 017",
  "SCES.B 017",
  "NCMS.A 016",
  "HRES.C 015",
  "SCES.A 013",
  "NPMS.B 011",
  "HRES.A 010",
  "NCMS.C 009",
  "HRES.B 006",



  //EDR

  "NPMS.A 008",
  "DJMS.A 006",
  "HRMS.A 004",
  "HRMS.B 004",
  "CLK8.A  004",
  "DJMS.B  004",
  "CLK8.C  003",
  "CLK8.B 001",
  "XXXX 000" 

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


// setInterval(function () {
//   var d = new Date(); //get current time
//   var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
//   var fiveMin = 60 * 5; //five minutes is 300 seconds!
//   var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
//   var result = "Results updating in..... <hr> Minutes :" + parseInt(timeleft / 60) + '<br> Seconds: ' + timeleft % 60; //formart seconds back into mm:ss 
//   document.getElementById('timer').innerHTML = result;

// }, 500)

// seconds = 300;



// // var duration = moment.duration(seconds, 'seconds');
// // var formatted = duration.format("hh:mm:ss");
// console.log(formatted); 

// function timerUpdate() {

//   seconds--

//  time = moment(seconds).format('MM:SS');   
//   console.log(time);
 
//   $("#timer").text(` ${seconds} Seconds`);
//   console.log("seconds")

//   if (seconds === 1) {
//       $("#timer").text(`${seconds} Second`)
//   }

//   if (seconds === 0) {
//       seconds = 300
             
//   }};

