function getMarcaData(marcaName) {

    $.get('php/cargaMarcas.php', response => {

      let resp = JSON.parse(response);

      

      let marcaRow = document.createElement('select');

      marcaRow.className = 'js-select2';

      marcaRow.name= 'selectMarca';

      for (const marca of resp.data) {

          let option = document.createElement('option');

          option.value = marca.IdMarca;

          if(marcaName===marca.Nombre){

            option.selected = 'selected';

          }

          console.log(option.value);

          let optionText = document.createTextNode(marca.Nombre);

          option.appendChild(optionText);

          marcaRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('marcaSelect').appendChild(marcaRow);

      document.getElementById('marcaSelect').appendChild(dropdown);

    });

  }



  function getMarcaDataDefault() {

    $.get('php/cargaMarcas.php', response => {

      let resp = JSON.parse(response);

      

      let marcaRow = document.createElement('select');

      marcaRow.className = "js-select2";

      marcaRow.name= 'selectMarca';

      for (const marca of resp.data) {

          let option = document.createElement('option');

          option.value = marca.IdMarca;

          console.log(option.value);

          let optionText = document.createTextNode(marca.Nombre);

          option.appendChild(optionText);

          marcaRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('marcaSelect').appendChild(marcaRow);

      document.getElementById('marcaSelect').appendChild(dropdown);

    });

  }

  function getProveedorData(proveedorName) {

    $.get('php/cargaProveedor.php', response => {

      let resp = JSON.parse(response);

      

      let proveedorRow = document.createElement('select');

      proveedorRow.className = 'js-select2';

      proveedorRow.name= 'selectProveedor';

      for (const proveedor of resp.data) {

          let option = document.createElement('option');

          option.value = proveedor.IdProveedor;

          if(proveedorName===proveedor.Nombre){

            option.selected = 'selected';

          }

          console.log(option.value);

          let optionText = document.createTextNode(proveedor.Nombre);

          option.appendChild(optionText);

          proveedorRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('proveedorSelect').appendChild(proveedorRow);

      document.getElementById('proveedorSelect').appendChild(dropdown);

    });

  }



  function getProveedorDataDefault() {

    $.get('php/cargaProveedor.php', response => {

      let resp = JSON.parse(response);

      

      let proveedorRow = document.createElement('select');

      proveedorRow.className = "js-select2";

      proveedorRow.name= 'selectProveedor';

      for (const proveedor of resp.data) {

          let option = document.createElement('option');

          option.value =proveedor.IdProveedor;

          console.log(option.value);

          let optionText = document.createTextNode(proveedor.Nombre);

          option.appendChild(optionText);

          proveedorRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('proveedorSelect').appendChild(proveedorRow);

      document.getElementById('proveedorSelect').appendChild(dropdown);

    });

  }

  function getCategoriaData(categoriaName) {

    $.get('php/cargaCategoria.php', response => {

      let resp = JSON.parse(response);

      

      let categoriaRow = document.createElement('select');

      categoriaRow.className = 'js-select2';

      categoriaRow.name= 'selectCategoria';

      for (const categoria of resp.data) {

          let option = document.createElement('option');

          option.value = categoria.IdCategoria;

          if(categoriaName===categoria.Nombre){

            option.selected = 'selected';

          }

          console.log(option.value);

          let optionText = document.createTextNode(categoria.Nombre);

          option.appendChild(optionText);

          categoriaRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('categoriaSelect').appendChild(categoriaRow);

      document.getElementById('categoriaSelect').appendChild(dropdown);

    });

  }



  function getCategoriaDataDefault() {

    $.get('php/cargaCategoria.php', response => {

      let resp = JSON.parse(response);

      

      let categoriaRow = document.createElement('select');

      categoriaRow.className = "js-select2";

      categoriaRow.name= 'selectCategoria';

      for (const categoria of resp.data) {

          let option = document.createElement('option');

          option.value =categoria.IdCategoria;

          console.log(option.value);

          let optionText = document.createTextNode(categoria.Nombre);

          option.appendChild(optionText);

          categoriaRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('categoriaSelect').appendChild(categoriaRow);

      document.getElementById('categoriaSelect').appendChild(dropdown);

    });

  }

  function getConsolaData(consolaName) {

    $.get('php/cargaConsola.php', response => {

      let resp = JSON.parse(response);

      

      let consolaRow = document.createElement('select');

      consolaRow.className = 'js-select2';

      consolaRow.name= 'selectConsola';

      for (const consola of resp.data) {

          let option = document.createElement('option');

          option.value = consola.IdConsola;

          if(consolaName===consola.Nombre){

            option.selected = 'selected';

          }

          console.log(option.value);

          let optionText = document.createTextNode(consola.Nombre);

          option.appendChild(optionText);

          consolaRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('consolaSelect').appendChild(consolaRow);

      document.getElementById('consolaSelect').appendChild(dropdown);

    });

  }



  function getConsolaDataDefault() {

    $.get('php/cargaConsola.php', response => {

      let resp = JSON.parse(response);

      

      let consolaRow = document.createElement('select');

      consolaRow.className = "js-select2";

      consolaRow.name= 'selectConsola';

      for (const consola of resp.data) {

          let option = document.createElement('option');

          option.value =consola.IdConsola;

          console.log(option.value);

          let optionText = document.createTextNode(consola.Nombre);

          option.appendChild(optionText);

          consolaRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('consolaSelect').appendChild(consolaRow);

      document.getElementById('consolaSelect').appendChild(dropdown);

    });

  }

  function getGeneroDataDefault() {

    $.get('php/cargaGenero.php', response => {

      let resp = JSON.parse(response);

      

      let generoRow = document.createElement('select');

      generoRow.className = "js-select2";

      generoRow.name= 'selectGenero';

      for (const genero of resp.data) {

          let option = document.createElement('option');

          option.value =genero.IdGenero;

          console.log(option.value);

          let optionText = document.createTextNode(genero.Nombre);

          option.appendChild(optionText);

          generoRow.appendChild(option);

      }



      let dropdown = document.createElement('div');

      dropdown.className = 'dropDownSelect2';



      document.getElementById('generoSelect').appendChild(generoRow);

      document.getElementById('generoSelect').appendChild(dropdown);

    });

  }