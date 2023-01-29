fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mesa?unitGroup=us&key=A6DN4XCFEHEHBPJQT4VVLGUT9&contentType=json", {
  method: 'GET', 
  headers: {
 
  },
           
}).then(response => {
  if (!response.ok) {
    throw response; //check the http response code and if isn't ok then throw the response as an error
}
            
  return response.json(); //parse the result as JSON

}).then(response => {
  //response now contains parsed JSON ready for use
  processWeatherData(response);

}).catch((errorResponse) => {
  if (errorResponse.text) { //additional error information
    errorResponse.text().then( errorMessage => {
      //errorMessage now returns the response body which includes the full error message
    })
  } else {
    //no additional error information 
  } 
  document.getElementById("temperature").innerHTML = processWeatherData(response);
});

function processWeatherData(response) {
  
    var location=response.resolvedAddress;
    var days=response.days;
    console.log("Location: "+location);
    for (var i=0;i<days.length;i++) {
      console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    }
    return ("days[0].tempmin+days[0].tempmax")
  }

