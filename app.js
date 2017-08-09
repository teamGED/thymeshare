const API_URL = "https://cors-anywhere.herokuapp.com/https://warm-tor-27276.herokuapp.com/api/v1/persons/login";

$(document).ready(function() {
  $('.parallax').parallax();
  $('.modal').modal();
  $('.materialboxed').materialbox();
});

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
  $.post("https://cors-anywhere.herokuapp.com/https://warm-tor-27276.herokuapp.com/api/v1/persons/login", data)
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.data)
        location.href = './seller/index.html'
      }
    })
})
