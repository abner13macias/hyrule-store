<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT a.IdAccesorio as 'Idaccesorio', a.nombre as 'Nombre', m.Nombre as 'Marca', pr.Nombre as 'Proveedor', c.Nombre as 'Categoria', co.Nombre as 'Conectividad', a.Descripcion AS 'Descripcion', a.MeGusta as 'MeGusta' FROM accesorio a, marca m, proveedor pr, categoria c, conectividad co where a.IdMarca=m.IdMarca and a.IdProveedor=pr.Id_Proveedor and a.IdCategoria=c.IdCategoria and a.IdConectividad=co.IdConectividad";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla Articulo.';
        echo json_encode($response);
        mysqli_close($db);
    }