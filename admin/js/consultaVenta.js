function getVentaData() {
    $.get('php/consultaVenta.php', response => {
        let resp = JSON.parse(response);
        for (const venta of resp.data) {
            /* Create category table row for each category on the response */
            let ventaRow = document.createElement('tr');
            ventaRow.className = 'tr-shadow';
            ventaRow.innerHTML = `
                <td>${venta.Id_venta}</td>
                <td>${venta.Id_Usuario}</td>
                <td>${venta.Id_empleado}</td> 
                <td>${venta.Total}</td>
                <td>${venta.Status}</td> 
                <td>${venta.Fecha}</td>

                           
            `;

            /* Add table row spacer after each category row */
            const spacer = document.createElement('tr');
            spacer.className = 'spacer';

            document.getElementById('listaVenta').appendChild(ventaRow);
            document.getElementById('listaVenta').appendChild(spacer);
        }
    });
}