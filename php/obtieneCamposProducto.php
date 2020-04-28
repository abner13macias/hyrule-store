<?php

    session_start();

    require_once 'config.php';

    $productoId = json_decode($_POST['productoId']);

    $query = "SELECT p.Nombre, p.Precio, p.Calificacion,p.Descripcion, m.Nombre as Marca, ca.Nombre AS Categoria , cons.Nombre AS Extra, gen.Nombre as Genero, i.Direccion
    FROM producto p, imagen i, imagenarticulos ip, marca m, categoria ca, consola cons, genero gen 
    WHERE p.IdProducto=$productoId  AND p.IdProducto = ip.IdArticulo AND i.IdImagen = ip.IdImagen and p.IdMarca=m.IdMarca 
    AND p.IdCategoria=ca.IdCategoria AND p.IdConsola=cons.IdConsola AND p.IdGenero=gen.IdGenero 
    UNION ALL 
    SELECT a.Nombre, a.Precio, a.Calificacion,a.Descripcion, m.Nombre as Marca, ca.Nombre AS Categoria, conec.Nombre as Extra , ip.IdImagen as Idimagen, i.Direccion 
    FROM accesorio a, imagen i, imagenarticulos ip,marca m, categoria ca, conectividad conec 
    WHERE a.IdAccesorio=$productoId and a.IdAccesorio = ip.IdArticulo AND i.IdImagen = ip.IdImagen AND a.IdMarca=m.IdMarca 
    AND a.IdCategoria=ca.IdCategoria and a.IdConectividad = conec.IdConectividad";

    $result = mysqli_query($db,$query);



    if (!isset($response)) {

        $response = new stdClass();

    }



    if($result) {

        $response->data = mysqli_fetch_assoc($result);

        echo json_encode($response);

        mysqli_close($db);

    } else {

        $response->message = 'Error al cargar la tabla producto.';

        echo json_encode($response);

        mysqli_close($db);

    }