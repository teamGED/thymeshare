const API_URL = "https://warm-tor-27276.herokuapp.com/api/v1/persons";

$(document).ready(function() {
  $('.parallax').parallax();
  $('.modal').modal();
});




$('#signup').click(function(event) {
  event.preventDefault();
  location.href = "signUp/index.html";
});

function getPersonFromForm() {
  const buyerEmail = $('#email').val();
  const buyerPassword = $('#password').val();

  let newBuyerPost = {
    is_seller: false,
    name: buyerName,
    email: bueyrEmail,
    password: buyerPassword // item_id: ??
  }
}

$('#login').click(function(event) {
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
    //     }) $.ajax({
    //       method: 'GET',
    //       url: `http://localhost:8080/api/v1/persons/${parsedToken.id}/profile`,
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     })
    //
    //     })
    //
    //     function parseJWT (token) {
    //         var base64Url = token.split('.')[1];
    //         var base64 = base64Url.replace('-', '+').replace('_', '/');
    //         return JSON.parse(window.atob(base64));
    //             };
    // }
    // function setIdRedirect() {
    //   console.log(localStorage.getItem('token'));
    //   localStorage.user.id = token.id;
    //   window.location = `/${token.id}/profile`;
    // }
    //
    // })
