<?php
    session_start();
    require_once 'config.php';
    $productoId = json_decode($_POST['productoId']);
    $query = "SELECT cal.Calif, cal.Comentario, usuario.Nombre, usuario.ApellidoPaterno
    FROM producto p, calificacion cal, usuario
    WHERE p.IdProducto = cal.IdArticulo AND cal.IdUsuario= usuario.Id_Usuario AND p.IdProducto=$productoId
    UNION ALL 
    SELECT cal.Calif, cal.Comentario, usuario.Nombre, usuario.ApellidoPaterno
    FROM accesorio a, calificacion cal, usuario
    WHERE a.IdAccesorio = cal.IdArticulo AND cal.IdUsuario= usuario.Id_Usuario and a.IdAccesorio=$productoId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        $response->message = 'comentarios cargados';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar los comentarios';
        echo json_encode($response);
        mysqli_close($db);
    }
