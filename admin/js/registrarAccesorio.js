function getAccesorioData() {
    $.get('php/consultaAccesorios.php', response => {
      let resp = JSON.parse(response);
      for (const accesorio of resp.data) {
        /* Create producto table row for each marca on the response */
        let accesorioRow = document.createElement('tr');
        accesorioRow.className = 'tr-shadow';
  
        accesorioRow.innerHTML = `
                <td>
                    <label class="au-checkbox">
                        <input type="checkbox">
                        <span class="au-checkmark"></span>
                    </label>
                </td>
                <td id="accesorio-name-${accesorio.Idaccesorio}">${accesorio.Nombre}</td>
                <td id="accesorio-marca-${accesorio.Idaccesorio}" class="marca">${accesorio.Marca}</td>
                <td id="accesorio-proveedor-${accesorio.Idaccesorio}" class="proveedor">${accesorio.Proveedor}</td>
                <td id="accesorio-categoria-${accesorio.Idaccesorio}" class="categoria">${accesorio.Categoria}</td>
                <td id="accesorio-consola-${accesorio.Idaccesorio}" class="coneccion">${accesorio.Conectividad}</td>
                <td id="accesorio-descripcion-${accesorio.Idaccesorio}">${accesorio.Descripcion}</td>
                <td id="accesorio-descripcion-${accesorio.Idaccesorio}">${accesorio.MeGusta}</td>
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
                        onclick = "location.href='editarAccesorio.html?Idaccesorio=${accesorio.Idaccesorio}'"
                    >
                        <i class="zmdi zmdi-edit"></i>
                    </button>
                    <button
                        class="item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        onclick = "deleteAccesorio(${accesorio.Idaccesorio});"
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
  
        document.getElementById('listaAccesorios').appendChild(accesorioRow);
        document.getElementById('listaAccesorios').appendChild(spacer);
      }
    });
  }
  
  function deleteAccesorio(accesorioId){        
      let accesorio = {};    
      accesorio.id = accesorioId;
      var deletOptn = confirm("¿Desea eliminar el producto?");
      if(deletOptn == true){
          if(accesorioId){
            accesorio = JSON.stringify(accesorio);
              $.post('php/bajaAccesorio.php', { accesorio }, response => {
                  let resp = JSON.parse(response);
                  location.reload();
              });        
          }
      }    
  }