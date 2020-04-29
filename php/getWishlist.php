<?php
    session_start();
    require_once 'config.php';    
    $userObj = json_decode($_POST['user']);
    $query = "SELECT p.Nombre, p.Precio, p.Descripcion, i.Direccion FROM wishlist w, producto p, usuario u, imagen i, imagenarticulos ia WHERE i.IdImagen = ia.IdImagen AND p.IdProducto = ia.IdArticulo AND w.IdArticulo = p.IdProducto AND w.IdUsuario = u.Id_Usuario AND w.IdUsuario = 4 UNION ALL SELECT a.Nombre, a.Precio, a.Descripcion, i.Direccion FROM wishlist w, accesorio a, usuario u, imagen i, imagenarticulos ia WHERE i.IdImagen = ia.IdImagen AND a.IdAccesorio = ia.IdArticulo AND w.IdArticulo = a.IdAccesorio AND w.IdUsuario = u.Id_Usuario AND w.IdUsuario = $userObj->idUser";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla wishlist.';
        echo json_encode($response);
        mysqli_close($db);
    }
