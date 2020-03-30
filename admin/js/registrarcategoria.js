function getCategoryData() {
  $.get('php/consultaCategorias.php', response => {
    let resp = JSON.parse(response);
    for (const category of resp.data) {
      /* Create category table row for each category on the response */
      let categoryRow = document.createElement('tr');
      categoryRow.className = 'tr-shadow';

      categoryRow.innerHTML = `
              <td>
                  <label class="au-checkbox">
                      <input type="checkbox">
                      <span class="au-checkmark"></span>
                  </label>
              </td>
              <td id="category-name-${category.IdCategoria}">${category.Nombre}</td>
              <td id="category-desc-${category.IdCategoria}" class="desc">${category.Descripcion}</td>

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
                      onclick = "location.href='editarCategoria.html?IdCategoria=${category.IdCategoria}'"
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

      /* Add table row spacer after each category row */
      const spacer = document.createElement('tr');
      spacer.className = 'spacer';

      document.getElementById('listaCategorias').appendChild(categoryRow);
      document.getElementById('listaCategorias').appendChild(spacer);
    }
  });
}