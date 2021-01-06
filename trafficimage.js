var link = 'https://cors-anywhere.herokuapp.com/';

var settings = {
    "url": link + "http://datamall2.mytransport.sg/ltaodataservice/Traffic-Imagesv2",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog==",
      "accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response)
    const json_data = response;
    const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
    
    for (let i=0; i<arr[1][1].length; i++) {
        document.getElementById(`pic${i+1}`).innerHTML = `<img src=${arr[1][1][i].ImageLink}>`
        console.log(arr[1][1][i].ImageLink)
    }
    

  });