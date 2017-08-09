const API_URL = "https://warm-tor-27276.herokuapp.com/api/v1/persons/login";

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
<<<<<<< HEAD
  $.post("https://cors-anywhere.herokuapp.com/https://warm-tor-27276.herokuapp.com/api/v1/persons/login", data)
=======
  $.post("https://warm-tor-27276.herokuapp.com/api/v1/persons/login", data)
>>>>>>> 4e07bab2ca9fc6618de5aeec9384b82ce5312fd7
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        localStorage.setItem('token', response.data)
        location.href = './seller/index.html'
      }
    })
})
