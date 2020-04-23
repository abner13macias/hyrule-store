function submitFormData() {
    const userName = $('input[name=name]').val();
    const ap_Patern = $('input[name=ap_Pat]').val();
    const ap_Matern = $('input[name=ap_Mat]').val();
    const pass = $('input[name=pass]').val();
    const address = $('input[name=address]').val();
    const phone = $('input[name=phone]').val();
    const email = $('input[name=email').val();
    const fecha_Nac = $('input[name=fecha_Nac').val();
    const fecha_Actual = hoyFecha();
    const user = JSON.stringify({
        userName,
        ap_Patern,
        ap_Matern,
        phone,
        email,
        pass,
        address,
        phone,
        fecha_Nac,
        fecha_Actual
    });
    $.post('php/registrarUsuario.php', { user }, response => {
        let resp = JSON.parse(response);
        console.log(resp.message);
        $('#response-message-container').html(resp.message);
        $('#response-message-container').addClass(resp.class);
    });
}

	
function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
	
function hoyFecha(){
    var hoy = new Date();
        var dd = hoy.getDate();
        var mm = hoy.getMonth()+1;
        var yyyy = hoy.getFullYear();
        
        dd = addZero(dd);
        mm = addZero(mm);
 
        return yyyy+'-'+mm+'-'+dd;
}