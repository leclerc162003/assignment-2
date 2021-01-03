//ensuring cors error does not occur and keys 
var link = 'https://cors-anywhere.herokuapp.com/';
// function getcode(x) {
//   let code = x;
//   return code;
// } 

let item = localStorage.getItem('');
document.addEventListener("submit", function (event) {
        //prevent default action of the form from actually submitting
        event.preventDefault();

        //retrieve form values
        let myName = document.getElementById("myText").value;
        
        return myName
        

        
        
      });


var settings = {
    "url": link + "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=65009"  ,
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
        if (result[i].ServiceNo == "82") {
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
            var phrases = ["Keep a lookout for the bus!", "Get your EZ-Link card ready!", "STOP LOOKING AT YOUR PHONE! BUS IS COMING!", "Time to board the bus!"]
            document.getElementById('todo').textContent = phrases[Math.floor(Math.random() *  phrases.length)]

          }

          else if (diff > 2 && diff <= 8){
            
            document.getElementById('time').textContent = Math.round(diff) + " " + "Minutes";
            $(".display").css("border", "8px solid yellow");
            var music = ["Someone You Loved By Lewis Capaldi", "Afterglow By Ed Sheeran", "Monster By Shawn Mendes (Featuring Justin Bieber)", "Dynamite By BTS", "Don't Start Now By Dua Lipa", "Before You Go By Lewis Capaldi", "Stuck with U By Ariana Grande (Featuring Justin Bieber)", "Therefore I Am By Billie Ellish", "Shallow By Lady Gaga & Bradley Cooper", "Everything I Wanted By Billie Ellish", "Hold Me While You Wait By Lewis Capaldi", "Blinding Lights By The Weeknd", "Perfect By Ed Sheeran", "Holy By Justin Bieber (Featuring Chance the Rapper)", "Lost in the Wild By WALK THE MOON"];
            document.getElementById('todo').textContent = "What to do?";
            document.getElementById('todo').textContent = "Listen to a song!";
            document.getElementById('random').textContent = music[Math.floor(Math.random() * music.length)]

          }

          else if (diff > 8){
            
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
          

          

          
        }
    }

    
  });
