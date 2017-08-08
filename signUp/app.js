
const API_URL = 'https://warm-tor-27276.herokuapp.com/api/v1/persons/seller/signup'


$(document).ready(function(){
      $('.modal').modal();
      $('select').material_select();
    });

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
    $.post(API_URL, newSellerPost)
    .then(response => {
      localStorage.setItem('token', response.token)
      location.href = '../seller/index.html'
    }).catch(error => {
      console.log(error)
    })
});
