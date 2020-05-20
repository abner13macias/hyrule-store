function getProveedorInfo() {
  const proveedorId = getQueryVariable('IdCorreo');
  if (proveedorId) {
    $.post('php/obtieneCamposCorreo.php', { proveedorId }, response => {
      let resp = JSON.parse(response);
      if (resp.data) {
        $('input[name=proveedor]').val(resp.data.Nombre);
        $('input[name=direccion]').val(resp.data.Correo);
        $('input[name=telefono]').val(resp.data.Mensaje);
      } else {
        $('#response-message-container').html(
          'No se pudo obtener la informacion del correo seleccionado'
        );
        $('#response-message-container').addClass('error');
      }
    });
  } else {
    $('#response-message-container').html(
      'No se pudo obtener la informacion del correo seleccionado'
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

function editProveedor() {
  let proveedor = {};
  const proveedorId = getQueryVariable('IdCorreo');
  if (proveedorId) {
    proveedor.id = proveedorId;
    proveedor.name = $('input[name=proveedor]').val();
    proveedor.direccion = $('input[name=direccion]').val();
    proveedor.telefono = $('input[name=telefono]').val();
    proveedor = JSON.stringify(proveedor);
    $.post('php/modificarCorreo.php', { proveedor }, response => {
      let resp = JSON.parse(response);
      if (resp.status === 200) {
        $('input[name=proveedor]').value = '';
        $('input[name=direccion]').value = '';
        $('input[name=telefono]').value = '';
      }
      $('#response-message-container').html(resp.message);
      $('#response-message-container').addClass(resp.class);
    });
  } else {
    $('#response-message-container').html(
      'El correo seleccionado es invalido'
    );
    $('#response-message-container').addClass('error');
  }
}
