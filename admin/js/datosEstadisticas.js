function getUserRegistrados() {
  $.post('php/obtieneEstadisticasUser.php', response => {
    let resp = JSON.parse(response);
    for (const user of resp.data) {
      var container = document.getElementById('txtuser');
      container.className = 'text';
      container.innerHTML = `<h2>${user.Cantidad}</h2><span>Usuarios Registrados</span>`;
    }
  });

  $.post('php/obtieneEstadisticasVentas.php', response => {
    let resp = JSON.parse(response);
    for (const user of resp.data) {
      var container = document.getElementById('txtventas');
      container.className = 'text';
      container.innerHTML = `<h2>${user.Cantidad}</h2><span>Productos vendidos</span>`;
    }
  });

  $.post('php/obtieneEstadisticasProductos.php', response => {
    let resp = JSON.parse(response);
    for (const user of resp.data) {
      var container = document.getElementById('txtproductos');
      container.className = 'text';
      container.innerHTML = `<h2>${user.Cantidad}</h2><span>Productos en stock</span>`;
    }
  });

  $.post('php/obtieneEstadisticasIngresos.php', response => {
    let resp = JSON.parse(response);
    for (const user of resp.data) {
      var container = document.getElementById('txtingresos');
      container.className = 'text';
      container.innerHTML = `<h2>${user.Cantidad}</h2><span>Ingresos Totales</span>`;
    }
  });


  const categoryId = getQueryVariable2('IdEmpleado');
  console.log(categoryId);
  $.post('php/obtieneDatosAdmin.php', { categoryId }, response => {
    let resp = JSON.parse(response);
    for (const user of resp.data) {
      var container = document.getElementById('nombreuser');
      container.className = 'content';
      container.innerHTML = `<a class="js-acc-btn" href="#">${user.Nombre}</a>`;

      var container2 = document.getElementById('nombreuser2');
      container2.className = 'content';
      container2.innerHTML = `<h5 class="name"><a href="#">${user.Nombre}</a></h5><span class="email">${user.email}</span>`;

      var container3 = document.getElementById('cuentauser');
      container3.className = 'account-dropdown__item';
      container3.innerHTML = `<a href="editarEmpleado.html?IdEmpleado=${user.IdEmpleado}"><i class="zmdi zmdi-account"></i>Cuenta</a>`;

    }
  });

  }
  
function getQueryVariable2(variableName) {
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
  