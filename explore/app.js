
$(document).ready(() => {
  (function() {
    var map
    var infowindow
    var url = 'https://warm-tor-27276.herokuapp.com/'
    var mapOptions = {
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(39.7392, -104.9903)
    };
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    infowindow = new google.maps.InfoWindow()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(geolocate);
        map.setZoom(12);
      });
    }

    $.get(url).then((data) => {
      for (var i = 0; i < data.length; i++) {
        getAddress(data.address, data)
      }
    })

    function getAddress(address, content) {

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({
        address: address
      }, function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

          var myResult = results[0].geometry.location;

          createMarker(myResult, content);

        }
      });
    }

    function createMarker(latlng, content) {

      marker = new google.maps.Marker({
        map: map,
        position: latlng
      });

      google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {
        return function() {
          infowindow.setContent(content)
          infowindow.open(map, marker)
        };
      })(marker, content, infowindow))

    }
  })();

  // $.get(url).then((data) => {
    for (var i = 0; i < 3; i++) {
      $('#produceCards').append(`
        <div class="col s12 m4">
          <div class="card horizontal">
            <div class="card-image">
              <img src="../assets/tomatos.jpeg">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
              </div>
              <div class="card-action">
                <a href="#">Contact seller</a>
              </div>
            </div>
          </div>
        </div>
        `)
    }
  // })
})
>>>>>>> 1ce9a87798f4c92d47acaf736f6c6f10dbeda842
