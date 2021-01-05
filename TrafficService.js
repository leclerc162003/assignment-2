//ensuring cors error does not occur and keys 
var link = 'https://cors-anywhere.herokuapp.com/';

var settings = {
    "url": link + "http://datamall2.mytransport.sg/ltaodataservice/TrainServiceAlerts",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog==",
      "accept": "application/json"
    },
  };
  
  //extracting data from API and printing
  $.ajax(settings).done(function (response) {
    
    const json_data = response;
    const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);

    console.log(arr);
    for (let i=0; i<arr.length; i++) {

        if (arr[i].AffectedSegments == null){
            document.getElementById('train').textContent = "No train disruptions now";
            $(".status").css("border", "8px solid green");
        }
        else{
            document.getElementById('train').textContent = "An Train Disruption is ongoing now";
            document.getElementById('traindisrupted').textContent = "Trains affected are:" + arr[i].AffectedSegments;
        }



    }


    
  });

    