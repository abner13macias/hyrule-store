function getProveedorData() {
  $.get('php/consultaProveedor.php', response => {
    let resp = JSON.parse(response);
    for (const proveedor of resp.data) {
      /* Create category table row for each category on the response */
      let proveedorRow = document.createElement('tr');
      proveedorRow.className = 'tr-shadow';
      proveedorRow.innerHTML = `
              <td>
                  <label class="au-checkbox">
                      <input type="checkbox">
                      <span class="au-checkmark"></span>
                  </label>
              </td>
              <td id="proveedor-name-${proveedor.Id_Proveedor}">${proveedor.Nombre}</td>
              <td id="proveedor-desc-${proveedor.Id_Proveedor}" class="desc">${proveedor.Direccion}</td>
              <td id="proveedor-desc-${proveedor.Id_Proveedor}" class="desc">${proveedor.Telefono}</td>

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
                      onclick = "location.href='editarProveedor.html?Id_Proveedor=${proveedor.Id_Proveedor}'"
                  >
                      <i class="zmdi zmdi-edit"></i>
                  </button>
                  <button
                      class="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onclick = "deleteProveedor(${proveedor.Id_Proveedor});"
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

      /* Add table row spacer after each category row */
      const spacer = document.createElement('tr');
      spacer.className = 'spacer';

      document.getElementById('listaProveedor').appendChild(proveedorRow);
      document.getElementById('listaProveedor').appendChild(spacer);      
    }
  });
}

function deleteProveedor(proveedorId){        
    let proveedor = {};    
    proveedor.id = proveedorId;
    var deletOptn = confirm("¿Desea eliminar el proveedor?");
    if(deletOptn == true){
        if(proveedorId){
        proveedor = JSON.stringify(proveedor);
            $.post('php/bajaProveedor.php', { proveedor }, response => {
                let resp = JSON.parse(response);
                location.reload();
            });        
        }
    }    
}