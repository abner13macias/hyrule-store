function getMarcaData() {
  $.get('php/consultaMarcas.php', response => {
    let resp = JSON.parse(response);
    for (const marca of resp.data) {
      /* Create marca table row for each marca on the response */
      let marcaRow = document.createElement('tr');
      marcaRow.className = 'tr-shadow';

      marcaRow.innerHTML = `
              <td>
                  <label class="au-checkbox">
                      <input type="checkbox">
                      <span class="au-checkmark"></span>
                  </label>
              </td>
              <td id="marca-name-${marca.IdMarca}">${marca.Nombre}</td>
              <td id="marca-desc-${marca.IdMarca}" class="desc">${marca.Descripcion}</td>
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
                      onclick = "location.href='editarMarca.html?IdMarca=${marca.IdMarca}'"
                  >
                      <i class="zmdi zmdi-edit"></i>
                  </button>
                  <button
                      class="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
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

      document.getElementById('listaMarcas').appendChild(marcaRow);
      document.getElementById('listaMarcas').appendChild(spacer);
    }
  });
}

function deleteMarca(marcaId){        
    let marca = {};    
    marca.id = marcaId;
    var deletOptn = confirm("¿Desea eliminar la marca?");
    if(deletOptn == true){
        if(marcaId){
        marca = JSON.stringify(marca);
            $.post('php/bajaMarca.php', { marca }, response => {
                let resp = JSON.parse(response);
                location.reload();
            });        
        }
    }    
}