function getProductoInfo() {

    const productoId = getQueryVariable('IdArticulo');
  
    // const productoId = "1000";
    
        $.post('php/obtieneCamposProducto.php', { productoId }, response => {
          
          let resp = JSON.parse(response);
          calif=resp.data.Calificacion;
          if(isNaN(resp.data.Genero)){
          let productDiv = document.createElement('div');
          productDiv.className = "container";
          let singleProduct = document.createElement('div');
          singleProduct.className = 'row s_product_inner';
          singleProduct.innerHTML = `
          <div class="col-lg-6">
          <div class="s_Product_carousel" id="imagen" >
              <!----- aqui van las imagenes------->        
           </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                  <div class="s_product_text">
                      <h3 name="nombre">${resp.data.Nombre}</h3>
                      <h2 name="precio">${resp.data.Precio}</h2>
                      <ul class="list">
                          <li><span>Categoria: </span><a class="active" name="categoria">${resp.data.Categoria}</a></li>
                          <li>Genero: <a class="active" name="genero">${resp.data.Genero}</a></li>
                          <li>Consola: <a name="extra">${resp.data.Extra}</a></li><!--consola/conectividad-->
                      </ul>
                      <p name= "descripcion">${resp.data.Descripcion}</p>
                      <div class="product_count">
                          <label for="qty">Cantidad:</label>
                          <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">
                          <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                           class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                          <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp &amp & sst > 0 ) result.value--;return false;"
                           class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                      </div>
                      <div class="card_area d-flex align-items-center">
                          <a class="primary-btn" href="cart.html">Añadir al carrito</a>
                          <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
                          <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                      </div>
                  </div>
                  </div>`;
                  productDiv.appendChild(singleProduct);
                  document.getElementById('todo').appendChild(productDiv);
              }else{
          let productDiv = document.createElement('div');
          productDiv.className = "container";
          let singleProduct = document.createElement('div');
          singleProduct.className = 'row s_product_inner';
          singleProduct.innerHTML = `
          <div class="col-lg-6">
          <div class="s_Product_carousel" id="imagen" >
              
          <!----- aqui van las imagenes------->        
                
                  </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                  <div class="s_product_text">
                      <h3 name="nombre">${resp.data.Nombre}</h3>
                      <h2 name="precio">${resp.data.Precio}</h2>
                      <ul class="list">
                          <li><span>Categoria: </span><a class="active" name="categoria">${resp.data.Categoria}</a></li>
                          <li>Conectividad: <a class="active" name="extra">${resp.data.Extra}</a></li><!--consola/conectividad-->
                      </ul>
                      <p name= "descripcion">${resp.data.Descripcion}</p>
                      <div class="product_count">
                          <label for="qty">Cantidad:</label>
                          <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">
                          <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                           class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                          <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp &amp & sst > 0 ) result.value--;return false;"
                           class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                      </div>
                      <div class="card_area d-flex align-items-center">
                          <a class="primary-btn" href="cart.html">Añadir al carrito</a>
                          <a class="icon_btn" onclick="addWishList(${productoId})"><i class="lnr lnr lnr-heart"></i></a>
                      </div>
                  </div>
                  </div>`;
                  productDiv.appendChild(singleProduct);
                  document.getElementById('todo').appendChild(productDiv);
                
  
              }
              califprod=resp.data.Calificacion;
          
          }
          )}

          
 function addWishList(idProducto){
     const IdProducto = idProducto;
     const producto = JSON.stringify({ IdProducto
              });
    $.post('php/wishlist.php', { producto }, response => {
         let resp = JSON.parse(response);
        alert(resp.message);
              });
            }

 function cargaImagenes(){
    const productoId = getQueryVariable('IdArticulo');
                //const productoId = "1000";
    $.post('php/cargarImagenesProducto.php', { productoId }, response => 
         {
         let resp = JSON.parse(response);
         console.log(resp.data);
              
         for (const imagen of resp.data) {
        // Create category table row for each category on the response 
            let productImgDiv = document.createElement('div');
                productImgDiv.className = 'single-prd-item'; 
                productImgDiv.innerHTML = `
                      <img class="img-fluid" name= "imgen1"  src="${imagen.Direccion}" alt="">
                          `;
                
                      document.getElementById('imagen').appendChild(productImgDiv);
                    }
                  });
            }
  
  function getCalif(){
    const productoId = getQueryVariable('IdArticulo');
    $.post('php/obtieneNumeroDeReviews.php', { productoId }, response => 
    {
    let resp = JSON.parse(response);
    let productcalDiv = document.createElement('div');
    productcalDiv.className = 'box_total'; 
    productcalDiv.innerHTML = `<h5>Calificación:</h5>
        <h4 name="calificacionProducto">${resp.data.Calificacion}</h4>
        <H6>(<a name="cantidadReviews">${resp.data.Cantidad}</a>Reviews)</H6>`;

    document.getElementById('califprod').appendChild(productDiv); 

  });
}

  function getProductoComentarios(){
  const productoId = getQueryVariable('IdArticulo');
   //const productoId = "1000";
  $.post('php/cargarComentariosProducto.php', { productoId }, response => 
  {
      let resp = JSON.parse(response);
      console.log(resp.data);
  
      for (const comentario of resp.data) {
        /* Create category table row for each category on the response */
        let productcomDiv = document.createElement('div');
        productcomDiv.className = 'review_item'; 
        productcomDiv.innerHTML = `<div class="media">
                                          <div class="d-flex">
                                              <img src="img/product/review-1.png" alt="">
                                          </div>
                                          <div class="media-body">
                                              <h4>${comentario.Nombre} ${comentario.ApellidoPaterno}</h4>
                                              <div id="califEstrella" onload="rellenarEstrellas(${comentario.Calif})">
                                              <!-----ESTRELLAS------>
                                              </div>
                                          </div>
                                      </div>
                                      <p>${comentario.Comentario}</p>
                                  
            `;
  
        document.getElementById('comentarios').appendChild(productDiv);
      }
    });
  }    
  function rellenarEstrellas(calif){
      for (let index = 0; index <= calif; index++)  {
          
          let productEstrellaCalif = document.createElement('i');
          productEstrellaCalif.className = 'fa fa-star'; 
    
          document.getElementById('califEstrella').appendChild(productEstrellaCalif);
        }
  }
    


