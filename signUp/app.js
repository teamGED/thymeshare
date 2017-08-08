
const url = 'https://warm-tor-27276.herokuapp.com/api/v1/persons/signup'


$(document).ready(function(){
      $('.modal').modal();
      $('select').material_select();
    });

$('#buyerSignUp').click(function(event){
  event.preventDefault();
  const url = 'https://warm-tor-27276.herokuapp.com/api/v1/persons'
    const seller = false;
    const name = $('#nameBuyer').val();
    const password = $('#passwordBuyer').val();
    const email = $('#emailBuyer').val();

    let newBuyerPost = {
      seller,
      name,
      email,
      password,
    };
  $.post('http://localhost:8080/api/v1/persons/buyer/signup', newSellerPost)
  .then(response => {
  localStorage.setItem('token', response.token)
   location.href = '../explore/index.html'

  })
})

$('#sellerSignUp').click(function(event){
  event.preventDefault();
    const seller = true;
    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const address = $('#address').val();
    const item = $('#itemSelect option:selected').val();

    let newSellerPost = {
      seller,
      name,
      email,
      password,
      address,
      item
    };
    $.post('http://localhost:8080/api/v1/persons/seller/signup', newSellerPost)
    .then(response => {
      localStorage.setItem('token', response.token)
      location.href = '../seller/index.html'
    }).catch(error => {
      console.log(error)
    })
});
