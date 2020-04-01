function getEmployeeInfo() {
    const employeeId = getQueryVariable('IdEmpleado');
    if (employeeId) {
      $.post('php/obtieneCamposEmpleado.php', { employeeId }, response => {
        let resp = JSON.parse(response);
        if (resp.data) {
          $('input[name=employee]').val(resp.data.Nombre);
          $('input[name=ap-p]').val(resp.data.ApellidoPaterno);
          $('input[name=ap-m]').val(resp.data.ApellidoMaterno);
          $('input[name=telefono]').val(resp.data.Telefono);
          $('input[name=email]').val(resp.data.email);
          $('input[name=rol]').val(resp.data.NombreRol);
          getRolData(resp.data.NombreRol);
        } else {
          $('#response-message-container').html(
            'No resp.data'
          );
          $('No se pudo obtener la informacion de la categoría seleccionada').addClass('error');
        }
      });
    } else {
      $('#response-message-container').html(
        'No se pudo obtener la informacion de la categoría seleccionada'
      );
      $('#response-message-container').addClass('error');
    }
  }
  
  
  function getQueryVariable(variableName) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (const i in vars) {
      let pair = vars[i].split('=');
      if (pair[0] === variableName) {
        return pair[1];
      }
    }
    return false;
  }
  
  function editEmployee() {
    let employee = {};
    const employeeId = getQueryVariable('IdEmpleado');
    if (employeeId) {
      employee.id = employeeId;
      employee.name = $('input[name=employee]').val();
      employee.patern = $('input[name=ap-p]').val();
      employee.matern = $('input[name=ap-m]').val();
      employee.phone = $('input[name=telefono]').val();
      employee.mail = $('input[name=email]').val();
      employee.rol = $('select[name=selectRol]').val();
      employee = JSON.stringify(employee);
      $.post('php/modificarEmpleado.php', { employee }, response => {
        let resp = JSON.parse(response);
        if (resp.status === 200) {
          $('input[name=employee]').value = '';
          $('input[name=ap-p]').value = '';
          $('input[name=ap-m]').value = '';
          $('input[name=telefono]').value = '';
          $('input[name=email]').value = '';
          $('input[name=rol]').value = '';
        }
        $('#response-message-container').html(resp.message);
        $('#response-message-container').addClass(resp.class);
      });
    } else {
      $('#response-message-container').html(
        'La categoría seleccionada es invalida'
      );
      $('#response-message-container').addClass('error');
    }
  }
  