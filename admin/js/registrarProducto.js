function getProductoData() {
    $.get('php/consultaProductos.php', response => {
      let resp = JSON.parse(response);
      for (const producto of resp.data) {
        /* Create producto table row for each marca on the response */
        let productoRow = document.createElement('tr');
        productoRow.className = 'tr-shadow';
  
        productoRow.innerHTML = `
                <td>
                    <label class="au-checkbox">
                        <input type="checkbox">
                        <span class="au-checkmark"></span>
                    </label>
                </td>
                <td id="producto-name-${producto.Idproducto}">${producto.Nombre}</td>
                <td id="producto-marca-${producto.Idproducto}" class="marca">${producto.Marca}</td>
                <td id="producto-proveedor-${producto.Idproducto}" class="proveedor">${producto.Proveedor}</td>
                <td id="producto-categoria-${producto.Idproducto}" class="categoria">${producto.Categoria}</td>
                <td id="producto-consola-${producto.Idproducto}" class="consola">${producto.Consola}</td>
                <td>
                    <div class="table-data-feature">
                    <button
                        class="item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Send"
                    >
                        <i class="zmdi zmdi-mail-send"></i>
                    </button>
                    <button
                        class="item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Edit"
                        onclick = "location.href='editarProducto.html?Idproducto=${producto.Idproducto}'"
                    >
                        <i class="zmdi zmdi-edit"></i>
                    </button>
                    <button
                        class="item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        onclick = "deleteProducto(${producto.Idproducto});"
                    >
                        <i class="zmdi zmdi-delete"></i>
                    </button>
                    <button
                        class="item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="More"
                    >
                        <i class="zmdi zmdi-more"></i>
                    </button>
                    </div>
                </td>
            `;
  
        /* Add table row spacer after each marca row */
        const spacer = document.createElement('tr');
        spacer.className = 'spacer';
  
        document.getElementById('listaProductos').appendChild(productoRow);
        document.getElementById('listaProductos').appendChild(spacer);
      }
    });
  }
  
  function deleteProducto(productoId){        
      let producto = {};    
      producto.id = productoId;
      var deletOptn = confirm("¿Desea eliminar el producto?");
      if(deletOptn == true){
          if(productoId){
            producto = JSON.stringify(producto);
              $.post('php/bajaProducto.php', { producto }, response => {
                  let resp = JSON.parse(response);
                  location.reload();
              });        
          }
      }    
  }