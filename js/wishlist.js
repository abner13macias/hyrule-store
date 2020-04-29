function cargarWishList(){
    const idUser = localStorage.getItem("Id_Usuario");
    const user = JSON.stringify({
        idUser
    });
    $.post('php/getWishlist.php', { user }, response => {
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
                    <h5>$${article.Precio}</h5>
                </td>
                <td>
                    <h5>${article.Descripcion}</h5>
                </td>
            `;

            subtotal+= parseInt(article.Precio);
            document.getElementById('wishlist').appendChild(articleTR);
        }

        let bottomButton = document.createElement('tr');
        bottomButton.className = "bottom_button";
        bottomButton.innerHTML = ` 
        <td>
            <a class="gray_btn" href="wishlist.html">Actualizar carrito</a>
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
        ` ;

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
        <td>
            <h5>Envio</h5>
        </td>
        <td>
            <div class="shipping_box">
                <ul class="list">
                    <li><a href="#">Envio FULL $250.00</a></li>
                    <li><a href="#">Envio gratis</a></li>
                    <li><a href="#">Envio a sucursal $120.00</a></li>
                    <li class="active"><a href="#">: $2.00</a></li>
                </ul>
                <h6>Calcular envio <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                <select class="shipping_select">
                    <option value="1">Seleccionar Estado</option>
                    <option value="2">Seleccionar Estado</option>
                    <option value="4">Seleccionar Estado</option>
                </select>
                <input type="text" placeholder="Codigo Postal">
                <a class="gray_btn" href="#">Actualizar Direccion</a>
            </div>
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
                <a class="gray_btn" href="#">Continuar comprando</a>
                <a class="primary-btn" href="#">Checkout</a>
            </div>
        </td>
        `;

        document.getElementById('wishlist').appendChild(bottomButton);
        document.getElementById('wishlist').appendChild(subtotalTR);
        document.getElementById('wishlist').appendChild(shipping);
        document.getElementById('wishlist').appendChild(outButton);
    });
}