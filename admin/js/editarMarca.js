function getMarcaInfo() {
  const marcaId = getQueryVariable('IdMarca');
  if (marcaId) {
    $.post('php/obtieneCamposMarca.php', { marcaId }, response => {
      let resp = JSON.parse(response);
      if (resp.data) {
        $('input[name=marca]').val(resp.data.Nombre);
        $('input[name=description]').val(resp.data.Descripcion);
      } else {
        $('#response-message-container').html(
          'No se pudo obtener la informacion de la marca seleccionada'
        );
        $('#response-message-container').addClass('error');
      }
    });
  } else {
    $('#response-message-container').html(
      'No se pudo obtener la informacion de la marca seleccionada'
    );
    $('#response-message-container').addClass('error');
  }
}

function getQueryVariable(variableName) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (const i in vars) {
    let pair = vars[i].split('=');
    if (pair[0] === variableName) {
      return pair[1];
    }
  }
  return false;
}

function editMarca() {
  let marca = {};
  const marcaId = getQueryVariable('IdMarca');
  if (marcaId) {
    marca.id = marcaId;
    marca.name = $('input[name=marca]').val();
    marca.description = $('input[name=description]').val();
    marca = JSON.stringify(marca);
    $.post('php/modificarMarca.php', { marca }, response => {
      let resp = JSON.parse(response);
      if (resp.status === 200) {
        $('input[name=marca]').value = '';
        $('input[name=description]').value = '';
      }
      $('#response-message-container').html(resp.message);
      $('#response-message-container').addClass(resp.class);
    });
  } else {
    $('#response-message-container').html(
      'La marca seleccionada es invalida'
    );
    $('#response-message-container').addClass('error');
  }
}