function getCompraData() {
    $.get('php/consultaCompras.php', response => {
        let resp = JSON.parse(response);
        for (const compra of resp.data) {
            /* Create category table row for each category on the response */
            let compraRow = document.createElement('tr');
            compraRow.className = 'tr-shadow';
            compraRow.innerHTML = `
                <td>${compra.Id_Compra}</td>
                <td>${compra.Id_Proveedor}</td>
                <td>${compra.Total}</td> 
                <td>${compra.Fecha}</td>

                           
            `;

            /* Add table row spacer after each category row */
            const spacer = document.createElement('tr');
            spacer.className = 'spacer';

            document.getElementById('listaCompras').appendChild(compraRow);
            document.getElementById('listaCompras').appendChild(spacer);
        }
    });
}