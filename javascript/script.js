var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  $('.js-long').text(crd.longitude);
  $('.js-lat').text(crd.latitude);
  $('.js-acc').text('+-' + crd.accuracy + 'm');

  $.ajax({
  	url: 'https://api.forecast.io/forecast/b1fe5cae982490b8e60dac5cb2368ad8/37.8267,-122.423',
  	dataType: 'jsonp',
  	success: function(data){
  		console.log(data);
  	}
  });
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);