function cargarTicket() {
    const idUser = localStorage.getItem("Id_Usuario");
    const compra = JSON.stringify({
        idUser
    });
    var nombreuser, emailuser, direccionuser;
    $.post('php/obtieneDatosUser.php', { compra }, response => {
        let resp = JSON.parse(response);
        if (resp.data) {
            $('input[name=name]').val(resp.data.Nombre);
            $('input[name=apepa]').val(resp.data.ApellidoPaterno);
            $('input[name=tel]').val(resp.data.Telefono);
            $('input[name=correo]').val(resp.data.Email);
            $('input[name=direccion]').val(resp.data.Direccion);
            nombreuser=resp.data.Nombre;
            emailuser=resp.data.Email;
            direccionuser=resp.data.Direccion;
        } else {
            $('#response-message-container').html(
                'No se pudo obtener la informacion del usuario seleccionado'
            );
            $('#response-message-container').addClass('error');
        }
    });

    $.post('php/checkout.php', { compra }, response => {
        let resp = JSON.parse(response);
        var subtotal = 0;
        var idcarrito;
        for (const article of resp.data) {
            let articleTR = document.createElement('li');
            articleTR.innerHTML = ` 
                <a href="#"> ${String(article.Nombre).slice(0,17)}<span class="middle">x ${article.Cantidad}</span> <span class="last">$${article.Subtotal}.00</span></a>
            `;
            subtotal += parseInt(article.Subtotal);
            document.getElementById('ticket').appendChild(articleTR);
            idcarrito = article.IdCarrito;
        }

        let ticket2 = document.createElement('li');
        ticket2.innerHTML = ` 
        <a href="#">Subtotal <span>$${subtotal}.00</span></a>        
        `;
        document.getElementById('ticket2').appendChild(ticket2);

        let envio = document.createElement('li');
        envio.innerHTML = `
        <a href="#">Envio <span>$105.00</span></a>
        `;
        document.getElementById('ticket2').appendChild(envio);

        let total = document.createElement('li');
        total.innerHTML = `
        <a href="#">Total <span>$${subtotal+105}</span></a>
        `;
        document.getElementById('ticket2').appendChild(total);
        console.log(subtotal + 105);

        const totalc = subtotal + 105;
        const status = 'Proceso';
        const fecha = '2020-19-05';

        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'paypal',

            },
            createOrder: function(data, actions) {

                registrarventafinalizada(totalc, status, fecha, idcarrito, nombreuser,emailuser,direccionuser);
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: subtotal + 105,
                        }
                    }]
                });
            },

            onApprove: function(data, actions) {




                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }
        }).render('#paypal-button-container');

    });


}


function registrarventafinalizada(totalc, status, fecha, idcarrito, nombreuser, emailuser, direccionuser) {
    var idventa, fechav;
    const carrito = JSON.stringify({
        totalc,
        status,
        fecha,
        idcarrito,
        nombreuser,
        emailuser,
        direccionuser
    });
    $.post('php/registrarventa.php', { carrito }, response => {
        let resp = JSON.parse(response);

    });

    $.post('php/modificarstatuscarrito.php', { carrito }, response => {
        let resp = JSON.parse(response);

    });

    $.post('php/consultaridventa.php', { carrito }, response => {
        let resp = JSON.parse(response);
        if (resp.data) {
            idventa=resp.data.Id_Venta;
            fechav=resp.data.Fecha;
            console.log(idventa);
            console.log(fechav);
            enviarcorreo(nombreuser, emailuser, direccionuser,idventa,fechav);
        } else {
            console.log("Error consultando id venta");
        }
    });

    
}

function enviarcorreo(nombreuser, emailuser, direccionuser,idventa,fechav){
    const carritoventa = JSON.stringify({
        nombreuser,
        emailuser,
        direccionuser,
        idventa,
        fechav
    });
    console.log(carritoventa);
    $.post('php/enviarcorreoventa.php', { carritoventa }, response => {
        

    });
}

function datosdelcliente() {
    const Id_Usuario = localStorage.getItem("Id_Usuario");
    var nombreusu;
    var apePa;
    var apeMa;
    var direccion;
    var email;

}