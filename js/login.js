function validarLogin() {
  const email = $('input[name=email]').val();
  const pass = $('input[name=password]').val();
  const user = JSON.stringify({
    email,
    pass,
  });
  $.post('php/login.php', { user }, (response) => {
    let resp = JSON.parse(response);
    console.log(resp.idUser);
    console.log(resp.message);
  });
}

function setToLocalStorage() {
  try {
    const idUser = getQueryVariable('Id_Usuario');
    if (idUser) {
      localStorage.setItem('Id_Usuario', idUser);
    }
    console.log(localStorage.getItem('Id_Usuario'));
  } catch (error) {}
}

function sendEmail() {
  const email = getQueryVariable('email');
  localStorage.setItem('email', email);
  const idUser = getQueryVariable('Id_Usuario');
  const PIN = Math.floor(Math.random() * (9999 - 1000) + 1000);
  const user = JSON.stringify({
    email,
    idUser,
    PIN,
  });
  $.post('php/enviarCorreo.php', { user }, (response) => {
    let resp = JSON.parse(response);
    console.log(resp.message);
  });
}

function validarPIN() {
  const idUser = getQueryVariable('Id_Usuario');
  const PIN = $('input[name=pin]').val();
  console.log(idUser);
  console.log(PIN);
  const user = JSON.stringify({
    idUser,
    PIN,
  });
  $.post('php/validarPIN.php', { user }, (response) => {
    let resp = JSON.parse(response);
    if (resp.message == 'Se encontró el PIN') {
      window.location.href = 'index.html?Id_Usuario=' + idUser;
    } else {
      alert('PIN Incorrecto');
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

function logOut() {
  localStorage.removeItem('Id_Usuario');
  window.location = 'index.html';
}

function validarSesion() {
  const idUser = localStorage.getItem('Id_Usuario');
  if (!idUser) {
    alert("Debes iniciar sesión primero!");
    window.location.href = 'login.html';
  }
}

function validarSesionLogin(){
  const idUser = localStorage.getItem('Id_Usuario');
  if (idUser) {
    
    window.location.href = 'index.html';
  }
}