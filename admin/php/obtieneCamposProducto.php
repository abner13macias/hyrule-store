<?php
    session_start();
    require_once 'config.php';
    $productoId = json_decode($_POST['productoId']);
    $query = "SELECT p.IdProducto as 'Idproducto', p.nombre as 'Nombre', m.Nombre as 'Marca', pr.Nombre as 'Proveedor', 
    c.Nombre as 'Categoria', co.Nombre as 'Consola' FROM producto p, marca m, proveedor pr, categoria c, consola co 
    where p.IdMarca=m.IdMarca and p.IdProveedor=pr.Id_Proveedor and p.IdCategoria=c.IdCategoria and p.IdConsola=co.IdConsola and p.IdProducto=$productoId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        $response->message = 'Tabla cargada';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla producto.';
        echo json_encode($response);
        mysqli_close($db);
    }
