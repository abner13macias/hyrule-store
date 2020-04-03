function getImagenInfo() {
    const imagenId = getQueryVariable('IdImagen');
    if (imagenId) {
      $.post('php/obtieneCamposImagen.php', { imagenId }, response => {
        let resp = JSON.parse(response);
        console.log(resp.message);
        if (resp.data) {
          $('input[name=direccion]').val(resp.data.Direccion);
        } else {
          $('#response-message-container').html(
            'No resp.data'
          );
          $('No se pudo obtener la informacion de la imagen seleccionada').addClass('error');
        }
      });
    } else {
      $('#response-message-container').html(
        'No se pudo obtener la informacion de la categoría seleccionada'
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
  
  function editImagen() {
    let imagen = {};
    const imagenId = getQueryVariable('IdImagen');
    if (imagenId) {
      imagen.id = imagenId;
      imagen.direccion = $('input[name=direccion]').val();
      $.post('php/modificarImagen.php', { imagen }, response => {
        let resp = JSON.parse(response);
        if (resp.status === 200) {
          $('input[name=direccion]').value = '';
        }
        $('#response-message-container').html(resp.message);
        $('#response-message-container').addClass(resp.class);
      });
    } else {
      $('#response-message-container').html(
        'La direccion seleccionada es invalida'
      );
      $('#response-message-container').addClass('error');
    }
  }
  