(function() {
  var map;

  var mapOptions = {
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(39.7392, -104.9903)
  };
  map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(geolocate);
      map.setZoom(15);

      var marker = new google.maps.Marker({
        position: geolocate
      });
      marker.setMap(map);
    });
  }
})();
