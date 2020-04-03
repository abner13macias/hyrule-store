<?php
    session_start();
    require_once 'config.php';
    $accesorioId = json_decode($_POST['accesorioId']);
    $query = "SELECT a.IdAccesorio as 'Idaccesorio', a.nombre as 'Nombre', m.Nombre as 'Marca', pr.Nombre as 'Proveedor', 
    c.Nombre as 'Categoria', co.Nombre as 'Conectividad', a.Descripcion as 'Descripcion' FROM accesorio a, marca m, proveedor pr, categoria c, conectividad co 
    where a.IdMarca=m.IdMarca and a.IdProveedor=pr.Id_Proveedor and a.IdCategoria=c.IdCategoria and a.IdConectividad=co.IdConectividad and a.IdAccesorio=$accesorioId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        $response->message = 'Tabla cargada';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla accesorio.';
        echo json_encode($response);
        mysqli_close($db);
    }
