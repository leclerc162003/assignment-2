var link = 'https://cors-anywhere.herokuapp.com/';
var settings = {
    "url": link + "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=28561",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog=="
    },
  };
  
  $.ajax(settings).done(function (response) {
    let result = response.Services;  
    for (let i=0; i<result.length; i++) {
        if (result[i].ServiceNo == "334") {
          console.log(result[i])
          document.getElementById('serviceno').textContent = result[i].ServiceNo;
          document.getElementById('time').textContent = result[i].NextBus.EstimatedArrival;
        }
    }

    
  });
