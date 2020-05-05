<?php
    session_start();
    require_once 'config.php';
    $productoId = json_decode($_POST['productoId']);
    $query = "SELECT count(cal.Comentario) AS Cantidad
    FROM producto p, calificacion cal, usuario
    WHERE p.IdProducto = cal.IdArticulo AND cal.IdUsuario= usuario.Id_Usuario AND p.IdProducto= 1";
    $result = mysqli_query($db,$query);
    if($result){
        $cantidad=mysqli_fetch_array($result);
        if ($cantidad[0]!=0) {
            $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
            $response->message = 'Se cargaron productos.';
            echo json_encode($response);
            mysqli_close($db);
        }
        else{
            $query2 = "SELECT count(cal.Comentario) AS Cantidad
            FROM accesorio a, calificacion cal, usuario
            WHERE a.IdAccesorio = cal.IdArticulo AND cal.IdUsuario= usuario.Id_Usuario and a.IdAccesorio= $productoId";
            $result2 = mysqli_query($db,$query);
            if($result2) {
                $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
                $response->message = 'Se cargaron accesorios.';
                echo json_encode($response);
                mysqli_close($db);
            } else {
                $response->message = 'Error al cargar reviews.';
                echo json_encode($response);
                mysqli_close($db);
            }
        }
    } else{
        $response->message = 'Error al cargar la tabla productos.';
        echo json_encode($response);
        mysqli_close($db);
    }