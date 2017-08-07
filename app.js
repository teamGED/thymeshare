const API_URL = "http://localhost:8080/api/v1/persons";

$(document).ready(function(){
      $('.parallax').parallax();
      $('.modal').modal();
    });

$('#signup').click(function(event) {
  vent.preventDefault();
  location.href = "seller/index.html";
      //   event.preventDefault()
      //   const user = getUserPersonForm();
      //   signup(user)
      //   .then(result => {
      //  localStorage.token = result.token;
      //     setIdredirect(result);
      //   }).catch(error => {
      //     console.error(error)
      //     showErrorMessage(error.responseJSON.message)
      //   })
      });

    function getBuyerFromForm() {
      const buyerEmail = $('name').val();
      const buyerPassword = $('name').val();

      let newSellerPost = {
        is_seller: false,
        name: buyerName,
        email: bueyrEmail,
        password: buyerPassword        // item_id: ??
      }
    }

    $('#login').click(function(event) {
        event.preventDefault()
        const user = getpersonFromForm();
        login(person)
        .then(result => {
       localStorage.token = result.token;
          setIdredirect(result);
        }).catch(error => {
          console.error(error)
          showErrorMessage(error.responseJSON.message)
        })
      });

    function getPersonInfo(id){
      return $.get({
        url:`$API_URL/user${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
    }

// function setIdRedirect() {
//   localStorage.user.id = result.id;
//   window.location = / user/html?id=${result.id}
// }
