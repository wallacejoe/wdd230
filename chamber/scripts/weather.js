/*Current Weather and Temperature*/
const url = "https://api.openweathermap.org/geo/1.0/direct?q=Mesa,US&appid=61c80ef5042813383d91c99a65c305a0";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

async function weatherBalloon(){
  fetch("https://api.openweathermap.org/geo/1.0/direct?q=Mesa,US&appid=")
  .then(function(resp) {return resp.json()})
  .then(function(data) {console.log(data);})
  .catch(function() {console.log("Error with the weatherBalloon function")})
}

window.onload = function(){
  weatherBalloon(6167865);
}

apiFetch();
