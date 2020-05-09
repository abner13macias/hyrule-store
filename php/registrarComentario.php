
<?php
session_start();
require_once 'config.php';
$datos=json_decode($_POST['coment']);

$query = "INSERT INTO calificacion (IdUsuario,IdArticulo, Calif, Comentario) 
VALUES ('$datos->idusuario','$datos->IdArticulo','$datos->calif','$datos->comentario')";
if(mysqli_query($db, $query)) {
    if (!isset($response)) {
        $response = new stdClass();
    }


    $query = "SELECT FORMAT(AVG(c.Calif), 1) as calificacion
    from calificacion c, producto p where p.IdProducto=c.IdArticulo and p.IdProducto=$datos->IdArticulo";
    $result = mysqli_query($db,$query);
    if($result) {
        $cali=mysqli_fetch_assoc($result);
        if ($cali["calificacion"]!=null) {   
            $califi=$cali["calificacion"];
            $query2="UPDATE producto
            SET Calificacion='$califi' WHERE IdProducto= $datos->IdArticulo";
            $result2 = mysqli_query($db,$query2);
            //$response->data = mysqli_fetch_array($result2);
            echo ('Se Actualizo la Calificacion del producto.');
            mysqli_close($db);
        }
        else{
          
            $query2="SELECT FORMAT(AVG(c.Calif) , 1) as calificacion
            from calificacion c, accesorio a where a.IdAccesorio=c.IdArticulo and a.IdAccesorio=$datos->IdArticulo";
            $result2 = mysqli_query($db,$query2);
            $cali2=mysqli_fetch_assoc($result2);
            $califi=$cali2["calificacion"];
            $query2 = "UPDATE accesorio
            SET Calificacion='$califi' WHERE IdAccesorio=$datos->IdArticulo";
            $result2 = mysqli_query($db,$query2);
            if($result2) {    
                //$response->data = mysqli_fetch_array($result2);
                echo ("Se Actualizo la Calificacion del accesorio.");
                mysqli_close($db);
            } else {
                echo ("No Se Actualizo la Calificacion del accesorio.");
                mysqli_close($db);
            }
        }
    } else{
        echo ('Error al cargar la tabla productos.');
        mysqli_close($db);
    }


    $response->message = 'Comentario enviado exitosmente';
    $response->class = 'success';
    echo json_encode($response);
    mysqli_close($db);
} else {
    if (!isset($response)) {
        $response = new stdClass();
    }
    $response->message = 'Hubo un error, intenta más tarde.';
    $response->class = 'error';
    echo json_encode($response);
    mysqli_close($db);
}





    /*session_start();
    require_once 'config.php';
    $datos=json_decode($_POST['coment']);
    
    $query = "INSERT INTO calificacion (IdUsuario,IdArticulo, Calif, Comentario) 
    VALUES ('$datos->idusuario','$datos->IdArticulo','$datos->calif','$datos->comentario')";
    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Comentario enviado exitosmente';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Hubo un error, intenta más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }*/