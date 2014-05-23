var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  $('.js-long').text(crd.longitude);
  $('.js-lat').text(crd.latitude);
  $('.js-acc').text('+/- ' + crd.accuracy + ' meters');

  $.ajax({
  	url: 'https://api.forecast.io/forecast/b1fe5cae982490b8e60dac5cb2368ad8/' + crd.latitude + ',' + crd.longitude,
  	data: {
  		units: 'si'
  	},
  	dataType: 'jsonp',
  	success: function(data){
  		$('.js-temp').text(data.currently.apparentTemperature + ' °C');
  		$('.js-wsp').text(data.currently.windSpeed + ' meters per second');
  	}
  });
};

function geoFindMe() {
  var output = document.getElementById("out");

var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);