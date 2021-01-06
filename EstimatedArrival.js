//link to prevent cors error
var link = 'https://cors-anywhere.herokuapp.com/';


var settings = {
    "url": link + "http://datamall2.mytransport.sg/ltaodataservice/TrafficIncidents",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "AccountKey": "qmXLs/m2RZG1kdj0DepVog==",
      "accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    const json_data = response;
    const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
    //counting number of incidents for respective causes
    var countrw = 0;
    var counta = 0;
    var countvb = 0;
    var countw = 0;
    var counto = 0;
    var countrb = 0;
    var countht = 0;
    var countm = 0;
    var countd = 0;
    var countuv = 0;
    //arrays to store messages for info client may need
    var htarr = [];
    var aarr=[];
    var vbaarr = [];

    console.log(arr);
    for (let i=0; i<arr[1][1].length; i++) {
        //if statements to count number of incidents

        if (arr[1][1][i].Type == "Accident"){
            counta += 1; 
            aarr.push(arr[1][1][i].Message)
        }
        else if (arr[1][1][i].Type == "Roadwork"){
            countrw += 1;
            
        }
        else if (arr[1][1][i].Type == "Vehicle breakdown"){
            countvb += 1;
            vbarr.push(arr[1][1][i].Message)
        }
        else if (arr[1][1][i].Type == "Weather"){
            countw += 1;
        }
        else if (arr[1][1][i].Type == "Obstacle"){
            counto += 1;
        }
        else if (arr[1][1][i].Type == "Road Block"){
            countrb += 1;
        }
        else if (arr[1][1][i].Type == "Heavy Traffic"){
            countht += 1;
            htarr.push(arr[1][1][i].Message)
        }
        else if(arr[1][1][i].Type == "Misc."){
            countm += 1;
        }
        else if (arr[1][1][i].Type == "Diversion"){
            countd += 1;
        }
        else if (arr[1][1][i].Type == "Unattended Vehicle"){
            countuv += 1;
        }


        

    }
    //printing out number of incidents for respective causes
    document.getElementById('accident').textContent = "Number of Accidents:" + " " + counta;
    document.getElementById('roadworks').textContent = "Number of Road Works ongoing now:" + " " + countrw;
    document.getElementById('vb').textContent = "Number of Vehicle Breakdown:" + " " + countvb;
    document.getElementById('we').textContent = "Number of Incidents of Weather:" + " " + countw;
    document.getElementById('ob').textContent = "Number of Incidents of Obstacles" + " " + counto;
    document.getElementById('rb').textContent = "Number of Road Blocks ongoing now:" + " " + countrb;
    document.getElementById('ht').textContent = "Number of Heavy Traffic ongoing now:" + " " + countht;
    document.getElementById('misc').textContent = "Number of Incidents due to Miscellanous Events:" + " " + countm;
    document.getElementById('diver').textContent = "Number of Incidents of Diversions:" + " " + countd;
    document.getElementById('uv').textContent = "Number of Incidents of Unattended Vehicle:" + " " + countuv;
    
    //to print out messages of incidents
    for (let h=0; h<htarr.length; h++){
        document.getElementById(`ht${h+1}`).textContent = htarr[h];
        
    }
    for (let a=0; a<aarr.length; a++){
        document.getElementById(`a${a+1}`).textContent = aarr[a];
    }
    for (let v=0; v<vbrr.length; v++){
        document.getElementById(`vb${v+1}`).textContent = vbarr[v];
    }
    
    
  });


 