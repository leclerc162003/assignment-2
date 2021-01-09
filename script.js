var link = 'https://cors-anywhere.herokuapp.com/';

var settings = {
    "url": link +  "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog==",
      "accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    const json_data = response;
    const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
    console.log(arr[1][1][0].forecasts[1].area);
    
    for (let i=0; i<arr[1][1][0].forecasts.length; i++) {
        if (arr[1][1][0].forecasts[i].area == "Central Water Catchment"){
            document.getElementById("weatherinfo").innerHTML = arr[1][1][0].forecasts[i].forecast;
        }
    }
  });