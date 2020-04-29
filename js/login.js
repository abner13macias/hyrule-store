function validarLogin(){
    const email = $('input[name=email]').val();
    const pass = $('input[name=password]').val();
    const user = JSON.stringify({
        email,
        pass
    });
    $.post('php/login.php', { user }, response => {
        let resp = JSON.parse(response);
        console.log(resp.idUser);
        console.log(resp.message);
    });
}

function setToLocalStorage(){
    try{        
        const idUser = getQueryVariable("Id_Usuario");
        if(idUser){
            localStorage.setItem("Id_Usuario", idUser);
        }
        console.log(localStorage.getItem("Id_Usuario"));
    }
    catch(error){

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

function logOut(){
    localStorage.removeItem("Id_Usuario");
    window.location = "index.html"
}
