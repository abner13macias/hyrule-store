function getUsersData() {
    $.get('php/consultaUsuarios.php', response => {
      let resp = JSON.parse(response);
      for (const user of resp.data) {
        /* Create category table row for each category on the response */
        let userRow = document.createElement('tr');
        userRow.className = 'tr-shadow';
        userRow.innerHTML = `
                <td>${user.Nombre}</td>
                <td>${user.ApellidoPaterno}</td>
                <td>${user.ApellidoMaterno}</td>
                <td>${user.Direccion}</td>
                <td>${user.Telefono}</td>
                <td>${user.Email}</td>                
            `;
  
        /* Add table row spacer after each category row */
        const spacer = document.createElement('tr');
        spacer.className = 'spacer';
  
        document.getElementById('listaUsuarios').appendChild(userRow);
        document.getElementById('listaUsuarios').appendChild(spacer);      
      }
    });
  }
  