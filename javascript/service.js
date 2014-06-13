$(document).ready(function() {
	var options = {
	  enableHighAccuracy: true,
	  timeout: 10000,
	  maximumAge: 0
	};

	var success = function() {
		var crd = pos.coords;
	
		$('.js-current-position').text(crd.latitude + ', ' + crd.longitude);
	};

	navigator.geolocation.getCurrentPosition(success, error, options);
});


