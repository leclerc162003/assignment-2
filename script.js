var link = 'https://cors-anywhere.herokuapp.com/';
var settings = {
    "url": "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=28009" + link,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog=="
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });