function cargarTicket(){
    const idUser = localStorage.getItem("Id_Usuario");
    const compra = JSON.stringify({
        idUser
    });
    $.post('php/checkout.php', { compra }, response => {
        let resp = JSON.parse(response);
        var subtotal = 0;
        var idcarrito;
        for(const article of resp.data){
            let articleTR = document.createElement('li');
            articleTR.innerHTML = ` 
                <a href="#"> ${String(article.Nombre).slice(0,17)}<span class="middle">x ${article.Cantidad}</span> <span class="last">$${article.Subtotal}.00</span></a>
            `;
            subtotal+= parseInt(article.Subtotal);
            document.getElementById('ticket').appendChild(articleTR);
            idcarrito=article.IdCarrito;
        }

        let ticket2 = document.createElement('li');
        ticket2.innerHTML = ` 
        <a href="#">Subtotal <span>$${subtotal}.00</span></a>        
        ` ;       
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
         console.log(subtotal+105);
        
        const totalc = subtotal+105;
        const status = 'Finalizado';
        const fecha = '2020-19-05';

                                  paypal.Buttons({
                                      style: {
                                          shape: 'rect',
                                          color: 'gold',
                                          layout: 'vertical',
                                          label: 'paypal',
                                
                                      },
                                      createOrder: function(data, actions) {
                                        
                                        registrarventafinalizada(totalc,status,fecha,idcarrito);
                                          return actions.order.create({
                                              purchase_units: [{
                                                  amount: {
                                                      value: subtotal+105,
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

function registrarventafinalizada(totalc,status,fecha,idcarrito){
    const carrito = JSON.stringify({
        totalc,
        status,
        fecha,
        idcarrito
    });
    $.post('php/registrarventa.php',{ carrito }, response => {
        let resp = JSON.parse(response);
        
    });

    $.post('php/modificarstatuscarrito.php',{ carrito }, response => {
        let resp = JSON.parse(response);
        
    });


}