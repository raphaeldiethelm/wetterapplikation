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


  $.ajax({
  	url: 'https://maps.googleapis.com/maps/api/geocode/json',
  	data: {
  		latlng: crd.latitude + ',' + crd.longitude,
  		sensor: true
  	},
  	success: function(data){
  		$('.js-address').text(data.results[0].formatted_address);
  	}
  });




};


function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

//test

$.ajax({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    data: {
      address: 'Gaiserwaldstrasse 6, 9015 St.Gallen',
      sensor: false
    },
    success: function(data){
      console.log(data);
    }
  });