function getConsolaData() {
    $.get('php/consultaConsolas.php', response => {
        let resp = JSON.parse(response);
        for (const consola of resp.data) {
            /* Create category table row for each category on the response */
            let consolaRow = document.createElement('tr');
            consolaRow.className = 'tr-shadow';
            consolaRow.innerHTML = `
              <td>
                  <label class="au-checkbox">
                      <input type="checkbox">
                      <span class="au-checkmark"></span>
                  </label>
              </td>
              <td id="consola-name-${consola.IdConsola}">${consola.Nombre}</td>
              <td id="consola-desc-${consola.IdConsola}" class="desc">${consola.IdMarca}</td>
              <td id="consola-desc-${consola.IdConsola}" class="desc">${consola.Descripcion}</td>

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
                      onclick = "location.href='editarConsola.html?IdConsola=${consola.IdConsola}'"
                  >
                      <i class="zmdi zmdi-edit"></i>
                  </button>
                  <button
                      class="item"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Delete"
                      onclick = "deleteConsola(${consola.IdConsola});"
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

            document.getElementById('listaConsola').appendChild(consolaRow);
            document.getElementById('listaConsola').appendChild(spacer);
        }
    });
}

function deleteConsola(consolaId) {
    let consola = {};
    consola.id = consolaId;
    var deletOptn = confirm("¿Desea eliminar la consola?");
    if (deletOptn == true) {
        if (consolaId) {
            consola = JSON.stringify(consola);
            $.post('php/bajaConsola.php', { consola }, response => {
                let resp = JSON.parse(response);
                location.reload();
            });
        }
    }
}