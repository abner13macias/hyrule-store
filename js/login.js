function validarLogin(){
    const email = $('input[name=email]').val();
    const pass = $('input[name=name]').val();
    const user = JSON.stringify({
        email,
        pass
    });
    $.post('php/login.php', { user }, response => {
    });
}