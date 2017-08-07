const API_URL = "http://localhost:8080/";

$(document).ready(function(){
  $.get(API_URL+ "/names")
  .then(names => {
    const $sellers = $('.sellerDisplayCards');
    names.forEach(names => {
      $sellers.append(`<div class="col s12 m4 l4">
    <h2 class="header">${names.person_name}</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6">
      </div>
      <div class="card-stacked">
        <div class="card-content">

          <p>${names.item_name}</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>`)
    })
  })
});
