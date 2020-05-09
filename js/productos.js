function getProductData() {
  const searchm = getQueryVariable('search_input');
  const searchg = getQueryVariable('IdGenero');
  const searchc = getQueryVariable('IdCategoria');
  const searchmm = getQueryVariable('IdMarca');
  console.log(searchm);
  console.log(searchc);
  console.log(searchg);
  console.log(searchmm);
  if(searchmm!=""){
    const busquedam = JSON.stringify({
      searchmm
    });
    $.post('php/productosm.php', { busquedam }, response => {
      let resp = JSON.parse(response);
      console.log(resp.message);
      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6';

        let singleProduct = document.createElement('div');
        singleProduct.className = 'single-product';        
        singleProduct.innerHTML = `
                <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                <img class="img-fluidcategory" src="${product.Direccion}" alt="">
                </a>
                <div class="product-details">
                    <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                    <h6>${product.Nombre}</h6>
                        </a>
                <div class="price">
                    <h6>$${product.Precio}</h6>
                    </div>
                    <div class="prd-bottom">

                        <a href="#" class="social-info" onclick="addCart(${product.IdArticulo}); return false;">
                            <span class="ti-bag"></span>
                            <p class="hover-text">Carrito</p>
                        </a>
                        <a href="#" class="social-info" onclick="addWishList(${product.IdArticulo}); return false;">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="single-product.html?IdArticulo=${product.IdArticulo}" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">Ver más</p>
                        </a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('productos').appendChild(productDiv);
      }
    });
  }
  else if(searchc!=""){
    const busquedac = JSON.stringify({
      searchc
    });
    $.post('php/productosc.php', { busquedac }, response => {
      let resp = JSON.parse(response);
      console.log(resp.message);
      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6';

        let singleProduct = document.createElement('div');
        singleProduct.className = 'single-product';        
        singleProduct.innerHTML = `
                <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                <img class="img-fluidcategory" src="${product.Direccion}" alt="">
                </a>
                <div class="product-details">
                    <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                    <h6>${product.Nombre}</h6>
                        </a>
                <div class="price">
                    <h6>$${product.Precio}</h6>
                    </div>
                    <div class="prd-bottom">

                        <a href="#" class="social-info" onclick="addCart(${product.IdArticulo}); return false;">
                            <span class="ti-bag"></span>
                            <p class="hover-text">Carrito</p>
                        </a>
                        <a href="#" class="social-info" onclick="addWishList(${product.IdArticulo}); return false;">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="single-product.html?IdArticulo=${product.IdArticulo}" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">Ver más</p>
                        </a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('productos').appendChild(productDiv);
      }
    });
  }
  else if(searchg!=""){
    const busquedag = JSON.stringify({
      searchg
    });
    $.post('php/productosg.php', { busquedag }, response => {
      let resp = JSON.parse(response);
      console.log(resp.message);
      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6';

        let singleProduct = document.createElement('div');
        singleProduct.className = 'single-product';        
        singleProduct.innerHTML = `
                <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                <img class="img-fluidcategory" src="${product.Direccion}" alt="">
                </a>
                <div class="product-details">
                    <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                    <h6>${product.Nombre}</h6>
                        </a>
                <div class="price">
                    <h6>$${product.Precio}</h6>
                    </div>
                    <div class="prd-bottom">

                        <a href="#" class="social-info" onclick="addCart(${product.IdArticulo}); return false;">
                            <span class="ti-bag"></span>
                            <p class="hover-text">Carrito</p>
                        </a>
                        <a href="#" class="social-info" onclick="addWishList(${product.IdArticulo}); return false;">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="single-product.html?IdArticulo=${product.IdArticulo}" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">Ver más</p>
                        </a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('productos').appendChild(productDiv);
      }
    });
  }
  else{
  var search = searchm;
  if(searchm!=""){
    console.log("no esta vacio");
    search = searchm.replace('+', ' ');
  }else{
    console.log("esta vacio");
  }
  const busqueda = JSON.stringify({
    search
  });

    $.post('php/productos.php', { busqueda }, response => {
      let resp = JSON.parse(response);
      console.log(resp.message);
      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('div');
        productDiv.className = 'col-lg-4 col-md-6';

        let singleProduct = document.createElement('div');
        singleProduct.className = 'single-product';        
        singleProduct.innerHTML = `
                <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                <img class="img-fluidcategory" src="${product.Direccion}" alt="">
                </a>
                <div class="product-details">
                    <a href="single-product.html?IdArticulo=${product.IdArticulo}">
                    <h6>${product.Nombre}</h6>
                        </a>
                <div class="price">
                    <h6>$${product.Precio}</h6>
                    </div>
                    <div class="prd-bottom">

                        <a href="#" class="social-info" onclick="addCart(${product.IdArticulo}); return false;">
                            <span class="ti-bag"></span>
                            <p class="hover-text">Carrito</p>
                        </a>
                        <a href="#" class="social-info" onclick="addWishList(${product.IdArticulo}); return false;">
                            <span class="lnr lnr-heart"></span>
                            <p class="hover-text">Wishlist</p>
                        </a>
                        <a href="single-product.html?IdArticulo=${product.IdArticulo}" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">Ver más</p>
                        </a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('productos').appendChild(productDiv);
      }
    });
  }
    

    //Consultar Categorias
    $.post('php/obtieneCategorias.php', response => {
      let resp = JSON.parse(response);
      console.log("funciono");
      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('ul');
        productDiv.className = 'main-categories';

        let singleProduct = document.createElement('li');
        singleProduct.className = 'main-nav-list';        
        singleProduct.innerHTML = `
        <a  href="category.html?IdCategoria=${product.IdCategoria}" aria-expanded="false" aria-controls="fruitsVegetable"><span
        class="lnr lnr-arrow-right"></span>${product.Nombre}</a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('listacategorias').appendChild(productDiv);
      }
    });

    $.post('php/obtieneGeneros.php', response => {
      let resp = JSON.parse(response);
      console.log("funciono");
      for (const product of resp.data) {
        /* Create category table row for each category on the response */
        let productDiv = document.createElement('ul');
        productDiv.className = 'main-categories';

        let singleProduct = document.createElement('li');
        singleProduct.className = 'main-nav-list';        
        singleProduct.innerHTML = `
        <a href="category.html?IdGenero=${product.IdGenero}" aria-expanded="false" aria-controls="fruitsVegetable"><span
        class="lnr lnr-arrow-right"></span>${product.Nombre}</a>
            `;
  
        
        productDiv.appendChild(singleProduct);
        document.getElementById('listageneros').appendChild(productDiv);
      }
    });
    window.scrollTo(0,350)
  }

function addWishList(idArticulo){
    const idArticle = idArticulo;
    const idUser = localStorage.getItem("Id_Usuario");
    
    const article = JSON.stringify({
        idArticle,
        idUser
    });
    $.post('php/wishlist.php', { article }, response => {
        let resp = JSON.parse(response);
        alert(resp.message);
    });
}

  function addCart(idArticulo){
    const idArticle = idArticulo;
    const idUser = localStorage.getItem("Id_Usuario");

    const article = JSON.stringify({
        idArticle,
        idUser
    });
    $.post('php/carrito.php', { article }, response => {
        let resp = JSON.parse(response);
        alert(resp.message);
    });
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