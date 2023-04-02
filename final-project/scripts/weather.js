async function weatherFetch(){
  const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=61c80ef5042813383d91c99a65c305a0";
  try {
    const response = await fetch(weatherUrl);
    if (response.ok){
      const weatherData = await response.json();
      //console.log(weatherData);
      const windTemp = weatherData.main.temp;
      document.getElementById("temperature").innerHTML = parseFloat(windTemp).toFixed(0);
      document.getElementById("humidity").innerHTML = weatherData.main.humidity;
      const condition = weatherData.weather[0].description;
      document.getElementById("condition").innerHTML = condition;
      const weatherIcon = weatherData.weather[0].icon;
      document.getElementById("weatherIcon").setAttribute("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function weatherForecast(){
  const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=61c80ef5042813383d91c99a65c305a0";
  try {
    const response2 = await fetch(forecastUrl);
    if (response2.ok){
      const forecastData = await response2.json();
      //console.log(forecastData);
      const firstTemp = forecastData.list[8].main.temp;
      const d = new Date(forecastData.list[8].dt_txt);
      document.getElementById("first-temp").innerHTML = firstTemp.toFixed(0);
      document.getElementById("first-day").innerHTML = getDayOfWeek(d.getDay());
      const secondTemp = forecastData.list[16].main.temp;
      const d1 = new Date(forecastData.list[16].dt_txt);
      document.getElementById("second-temp").innerHTML = secondTemp.toFixed(0);
      document.getElementById("second-day").innerHTML = getDayOfWeek(d1.getDay());
      const thirdTemp = forecastData.list[24].main.temp;
      const d2 = new Date(forecastData.list[24].dt_txt);
      document.getElementById("third-temp").innerHTML = thirdTemp.toFixed(0);
      document.getElementById("third-day").innerHTML = getDayOfWeek(d2.getDay());
    }
  } catch (error) {
    console.log(error);
  }
}

function getDayOfWeek(date){
  if (date == 0){
    return "Sunday";
  }
  else if (date == 1){
    return "Monday";
  }
  else if (date == 2){
    return "Tuesday";
  }
  else if (date == 3){
    return "Wednesday";
  }
  else if (date == 4){
    return "Thursday";
  }
  else if (date == 5){
    return "Friday";
  }
  else if (date == 6){
    return "Saturday";
  }
}

weatherFetch();
weatherForecast();
