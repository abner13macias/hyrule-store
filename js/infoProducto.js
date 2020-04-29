var calif;
function getProductoInfo() {

  // const productoId = getQueryVariable('IdProducto');

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

