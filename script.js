//ensuring cors error does not occur and keys 
var link = 'https://cors-anywhere.herokuapp.com/';
function code(){
  var x = document.getElementById("myText").value; 
  return x;
}
var bscode = (code()).toString();
var fullLink = link + "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=" + bscode;
var settings = {
    "url": fullLink,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog=="
    },
  };
  //extracting data from API and printing
  $.ajax(settings).done(function (response) {
    let result = response.Services;  
    for (let i=0; i<result.length; i++) {
        if (result[i].ServiceNo == "334") {
          console.log(result[i])
          document.getElementById('serviceno').textContent = result[i].ServiceNo;
          var time = (result[i].NextBus.EstimatedArrival).substring(11,19);
          //document.getElementById('time').textContent = time;
           var timeNow = new Date();
           var hoursNow = timeNow.getHours();
           var minutesNnow = timeNow.getMinutes();
           var secondsNow = timeNow.getSeconds();
           var current = hoursNow + ":" + minutesNnow + ":" + secondsNow;
          
          var time_start = new Date();
          var time_end = new Date();
          var value_start = current.split(':');
          var value_end = time.split(':');

          time_start.setHours(value_start[0], value_start[1], value_start[2], 0)
          time_end.setHours(value_end[0], value_end[1], value_end[2], 0)

          var diff = (time_end - time_start)/60000

          if (diff <= 2){
            
            document.getElementById('time').textContent = "Arriving Soon...";
            $(".display").css("border", "8px solid green");
            $("h1").css("background-color", "green");

          }

          else if (diff > 2 && diff <= 8){
            
            document.getElementById('time').textContent = Math.round(diff) + " " + "Minutes";
            $(".display").css("border", "8px solid yellow");

          }

          else if (diff > 8){
            
            document.getElementById('time').textContent = Math.round(diff) + " " + "Minutes";
            $(".display").css("border", "8px solid red");
            $("h1").css("background-color", "red");
          }
          else {
            document.getElementById('time').textContent = "Time is not available at the moment";
          }
          

          

          
        }
    }

    
  });
