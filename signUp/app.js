
const API_URL = 'https://warm-tor-27276.herokuapp.com/api/v1/persons/seller/signup'


$(document).ready(function(){
      $('.modal').modal();
      $('select').material_select();
    });

$('#sellerSignUp').click(function(event){
  event.preventDefault();
    // const seller = true;
    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const address = $('#address').val();
    const item = $('#itemSelect option:selected').val();

    let newSellerPost = {
      // seller,
      name,
      email,
      password,
      address,
      item
    };
<<<<<<< HEAD
=======

>>>>>>> 447f5254e9482b15b951e2814082a644e72451bd
    $.post('https://warm-tor-27276.herokuapp.com/api/v1/persons/seller/signup', newSellerPost)
    .then(response => {
      clearInput();
      localStorage.setItem('token', response.token)
      location.href = '../seller/index.html'
    }).catch(error => {
      console.log(error)
    })
});

function clearInput () {
  let inputs = $('form').find('input');
  inputs.each(function(index) {
    $(this).val('');
  })
}

$('#seller_modal').on('hidden', function () {
  clearInput();
});

function clearInput () {
  let inputs = $('form').find('input');
  inputs.each(function(index) {
    $(this).val('');
  })
}

$('#seller_modal').on('hidden', function () {
  clearInput();
});
