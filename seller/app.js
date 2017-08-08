$(() => {
  $('.modal').modal();
  $('select').material_select();

  const token = localStorage.getItem('token')

  if (!token) {
    location.href = '/'
  };

  const parsedToken = parseJWT(token)
  $.ajax({
    method: 'GET',
    url: `https://warm-tor-27276.herokuapp.com/api/v1/persons/${parsedToken.id}/profile`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
.then(person =>
{
  console.log(person)
  $('#profileSection').append(`
    <div id="seller" class="center">
      <h2>Welcome ${parsedToken.name}</h2>
      <a id="updateProduce" href="#!" class="modal-action modal-close waves-effect waves-green btn white">Update Your Offering</a>
    </div>
    `)
})

})

function parseJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

$(document).on('click', '#updateButton', function() {
  event.PreventDefault();
  let url = 'https://warm-tor-27276.herokuapp.com/api/v1/persons/'
  let userId = req.params.id
  let itemId = $('#itemSelect option:selected').val()
  $.ajax({
      url: url + userId + "/" + itemId,
      method: 'PUT',
    })
    .then(function() {
      window.location.reload()
    });
});


$('#logout').click(function(event) {
  event.preventDefault();
  localStorage.removeItem('token')
  location.href = '/'
})
