function getProveedorData() {
  $.get('php/consultaCorreos.php', response => {
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
              <td id="proveedor-name-${proveedor.IdCorreo}">${proveedor.Nombre}</td>
              <td id="proveedor-desc-${proveedor.IdCorreo}" class="desc">${proveedor.Correo}</td>
              <td id="proveedor-desc-${proveedor.IdCorreo}" class="desc">${proveedor.Mensaje}</td>
              <td id="proveedor-desc-${proveedor.IdCorreo}" class="desc">${proveedor.Status}</td>

              <td>
                  <div class="table-data-feature">
                  <button
                      class="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Send"
                      onclick = "location.href='editarCorreo.html?IdCorreo=${proveedor.IdCorreo}'"
                  >
                      <i class="zmdi zmdi-mail-send"></i>
                  </button>
                  
                  <button
                      class="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onclick = "deleteProveedor(${proveedor.IdCorreo});"
                  >
                      <i class="zmdi zmdi-delete"></i>
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
    var deletOptn = confirm("¿Desea eliminar el correo?");
    if(deletOptn == true){
        if(proveedorId){
        proveedor = JSON.stringify(proveedor);
            $.post('php/bajaCorreo.php', { proveedor }, response => {
                let resp = JSON.parse(response);
                location.reload();
            });        
        }
    }    
}