function cargarTicket(){
    const idUser = localStorage.getItem("Id_Usuario");
    const compra = JSON.stringify({
        idUser
    });
    $.post('php/checkout.php', { compra }, response => {
        let resp = JSON.parse(response);
        var subtotal = 0;
        for(const article of resp.data){
            let articleTR = document.createElement('li');
            articleTR.innerHTML = ` 
                <a href="#"> ${String(article.Nombre).slice(0,17)}<span class="middle">x ${article.Cantidad}</span> <span class="last">$${article.Subtotal}.00</span></a>
            `;
            subtotal+= parseInt(article.Subtotal);
            document.getElementById('ticket').appendChild(articleTR);
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
    });
}