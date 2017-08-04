$(document).ready(function () {
  myMap()
})

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(39.7392,-104.9903),
    zoom:10,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
