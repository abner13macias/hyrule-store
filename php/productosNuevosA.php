<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT a.Nombre, a.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM accesorio a, imagen i, imagenarticulos ip 
    WHERE a.IdAccesorio = ip.IdArticulo AND i.IdImagen = ip.IdImagen ORDER BY a.IdAccesorio DESC LIMIT 6";
    

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
