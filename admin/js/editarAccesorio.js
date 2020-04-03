function getAccesorioInfo() {
    const accesorioId = getQueryVariable('Idaccesorio');
    if (accesorioId) {
      $.post('php/obtieneCamposAccesorio.php', { accesorioId }, response => {
        let resp = JSON.parse(response);
        if (resp.data) {
          $('input[name=accesorio]').val(resp.data.Nombre);
          $('input[name=marca]').val(resp.data.Marca);
          getMarcaData(resp.data.Marca);
          $('input[name=proveedor]').val(resp.data.Proveedor);
          getProveedorData(resp.data.Proveedor);
          $('input[name=categoria]').val(resp.data.Categoria);
          getCategoriaData(resp.data.Categoria);
          $('input[name=conectividad]').val(resp.data.Conectividad);
          getConectividadData(resp.data.Conectividad);
          $('input[name=descripcion]').val(resp.data.Descripcion);
        } else {
          $('#response-message-container').html(
            'No se pudo obtener la informacion del Accesorio seleccionado'
          );
          $('#response-message-container').addClass('error');
        }
      });
    } else {
      $('#response-message-container').html(
        'No se pudo obtener la informacion de la Accesorio seleccionado'
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
  
  function editAccesorio() {
    let accesorio = {};
    const accesorioId = getQueryVariable('Idaccesorio');
    if (accesorioId) {
        accesorio.id = accesorioId;
        accesorio.nombre = $('input[name=accesorio]').val();
        accesorio.marca=$('select[name=selectMarca]').val();
        accesorio.proveedor=$('select[name=selectProveedor]').val();
        accesorio.categoria=$('select[name=selectCategoria]').val();
        accesorio.conectividad=$('select[name=selectConectividad]').val();
        accesorio.descripcion = $('input[name=descripcion]').val();
        accesorio = JSON.stringify(accesorio);
        
      $.post('php/modificarAccesorio.php', { accesorio }, response => {
        let resp = JSON.parse(response);
        if (resp.status === 200) {
            $('input[name=accesorio]').value = '';
            $('input[name=marca]').value = '';
            $('input[name=proveedor]').value = '';
            $('input[name=categoria]').value = '';
            $('input[name=Conectividad]').value = '';
            $('input[name=descripcion]').value = '';
         
        }
        $('#response-message-container').html(resp.message);
        $('#response-message-container').addClass(resp.class);
      });
    } else {
      $('#response-message-container').html(
        'El accesorio seleccionado es invalido'
      );
      $('#response-message-container').addClass('error');
    }
  }
  