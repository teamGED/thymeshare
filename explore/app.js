const API_URL = "http://localhost:8080/api/v1/persons";

$(document).ready(function(){
  $('.modal').modal();
  $.get(API_URL+ "/names")
  .then(names => {
    const $sellers = $('.sellerDisplayCards');
    names.forEach(names => {
      $sellers.append(`<div class="col s12 m4 l4">
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://lorempixel.com/100/190/nature/6">
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h4 class="header">${names.person_name}</h4>
          <p>${names.item_name}</p>
        </div>
        <div class="card-action">
          <a class="modal-trigger" Zhref="#contact-modal">Contact ${names.person_name}</a>
        </div>
      </div>
    </div>
  </div>`)
    })
  })
});
