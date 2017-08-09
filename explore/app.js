var url = 'https://warm-tor-27276.herokuapp.com/api/v1/persons'
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

    $.get(url + '/names').then((data) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].seller == true) {
          getAddress(data[i].address, data[i])
        }
      }
    })

    function getAddress(userAddress, content) {

      var geocoder = new google.maps.Geocoder();

      geocoder.geocode({
        address: userAddress
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
          infowindow.setContent(`
              <div class="card horizontal" style="width: 300px; margin: 0">
                <div class="card-image">
                  <img src="../assets/${content.item_name.replace(' ', '')}.jpg">
                </div>
                <div class="card-stacked">
                  <div class="card-content">
                  <h4 class="header">${content.person_name}</h4>
                  <h6>has an excess of ${content.item_name}!</h6>
                  </div>
                  <div class="card-action">
                     <a class="modal-trigger" href="#contact-modal">Contact ${content.person_name}</a>
                  </div>
                </div>
              </div>
            `)
          infowindow.open(map, marker)
        };
      })(marker, content, infowindow))

    }
  })();

$.get(url+ "/names").then((names) => {
    names.forEach(names => {
      $('.modal').modal();
      $('#produceCards').append(`
        <div class="col s12 m12 l4">
          <div class="card horizontal">
            <div class="card-image">
              <img style="max-height: 30vh" src="../assets/${names.item_name.replace(' ', '')}.jpg">
            </div>
            <div class="card-stacked">
              <div class="card-content">
              <h4 class="header">${names.person_name}</h4>
              <h5>has extra ${names.item_name} to give away</h5>
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

$('#signup').click(function(event) {
  event.preventDefault();
  location.href = "signUp/index.html";
});

$('#validateLogin').click(function(event) {
  event.preventDefault()
  const email = $('#email').val()
  const password = $('#password').val()
  const data = {
    email,
    password
  }
  $.post("http://localhost:8080/api/v1/persons/login", data)
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.data)
        location.href = '../seller/index.html'
      }
    })
})
