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
                <td>
                    <a class="gray_btn" href="#" onclick="eliminarWishlist(${article.ID},${idUser}); return false;">Eliminar</a>
                </td>
            `;

            subtotal+= parseInt(article.Precio);
            document.getElementById('wishlist').appendChild(articleTR);
        }

        let bottomButton = document.createElement('tr');
        bottomButton.className = "bottom_button";
        bottomButton.innerHTML = ` 
        <td>
            <a class="gray_btn" href="#">Efectuar Compra</a>
        </td>
        <td>
        
        ` ;       

        document.getElementById('wishlist').appendChild(bottomButton);
    });
}

function eliminarWishlist(IdArticle, idUser){
    const article = JSON.stringify({
        IdArticle,
        idUser
    });
    $.post('php/deleteWish.php', { article }, response => {
            let resp = JSON.parse(response);
            alert(resp.message);
            location.reload();
        });        
}

