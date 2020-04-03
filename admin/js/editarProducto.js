function getProductoInfo() {
    const productoId = getQueryVariable('Idproducto');
    if (productoId) {
      $.post('php/obtieneCamposProducto.php', { productoId }, response => {
        let resp = JSON.parse(response);
        if (resp.data) {
          $('input[name=producto]').val(resp.data.Nombre);
          $('input[name=marca]').val(resp.data.Marca);
          getMarcaData(resp.data.Marca);
          $('input[name=proveedor]').val(resp.data.Proveedor);
          getProveedorData(resp.data.Proveedor);
          $('input[name=categoria]').val(resp.data.Categoria);
          getCategoriaData(resp.data.Categoria);
          $('input[name=consola]').val(resp.data.Consola);
          getConsolaData(resp.data.Consola);
        } else {
          $('#response-message-container').html(
            'No se pudo obtener la informacion del producto seleccionado'
          );
          $('#response-message-container').addClass('error');
        }
      });
    } else {
      $('#response-message-container').html(
        'No se pudo obtener la informacion de la producto seleccionada'
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
  
  function editProducto() {
    let producto = {};
    const productoId = getQueryVariable('Idproducto');
    if (productoId) {
        producto.id = productoId;
        producto.nombre = $('input[name=producto]').val();
        producto.marca=$('select[name=selectMarca]').val();
        producto.proveedor=$('select[name=selectProveedor]').val();
        producto.categoria=$('select[name=selectCategoria]').val();
        producto.consola=$('select[name=selectConsola]').val();
        producto = JSON.stringify(producto);
        console.log(producto.marca);
      $.post('php/modificarProducto.php', { producto }, response => {
        let resp = JSON.parse(response);
        if (resp.status === 200) {
            $('input[name=producto]').value = '';
            $('input[name=marca]').value = '';
            $('input[name=proveedor]').value = '';
            $('input[name=categoria]').value = '';
            $('input[name=Consola]').value = '';
         
        }
        $('#response-message-container').html(resp.message);
        $('#response-message-container').addClass(resp.class);
      });
    } else {
      $('#response-message-container').html(
        'El producto seleccionado es invalido'
      );
      $('#response-message-container').addClass('error');
    }
  }
  