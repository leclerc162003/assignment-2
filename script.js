// var link = 'https://cors-anywhere.herokuapp.com/';
// var settings = {
//     "url": "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=28009" + link,
//     "method": "GET",
//     "timeout": 0,
//     "headers": {
//       "AccountKey": "qmXLs/m2RZG1kdj0DepVog=="
//     },
//   };
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

var link = 'https://cors-anywhere.herokuapp.com/';
var settings = {
    "url": link + "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=28009",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog=="
    },
  };
  
   $.ajax(settings).done(function (response) {
    console.log(response);
    for( let i = 0; i < Services.length; i++){
      if (Services[i].ServiceNo == "334"){
        console.log(Services[i])
      }
    }
  });
  
  // function loadServices(){
  //   var xhr = new XMLHttpRequest();
  //   xhr.open("GET", link + "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=28009", AccountKey = "qmXLs/m2RZG1kdj0DepVog==")

  //   xhr.onload = function(){
  //     if (this.status == 200){
  //       var services = JSON.parse(this.responseText);
  //       console.log(services);
  //     }

  //   }
  //   xhr.send();
  // }

  // loadServices();