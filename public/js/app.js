var weatherData = {};
$(document).ready(function(){
  var baseUrl = 'https://api.forecast.io/forecast/';
  var weatherData = {};

  $('#get-weather').on('click', getWeather);



  function buildUrl(lat, lon){
    //return 'https://api.forecast.io/forecast/b6e3a9d6cbc211074ff9e60dc7bd71ec/37.8267,-122.423';
    return baseUrl + apiKey+'/'+lat+','+lon;
  }

  function getWeather(){
    var lat = $('#latitude').val();
    var lon = $('#longitude').val();
    var options = {
      url: buildUrl(lat, lon),
      dataType: 'jsonp',
      success: successHandler,
      error: errorHandler
    };

    $.ajax(options);
  }


  function successHandler(data){
    weatherData = data;
    $('#output').text(JSON.stringify(data));
    console.log(data);
    console.log(weatherData);
  }

  function errorHandler(err){
    console.log(err);
  }
});
