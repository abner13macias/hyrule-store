<?php
    session_start();
    require_once 'config.php';    
    $userObj = json_decode($_POST['user']);
    $query = "SELECT p.Nombre, c.Subtotal, p.Descripcion, i.Direccion, c.Cantidad FROM producto p, usuario u, imagen i, imagenarticulos ia, carrito c WHERE i.IdImagen = ia.IdImagen AND p.IdProducto = ia.IdArticulo AND c.IdArticulo = p.IdProducto AND c.IdUsuario = u.Id_Usuario AND c.IdUsuario = $userObj->idUser UNION ALL SELECT a.Nombre, c.Subtotal, a.Descripcion, i.Direccion, c.Cantidad FROM accesorio a, usuario u, imagen i, imagenarticulos ia, carrito c WHERE i.IdImagen = ia.IdImagen AND a.IdAccesorio = ia.IdArticulo AND c.IdArticulo = a.IdAccesorio AND c.IdUsuario = u.Id_Usuario AND c.IdUsuario = $userObj->idUser";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla carrito.';
        echo json_encode($response);
        mysqli_close($db);
    }
