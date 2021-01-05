//ensuring cors error does not occur and keys 
var link = 'https://cors-anywhere.herokuapp.com/';

//retrieving values from form 

document.addEventListener('submit', function(event){
  event.preventDefault();
  var nameValue = document.getElementById("uniqueID").value;
  var busNo = document.getElementById("bus").value;
  

  var settings = {
    "url": link + `http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${nameValue}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
    "AccountKey": "qmXLs/m2RZG1kdj0DepVog=="
    },
  };

  // function to calculate time difference
  function getdiff(x){
    var time = x.substring(11,19);
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

    

    
    return diff;

    


  }


  //extracting data from API and printing
  $.ajax(settings).done(function (response) {
    let result = response.Services;  
    console.log(result);
    for (let i=0; i<result.length; i++) {
        if (result[i].ServiceNo == busNo) {
           // print bus number
           document.getElementById('serviceno').textContent = result[i].ServiceNo;
           document.getElementById('serviceno1').textContent = result[i].ServiceNo;
           document.getElementById('serviceno2').textContent = result[i].ServiceNo;
          
          
    
           let diff = getdiff(result[i].NextBus.EstimatedArrival);
           let diff2 = getdiff(result[i].NextBus2.EstimatedArrival);
           let diff3 = getdiff(result[i].NextBus3.EstimatedArrival);

          

          if (diff <= 2){
            //if bus is arriving in 2 mins
            document.getElementById('time').textContent = "Arriving Soon...";
            $(".display").css("border", "8px solid green");
            $("h1").css("background-color", "green");
            var phrases = ["Keep a lookout for the bus!", "Get your EZ-Link card ready!", "STOP LOOKING AT YOUR PHONE! BUS IS COMING!", "Time to board the bus!"]
            document.getElementById('todo').textContent = phrases[Math.floor(Math.random() *  phrases.length)]
            document.getElementById('random').textContent = ""

          }

          else if (diff > 2 && diff <= 8){
            //if bus is arriving between 3 to 8 minutes
            document.getElementById('time').textContent = Math.round(diff) + " " + "Minutes";
            $("h1").css("background-color", "yellow");
            $(".display").css("border", "8px solid yellow");
            var music = ["Someone You Loved By Lewis Capaldi", "Afterglow By Ed Sheeran", "Monster By Shawn Mendes (Featuring Justin Bieber)", "Dynamite By BTS", "Don't Start Now By Dua Lipa", "Before You Go By Lewis Capaldi", "Stuck with U By Ariana Grande (Featuring Justin Bieber)", "Therefore I Am By Billie Ellish", "Shallow By Lady Gaga & Bradley Cooper", "Everything I Wanted By Billie Ellish", "Hold Me While You Wait By Lewis Capaldi", "Blinding Lights By The Weeknd", "Perfect By Ed Sheeran", "Holy By Justin Bieber (Featuring Chance the Rapper)", "Lost in the Wild By WALK THE MOON"];
            document.getElementById('todo').textContent = "What to do?";
            document.getElementById('todo').textContent = "Listen to a song!";
            document.getElementById('random').textContent = music[Math.floor(Math.random() * music.length)]
            
            

          }

          else if (diff > 8){
            //bus takes more than 8 minutes to arrive
            document.getElementById('time').textContent = Math.round(diff) + " " + "Minutes";
            $(".display").css("border", "8px solid red");
            $("h1").css("background-color", "red");
            document.getElementById('todo').textContent = "Its a long wait...";
            var todo = ["Plan on what to eat later!", "Listen to a short podcast", "Read the Latest News!", "Check out social media!", "Watch a video", "Read about an article you are interested in", "Play a short game"]
            document.getElementById('random').textContent = todo[Math.floor(Math.random() * todo.length)]
          }
          else {
            document.getElementById('time').textContent = "Time is not available at the moment";
          }
          

          if (diff2 <= 2){
            document.getElementById('time1').textContent = "Arriving Soon...";
          }
          else if (diff2 > 2){
            document.getElementById('time1').textContent = Math.round(diff2) + " " + "Minutes";
          }
          else{
            document.getElementById('time1').textContent = "Time is not available at the moment";
          }

          if (diff3 <= 2){
            document.getElementById('time2').textContent = "Arriving Soon...";
          }
          else if (diff3 > 2){
            document.getElementById('time2').textContent = Math.round(diff3) + " " + "Minutes";
          }
          else{
            document.getElementById('time2').textContent = "Time is not available at the moment";
          }
        }
        else{
          $(".display").css("border", "8px solid grey");
          $("h1").css("background-color", "grey");
          document.getElementById('todo').textContent = "You have not an invalid bus service";
          document.getElementById('random').textContent = "Please Try Again";
          document.getElementById('time').textContent = "";
          document.getElementById('time1').textContent = "";
          document.getElementById('time2').textContent = "";
          document.getElementById('serviceno').textContent = "";
          document.getElementById('serviceno1').textContent = "";
          document.getElementById('serviceno2').textContent = "";
        }
    }

    
  });




}
)


