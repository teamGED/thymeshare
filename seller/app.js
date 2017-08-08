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
      url: `http://localhost:8080/api/v1/persons/${parsedToken.id}/profile`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(person => {
      console.log(person)
      $('#profileSection').append(
        `<h2>Welcome ${parsedToken.name}</h2>
    <h6>Update Your Current Offering</h6>
    <div class="row">
      <div class="input-field col s12">
        <select id="itemSelect">
          <option value="" disabled selected>What Do You Have to Share?</option>
          <option value="10">Apples</option>
          <option value="11">Apricots</option>
          <option value="3">Arugala</option>
          <option value="2">Beets</option>
          <option value="5">Cabbage</option>
          <option value="1">Carrots</option>
          <option value="28">Corn</option>
          <option value="14">Cucumber</option>
          <option value="15">Eggplant</option>
          <option value="29">Fennel</option>
          <option value="8">Green Beans</option>
          <option value="9">Green Onions</option>
          <option value="18">Kale</option>
          <option value="13">Lettuce</option>
          <option value="6">Mushrooms</option>
          <option value="22">Peaches</option>
          <option value="21">Peas</option>
          <option value="7">Peppers</option>
          <option value="19">Plums</option>
          <option value="20">Pumpkins</option>
          <option value="23">Radishes</option>
          <option value="24">Rhubarb</option>
          <option value="4">Spinach</option>
          <option value="25">Squash</option>
          <option value="6">Mushrooms</option>
          <option value="27">Tomatoes</option>
          <option value="12">Zucchini</option>
        </select>
        <a id="updateProduce" href="#!" class="modal-action modal-close waves-effect waves-green btn ">Update Your Offering</a>
      </div>
      </div>`
      )
    })
})

function parseJWT(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
};

$(document).on('click', '#updateButton', function() {
  event.PreventDefault();
  let url = 'http://localhost:8080/api/v1/persons/'
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
