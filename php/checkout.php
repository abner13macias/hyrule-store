<?php
    session_start();
    require_once 'config.php';    
    $productObj = json_decode($_POST['compra']);

    $query = "SELECT p.Nombre, c.Cantidad, c.Subtotal, c.IdCarrito FROM carrito c, producto p, usuario u 
    WHERE p.IdProducto = c.IdArticulo AND c.IdUsuario = u.Id_Usuario AND u.Id_Usuario = $productObj->idUser  AND `Status` = 'Activo'

    UNION ALL SELECT p.Nombre, c.Cantidad, c.Subtotal, c.IdCarrito FROM carrito c, accesorio p, usuario u 
    WHERE p.IdAccesorio = c.IdArticulo AND c.IdUsuario = u.Id_Usuario AND u.Id_Usuario = $productObj->idUser  AND `Status` = 'Activo'";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $response->message = 'Se ha agregado exitosamente a la lista de deseos.';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar ticket.';
        echo json_encode($response);
        mysqli_close($db);  
    }
