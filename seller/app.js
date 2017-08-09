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
    .then(person => {
      $('#profileSection').append(`
    <div id="seller" class="center">
      <h2>Welcome ${parsedToken.name}</h2>
    </div>
    `)

      $('#updateProduce').click((event) => {
        event.preventDefault()
        let userId = `${parsedToken.id}`
        let itemId = parseInt($('#itemSelect option:selected').val())
        $.ajax({
          url: `https://warm-tor-27276.herokuapp.com/api/v1/persons/${userId}/${itemId}`,
          type: 'PUT'
        })
      })
    })
})

function parseJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

$('#deleteMe').click(function(event) {
  event.preventDefault();
  const token = localStorage.getItem('token')
  const parsedToken = parseJWT(token)
  const id = `${parsedToken.id}`
  $.ajax({
    url: 'https://warm-tor-27276.herokuapp.com/api/v1/persons/' + id,
    type: 'DELETE',
    contentType: 'application/json'
  }).then(function() {
    window.location.reload();
    location.href = '/'
  });
});

$('#logout').click(function(event) {
  event.preventDefault();
  localStorage.removeItem('token')
  location.href = '/'
})
