var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  $('.js-long').text(crd.longitude)
  $('.js-lat').text(crd.latitude)
  $('.js-acc').text(crd.accuracy + 'm');

  
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);