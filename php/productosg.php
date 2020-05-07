<?php
    session_start();
    require_once 'config.php';
    $busqueda = json_decode($_POST['busquedag']);
    $query = "SELECT p.Nombre, p.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM  producto p, imagen i, imagenarticulos ip, genero g
    WHERE p.IdProducto = ip.IdArticulo AND i.IdImagen = ip.IdImagen AND (g.IdGenero = p.IdGenero AND g.IdGenero = $busqueda->searchg)";
    

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
