function getProductData() {
    $.get('php/productos.php', response => {
      let resp = JSON.parse(response);

      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6';

        let singleProduct = document.createElement('div');
        singleProduct.className = 'single-product';        
        singleProduct.innerHTML = `
                <a href="single-product.html?product=${product.IdArticulo}">
                <img class="img-fluid" src="${product.Direccion}" alt="">
                </a>
                <div class="product-details">
                    <a href="single-product.html?IdProducto=${product.IdArticulo}">
                    <h6>${product.Nombre}</h6>
                        </a>
                <div class="price">
                    <h6>$${product.Precio}</h6>
                    </div>
                    <div class="prd-bottom">

                        <a href="" class="social-info">
                            <span class="ti-bag"></span>
                            <p class="hover-text">Carrito</p>
                        </a>
                        <button class="social-info" onclick="addWishList(${product.IdArticulo})">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </button>
                        <a href="single-product.html?IdProduct=${product.IdArticulo}" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">Ver más</p>
                        </a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('productos').appendChild(productDiv);
      }
    });
  }

function addWishList(idArticulo){
    const idArticle = idArticulo;
    const idUser = localStorage.getItem("Id_Usuario");
    const article = JSON.stringify({
        idArticle,
        idUser
    });
    console.log(article);
    $.post('php/wishlist.php', { article }, response => {
        let resp = JSON.parse(response);
        alert(resp.message);
    });
}

  function addCart(){
  }

  function getQueryVariable(variableName) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (const i in vars) {
      let pair = vars[i].split('=');
      if (pair[0] === variableName) {
        return pair[1];
      }
    }
    return false;
  }