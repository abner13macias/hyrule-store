function getProductoInfo() {

    const productoId = getQueryVariable('IdArticulo');
  
    // const productoId = "1000";
    
        $.post('php/obtieneCamposProducto.php', { productoId }, response => {
          
          let resp = JSON.parse(response);
          console.log(resp.data);
          calif=resp.data.Calificacion;

          if(isNaN(resp.data.Genero)){
          let productDiv = document.createElement('div');
          productDiv.className = "container";
          let singleProduct = document.createElement('div');
          singleProduct.className = 'row s_product_inner';
          singleProduct.innerHTML = `
          <div class="col-lg-6">
          <div class="s_Product_carousel" id="imagen"  >
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
    console.log("Calificacion: ");
    $.post('php/obtieneNumeroDeReviews.php', { productoId }, response => 
    {
    let resp = JSON.parse(response);
    console.log(resp.data);
    let productcalDiv = document.createElement('div');
    productcalDiv.className = 'box_total'; 
    productcalDiv.innerHTML = `<h5>Calificación:</h5>
        <h4 name="calificacionProducto">${resp.data.Calificacion}</h4>
        <H6>(<a name="cantidadReviews">${resp.data.Cantidad}</a>Reviews)</H6>`;

    document.getElementById('califprod').appendChild(productcalDiv); 

  });
}

  function getProductoComentarios(){
  const productoId = getQueryVariable('IdArticulo');
   //const productoId = "1000";
  $.post('php/cargarComentariosProducto.php', { productoId }, response => 
  {
      let resp = JSON.parse(response);
      console.log(resp.data);
        if(resp.data!=null){
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
                                              <tbody id="califEstrella" onload="rellenarEstrellas(${comentario.Calif})">
                                              <!-----ESTRELLAS------>
                                              </tbody>
                                          </div>
                                      </div>
                                      <p>${comentario.Comentario}</p>
                                  
            `;
  
        document.getElementById('comentarios').appendChild(productcomDiv);
      }
    }
    else{
        let productSINcomDiv = document.createElement('div');
        productSINcomDiv.className = 'review_item'; 
        productSINcomDiv.innerHTML = `<div class="media">
                                          <div class="d-flex">
                                              <img src="" alt="">
                                          </div>
                                          <div class="media-body">
                                              <h4>Sin comentarios</h4>
                                              <tbody id="califEstrella" onload="rellenarEstrellas()">
                                              <!-----ESTRELLAS------>
                                              </tbody>
                                          </div>
                                      </div>
                                      <p></p>
                                  
            `;
  
        document.getElementById('comentarios').appendChild(productSINcomDiv);
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
    function miComentario(){
    const idusuario = localStorage.getItem("Id_Usuario");
    $.post('php/obtieneNombreUsuario.php', { idusuario }, response => 
    {
    let resp = JSON.parse(response);
    console.log(resp.data);
    let productMiComentarioDiv = document.createElement('div');
    productMiComentarioDiv.className = 'review_box'; 
    productMiComentarioDiv.innerHTML = `
    <h4>Añade una Review</h4>
    <p>Tu califiación:</p>
    <form id="estrellas">
        <p class="clasificacion">
          <input id="radio1" type="radio" name="estrellas" value="5"><!--
          --><label id="estrellas" for="radio1">★</label><!--
          --><input id="radio2" type="radio" name="estrellas" value="4"><!--
          --><label id="estrellas" for="radio2">★</label><!--
          --><input id="radio3" type="radio" name="estrellas" value="3"><!--
          --><label id="estrellas" for="radio3">★</label><!--
          --><input id="radio4" type="radio" name="estrellas" value="2"><!--
          --><label id="estrellas" for="radio4">★</label><!--
          --><input id="radio5" type="radio" name="estrellas" value="1"><!--
          --><label id="estrellas" for="radio5">★</label>
        </p>
      </form>
    <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
        <div class="col-md-12">
            <div class="form-group">
                <p class="form-control" id="nombre" name="nombre" placeholder="Nombre" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'">${resp.data.Nombre} ${resp.data.ApellidoPaterno} ${resp.data.ApellidoMaterno}</p>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
                <textarea class="form-control" name="comentario" id="message" rows="1" placeholder="Escribre tu comentario..." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea></textarea>
            </div>
        </div>
        <div class="col-md-12 text-right">
            <button type="submit" value="submit" class="primary-btn" onclick="enviarComentario()">Enviar</button>
        </div>
    </form>`;

    document.getElementById('miComentario').appendChild(productMiComentarioDiv); 

  });
    }
    function enviarComentario(){
        const idusuario = localStorage.getItem("Id_Usuario");
        const IdArticulo = getQueryVariable('IdArticulo');
        const calif = $('input[name=estrellas').val();//esto no se si esta bien alv 
        const comentario = $('textarea[name=comentario').val();
        const coment = JSON.stringify({
            calif,
            comentario,
            idusuario,
            IdArticulo 
        });
        $.post('php/registrarComentario.php', { coment }, response => {
            let resp = JSON.parse(response);
            console.log(resp.message);
            location.href = 'single-product.html?IdArticulo='+idArticulo;
        });
    }


