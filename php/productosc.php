<?php
    session_start();
    require_once 'config.php';
    $busqueda = json_decode($_POST['busquedac']);
    $query = "SELECT p.Nombre, p.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM categoria c, producto p, imagen i, imagenarticulos ip
    WHERE p.IdProducto = ip.IdArticulo AND i.IdImagen = ip.IdImagen AND (c.IdCategoria = p.IdCategoria AND c.IdCategoria = $busqueda->searchc)
    UNION SELECT a.Nombre, a.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM categoria c, accesorio a, imagen i, imagenarticulos ip 
    WHERE a.IdAccesorio = ip.IdArticulo AND i.IdImagen = ip.IdImagen  AND (c.IdCategoria = a.IdCategoria AND c.IdCategoria = $busqueda->searchc)";
    

    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        $response->message = $busqueda;
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = $busqueda;
        echo json_encode($response);
        mysqli_close($db);
    }
