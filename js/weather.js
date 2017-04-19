var apiKey = require('./../.env').apiKey;


function Weather(){
}

Weather.prototype.getWeather = function(city, displayHumidityAlso) {
  console.log("Hi! I'm a weather object, YEAH!");

  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    console.log(response);
    displayHumidityAlso(city, response.main.humidity);
    console.log(response.main.humidity);
    console.log("trying to display humidity backend");
    response.main.humidity;
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
