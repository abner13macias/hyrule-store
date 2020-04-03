function getCarritoData() {
    $.get('php/consultaCarrito.php', response => {
        let resp = JSON.parse(response);
        for (const cart of resp.data) {
            /* Create category table row for each category on the response */
            let cartRow = document.createElement('tr');
            cartRow.className = 'tr-shadow';
            cartRow.innerHTML = `
                <td>${cart.IdCarrito}</td>
                <td>${cart.IdArticulo}</td>
                <td>${cart.IdUsuario}</td> 
                <td>${cart.Cantidad}</td>
                <td>${cart.Subtotal}</td> 
                <td>${cart.IdVenta}</td>


                           
            `;

            /* Add table row spacer after each category row */
            const spacer = document.createElement('tr');
            spacer.className = 'spacer';

            document.getElementById('listaCarrito').appendChild(compraRow);
            document.getElementById('listaCarrito').appendChild(spacer);
        }
    });
}