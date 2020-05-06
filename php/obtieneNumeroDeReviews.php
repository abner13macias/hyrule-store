<?php
    session_start();
    require_once 'config.php';
    $productoId = json_decode($_POST['productoId']);
    $query = "SELECT count(cal.Comentario) AS Cantidad, p.Calificacion as Calificacion
    FROM producto p, calificacion cal, usuario
    WHERE p.IdProducto = cal.IdArticulo AND cal.IdUsuario= usuario.Id_Usuario AND p.IdProducto= $productoId ";
    $result = mysqli_query($db,$query);
    if($result){
        $cali=mysqli_fetch_assoc($result);
        if ($cali["Calificacion"]!=null) {
            $response->data = $cali;
            $response->message = 'Se cargaron productos.';
            echo json_encode($response);
            mysqli_close($db);
        }
        else{
            $query2 = "SELECT count(cal.Comentario) AS Cantidad, a.Calificacion as Calificacion 
            FROM accesorio a, calificacion cal, usuario
            WHERE a.IdAccesorio = cal.IdArticulo AND cal.IdUsuario= usuario.Id_Usuario and a.IdAccesorio= $productoId ";
            $result2 = mysqli_query($db,$query2);
            if($result2) {
                $response2->data = mysqli_fetch_assoc($result2);
                
                $response2->message = 'Se cargaron accesorios.';
                echo json_encode($response2);
                mysqli_close($db);
            } else {
                $response3->message = 'Error al cargar reviews.';
                echo json_encode($response3);
                mysqli_close($db);
            }
        }
    } else{
        $response4->message = 'Error al cargar la tabla productos.';
        echo json_encode($response4);
        mysqli_close($db);
    }