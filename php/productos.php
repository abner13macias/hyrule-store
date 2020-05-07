<?php
    session_start();
    require_once 'config.php';
    $busqueda = json_decode($_POST['busqueda']);
    $query = "SELECT p.Nombre, p.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM producto p, imagen i, imagenarticulos ip 
    WHERE p.Nombre LIKE '%$busqueda->search%' AND p.IdProducto = ip.IdArticulo AND i.IdImagen = ip.IdImagen 
    UNION ALL SELECT a.Nombre, a.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM accesorio a, imagen i, imagenarticulos ip 
    WHERE a.Nombre LIKE '%$busqueda->search%' AND a.IdAccesorio = ip.IdArticulo AND i.IdImagen = ip.IdImagen";
    

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
