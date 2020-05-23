function cargarCarrito(){
    const idUser = localStorage.getItem("Id_Usuario");
    const user = JSON.stringify({
        idUser
    });
    $.post('php/getCart.php', { user }, response => {
        let resp = JSON.parse(response);
        var subtotal = 0;
        for(const article of resp.data){
            let articleTR = document.createElement('tr');
            articleTR.innerHTML = ` 
                <td>
                    <div class="media">
                        <div class="d-flex">
                            <img src="${article.Direccion}" height="200" width="150" alt="">
                        </div>
                        <div class="media-body">
                            <p>${article.Nombre}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <h5>$${article.Subtotal}</h5>
                </td>
                <td>
                    <div class="product_count">
                        <p>${article.Descripcion} </p>
                    </div>
                </td>                
                <td>
                <a class="gray_btn" href="#" onclick="eliminarCarrito(${article.ID},${idUser}); return false;">Eliminar</a>
                </td>
            `;

            subtotal+= parseInt(article.Subtotal);
            document.getElementById('carrito').appendChild(articleTR);
        }

        //let bottomButton = document.createElement('tr');
        //bottomButton.className = "bottom_button";
        /*bottomButton.innerHTML = ` 
        <td>
            <a class="gray_btn" href="carrito.html">Actualizar carrito</a>
        </td>
        <td>

        </td>
        <td>

        </td>
        <td>
            <div class="cupon_text d-flex align-items-center">
                <input type="text" placeholder="Coupon Code">
                <a class="primary-btn" href="#">Apply</a>
            </div>
        </td>
        ` ;*/

        let subtotalTR = document.createElement('tr');
        subtotalTR.innerHTML = `
        <td>
            <h5>Subtotal</h5>
        </td>
        <td>
            <h5>$${subtotal}</h5>
        </td>
        `;

        let shipping = document.createElement('tr');
        shipping.className = "shipping_area";
        shipping.innerHTML = `
        <td>
        </td>
        <td>

        </td>
        
        `;

        let outButton = document.createElement('tr');
        outButton.className = "out_button_area";
        outButton.innerHTML = `
        <td>
        </td>
        <td>

        </td>
        <td>

        </td>
        <td>
            <div class="checkout_btn_inner d-flex align-items-center">
                <a class="gray_btn" href="category.html">Continuar comprando</a>
                <a class="primary-btn" href="checkout.html">Checkout</a>
            </div>
        </td>
        `;

       // document.getElementById('carrito').appendChild(bottomButton);
        document.getElementById('carrito').appendChild(subtotalTR);
        document.getElementById('carrito').appendChild(shipping);
        document.getElementById('carrito').appendChild(outButton);
    });
}

function eliminarCarrito(IdArticle, idUser){
    const article = JSON.stringify({
        IdArticle,
        idUser
    });
    $.post('php/deleteCart.php', { article }, response => {
            let resp = JSON.parse(response);
            alert(resp.message);
            location.reload();
        });    
}