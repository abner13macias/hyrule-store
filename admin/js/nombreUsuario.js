function getDatosUsuario() {
  console.log("hol");
  //const categoryId = getQueryVariable('IdEmpleado');
    $.post('php/obtieneDatosAdmin.php', response => {
      let resp = JSON.parse(response);
      if (resp.data) {
        var container = document.getElementById('nombreuser');
        container.className = 'content';
        container.innerHTML = `<a class="js-acc-btn" href="#">all${resp.data.Nombre}</a>`;
      }
    });

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


