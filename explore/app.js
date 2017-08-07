var url = 'http://localhost:8080/api/v1/persons'
$(document).ready(() => {
  $('.modal').modal();
  (function() {
    var map
    var infowindow

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
$.get(url+ "/names").then((names) => {
    names.forEach(names => {
      $('.modal').modal();
      $('#produceCards').append(`
        <div class="col s12 m4">
          <div class="card horizontal">
            <div class="card-image">
              <img src="../assets/tomatos.jpeg">
            </div>
            <div class="card-stacked">
              <div class="card-content">
              <h4 class="header">${names.person_name}</h4>
              <p>${names.item_name}</p>
              </div>
              <div class="card-action">
                 <a class="modal-trigger" href="#contact-modal">Contact ${names.person_name}</a>
              </div>
            </div>
          </div>
        </div>
        `)
    })
 })
})
