const url = 'http://localhost:8080/api/v1/persons/signup'

$(document).ready(function(){
      $('.modal').modal();
      $('select').material_select();
    });

$('#buyerSignUp').click(function(event){
  event.preventDefault();
  const url = 'http://localhost:8080/api/v1/persons'
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
  $.post(url, newBuyerPost)
  .then(function(data) {
     console.log(data)
  })
})


  // function setIdRedirect() {
  //   localStorage.user.id = result.id;
  //   window.location = `/user/html?id=${result.id}`;
  // }

$('#sellerSignUp').click(function(event){
  event.preventDefault();
    const seller = true;
    const name = $('#name').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const address = $('#address').val();

    let newSellerPost = {
      seller,
      name,
      email,
      password,
      address
    };
    console.log(newSellerPost)
    $.post(url, newSellerPost)
    .then(function(data){
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
});
