var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

$(document).ready(function() {
	navigator.geolocation.getCurrentPosition(success, error, options);
});


