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
  }
  