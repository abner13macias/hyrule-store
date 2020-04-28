function getProductData() {
    $.get('php/productos.php', response => {
      let resp = JSON.parse(response);
      console.log(resp.data);

      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6';

        let singleProduct = document.createElement('div');
        singleProduct.className = 'single-product';        
        singleProduct.innerHTML = `
                <a href="single-product.html?product=${product.IdProducto}">
                <img class="img-fluid" src="${product.Direccion}" alt="">
                </a>
                <div class="product-details">
                    <a href="single-product.html?IdProducto=${product.IdProducto}">
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
                        <a href class="social-info" onclick="addWishList(${product.IdProducto})">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="single-product.html?IdProduct=${product.IdProducto}" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">Ver más</p>
                        </a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('productos').appendChild(productDiv);
      }
    });
  }

  function addWishList(idProducto){
    const IdProduct = idProducto;
    const product = JSON.stringify({
        IdProduct
    });
    $.post('php/wishlist.php', { product }, response => {
        let resp = JSON.parse(response);
        alert(resp.message);
    });
  }

  function addCart(){
  }