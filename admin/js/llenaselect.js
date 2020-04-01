function getRolData(rolName) {
    $.get('php/cargaRoles.php', response => {
      let resp = JSON.parse(response);
      
      let rolRow = document.createElement('select');
      rolRow.className = 'js-select2';
      rolRow.name= 'selectRol';
      for (const rol of resp.data) {
          let option = document.createElement('option');
          option.value = rol.Id_Rol;
          if(rolName===rol.NombreRol){
            option.selected = 'selected';
          }
          let optionText = document.createTextNode(rol.NombreRol);
          option.appendChild(optionText);
          rolRow.appendChild(option);
      }

      let dropdown = document.createElement('div');
      dropdown.className = 'dropDownSelect2';

      document.getElementById('rolSelect').appendChild(rolRow);
      document.getElementById('rolSelect').appendChild(dropdown);
    });
  }

  function getRolDataDefault() {
    $.get('php/cargaRoles.php', response => {
      let resp = JSON.parse(response);
      
      let rolRow = document.createElement('select');
      rolRow.className = "js-select2";
      rolRow.name= 'selectRol';
      for (const rol of resp.data) {
          let option = document.createElement('option');
          option.value = rol.Id_Rol;
          let optionText = document.createTextNode(rol.NombreRol);
          option.appendChild(optionText);
          rolRow.appendChild(option);
      }

      let dropdown = document.createElement('div');
      dropdown.className = 'dropDownSelect2';

      document.getElementById('rolSelect').appendChild(rolRow);
      document.getElementById('rolSelect').appendChild(dropdown);
    });
  }