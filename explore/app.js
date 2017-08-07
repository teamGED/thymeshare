
const url =

  (function() {
    var map;

    var mapOptions = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(39.7392, -104.9903)
    };
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(geolocate);
        map.setZoom(12);
      });
    }

    function getAddress() {

      var addressInput = '3611 osage st';

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({
        address: addressInput
      }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

          var myResult = results[0].geometry.location; // reference LatLng value

          createMarker(myResult); // call the function that adds the marker

        }
      });
    }

    function createMarker(latlng) {

      marker = new google.maps.Marker({
        map: map,
        position: latlng
      });

    }
  })();
