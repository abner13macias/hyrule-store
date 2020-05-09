<?php
    session_start();
    require_once 'config.php';
    $busqueda = json_decode($_POST['busquedam']);
    $query = "SELECT p.Nombre, p.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM marca m, producto p, imagen i, imagenarticulos ip
    WHERE p.IdProducto = ip.IdArticulo AND i.IdImagen = ip.IdImagen AND (m.IdMarca = p.IdMarca AND p.IdMarca = $busqueda->searchmm)
    UNION SELECT a.Nombre, a.Precio, ip.IdArticulo, ip.IdImagen, i.Direccion FROM marca m, accesorio a, imagen i, imagenarticulos ip 
    WHERE a.IdAccesorio = ip.IdArticulo AND i.IdImagen = ip.IdImagen  AND (m.IdMarca = a.IdMarca AND a.IdMarca = $busqueda->searchmm)";
    

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
