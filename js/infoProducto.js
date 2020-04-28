function getProductoInfo() {

    const productoId = getQueryVariable('IdProducto');
  
    if (productoId) {
  
      $.post('php/obtieneCamposProducto.php', { productoId }, response => {
  
        let resp = JSON.parse(response);
  
        if (resp.data) {
  
          $('h3[name=nombre]').val(resp.data.Nombre);
  
          $('h2[name=precio]').val(resp.data.Precio);

          $('a[name=categoria]').val(resp.data.Categoria);

          $('a[name=genero]').val(resp.data.Genero);

          $('h2[name=extra]').val(resp.data.Extra);

          $('p[name=Descripcion]').val(resp.data.Descripcion);
  
        } else {
  
          $('#response-message-container').html(
  
            'No se pudo obtener la informacion del producto seleccionado'
  
          );
  
          $('#response-message-container').addClass('error');
  
        }
  
      });
  
    } else {
  
      $('#response-message-container').html(
  
        'No se pudo obtener la informacion del producto seleccionado'
  
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
  
  
  
            