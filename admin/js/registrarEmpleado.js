function getEmployeeData() {
    $.get('php/consultaEmpleados.php', response => {
      let resp = JSON.parse(response);
      for (const employee of resp.data) {
        /* Create category table row for each category on the response */
        let employeeRow = document.createElement('tr');
        employeeRow.className = 'tr-shadow';
        employeeRow.innerHTML = `
                <td id="category-name-${employee.IdEmpleado}">${employee.Nombre}</td>
                <td id="category-desc-${employee.IdEmpleado}">${employee.ApellidoPaterno}</td>
                <td id="category-desc-${employee.IdEmpleado}">${employee.ApellidoMaterno}</td>
                <td id="category-desc-${employee.IdEmpleado}">${employee.Telefono}</td>
                <td id="category-desc-${employee.IdEmpleado}">${employee.NombreRol}</td>
                <td id="category-desc-${employee.IdEmpleado}">${employee.email}</td>
  
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
                        onclick = "location.href='editarEmpleado.html?IdEmpleado=${employee.IdEmpleado}'"
                    >
                        <i class="zmdi zmdi-edit"></i>
                    </button>
                    <button
                        class="item"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Delete"
                        onclick = "deleteEmployee(${employee.IdEmpleado});"
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
  
        document.getElementById('listaEmpleados').appendChild(employeeRow);
        document.getElementById('listaEmpleados').appendChild(spacer);      
      }
    });
  }
  
  function deleteEmployee(employeeId){        
      let employee = {};    
      employee.id = employeeId;
      var deletOptn = confirm("¿Desea eliminar al empleado?");
      if(deletOptn == true){
          if(employeeId){
          employee = JSON.stringify(employee);
              $.post('php/bajaEmpleado.php', { employee }, response => {
                  let resp = JSON.parse(response);
                  location.reload();
              });        
          }
      }    
  }