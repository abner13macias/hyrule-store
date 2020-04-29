var calif;
function getProductoInfo() {

  const productoId = getQueryVariable('IdArticulo');

   const productoId = "1000";
  
      $.post('php/obtieneCamposProducto.php', { productoId }, response => {
        
        let resp = JSON.parse(response);
        calif=resp.data.Calificacion;
        if(!isNaN(resp.data.Nombre)){
        let productDiv = document.createElement('div');
        productDiv.className = "container";
        let singleProduct = document.createElement('div');
        singleProduct.className = 'row s_product_inner';
        singleProduct.innerHTML = `
        <div class="col-lg-6">
        <div class="s_Product_carousel" id="imagen" onload="cargamagenes()">
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
        <div class="s_Product_carousel" id="imagen">
                    <div class="single-prd-item">
                        <img class="img-fluid" name= "imgen1"  src="${resp.data.Direccion}" alt="">
                    </div>
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
        
        }
        )}
        function addWishList(idProducto){
            const IdProducto = idProducto;
            const producto = JSON.stringify({
                IdProducto
            });
            $.post('php/wishlist.php', { producto }, response => {
                let resp = JSON.parse(response);
                alert(resp.message);
            });
          }
        
 function cargacalif(){



        }
function cargamagenes(){
    //const productoId = getQueryVariable('IdArticulo');
    const productoId = "1000";
    $.post('php/cargarImagenesProducto.php', { productoId }, response => 
    {
        let resp = JSON.parse(response);
        console.log(resp.data);
  
        for (const imagen of resp.data) {
          /* Create category table row for each category on the response */
          let productImgDiv = document.createElement('div');
          productImgDiv.className = 'single-prd-item'; 
          productImgDiv.innerHTML = `
          <img class="img-fluid" name= "imgen1"  src="${imagen.Direccion}" alt="">
              `;
    
          document.getElementById('imagen').appendChild(productDiv);
        }
      });
}    
function getProductoComentarios(){

//const productoId = getQueryVariable('IdArticulo');
const productoId = "1000";
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
											<h4>Blake Ruiz</h4>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
										</div>
									</div>
									<p>Voy a escribir una reseña prematura ya que solamente venía la consola como tal, cuando compré algún juego les escribo la reseña completa:
										En primera, ya tenía ganas de comprar el Switch, me habían dicho que iba a salir una versión de revisión y me esperé a la dicha.
										En segunda, llego todo súper bien.
										Al momento de abrir la caja, traia unos golpes pero, no por eso mi calificación será menor, puede ser que pase y más por que el envío es de Amazon.
										El producto como tal estaba intacto, nuevo, todo en perfecta condición y la instalación fue en menos de 25 mins.
										Había dudado de comprarla por el tema de que los Joy Coins decian se barren, la resolución, bla,bla,bla.
										En mi punto de vista, no hagan caso, si son fans de Nintendo o quieren descubrir una consola nuevas definitivamente será esta.
										Tenía ganas de un Xbox One, pero los precios son altos, y con esta consola estoy más que satisfecho.</p>
								
          `;

      document.getElementById('comentarios').appendChild(productDiv);
    }
  });
}    
}

