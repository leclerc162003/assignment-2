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
            var music = ['<iframe width="360" height="275" src="https://www.youtube.com/embed/xrcMgO2fgpA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/C3LCyRAzZWk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>','<iframe width="360" height="275" src="https://www.youtube.com/embed/uFbetFqyGlE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/SctY9_1ylTM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/fHI8X4OXluQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/Jtauh8GcxBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/pE49WK-oNjU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/_tNU6dpjIyM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/SlPhMPnQ58k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/jO2viLEW-1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/uztfu_LXEPA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', '<iframe width="360" height="275" src="https://www.youtube.com/embed/OiMWFojB9Ok" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];
            document.getElementById('todo').textContent = "What to do?";
            document.getElementById('todo').textContent = "Listen to a song!";
            document.getElementById('random').innerHTML = music[Math.floor(Math.random() * music.length)]
            
           
            
            

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
        
    }

    
  });




}
)


