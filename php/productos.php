<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT p.Nombre, p.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM producto p, imagen i, imagenarticulos ip WHERE p.IdProducto = ip.IdArticulo AND i.IdImagen = ip.IdImagen UNION ALL SELECT a.Nombre, a.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM accesorio a, imagen i, imagenarticulos ip WHERE a.IdAccesorio = ip.IdArticulo AND i.IdImagen = ip.IdImagen";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla productos.';
        echo json_encode($response);
        mysqli_close($db);
    }
