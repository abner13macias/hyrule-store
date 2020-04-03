function getImagenData() {
  $.get('php/consultaImagen.php', response => {
    let resp = JSON.parse(response);
    for (const imagen of resp.data) {
      /* Create category table row for each category on the response */
      let imagenRow = document.createElement('tr');
      imagenRow.className = 'tr-shadow';
      imagenRow.innerHTML = `
              <td>
                  <label class="au-checkbox">
                      <input type="checkbox">
                      <span class="au-checkmark"></span>
                  </label>
              </td>
              <td id="proveedor-name-${imagen.IdImagen}">${imagen.Direccion}</td>
              <td id="proveedor-desc-${imagen.IdImagen}" class="desc">${imagen.Direccion}</td>

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
                      onclick = "location.href='editarImagen.html?IdImagen=${imagen.IdImagen}'"
                  >
                      <i class="zmdi zmdi-edit"></i>
                  </button>
                  <button
                      class="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onclick = "deleteImagen(${imagen.IdImagen});"
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

      document.getElementById('listaImagen').appendChild(imagenRow);
      document.getElementById('listaimagen').appendChild(spacer);      
    }
  });
}

function deleteImagen(imagenID){        
    let imagen = {};    
    imagen.id = imagenID;
    var deletOptn = confirm("¿Desea eliminar la imagen?");
    if(deletOptn == true){
        if(proveedorId){
        imagen = JSON.stringify(imagen);
            $.post('php/bajaImagen.php', { imagen }, response => {
                let resp = JSON.parse(response);
                location.reload();
            });        
        }
    }    
}