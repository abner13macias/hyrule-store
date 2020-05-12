
<?php
session_start();
require_once 'config.php';
$datos=json_decode($_POST['coment']);

$saveCommentQuery = "INSERT INTO calificacion (IdUsuario,IdArticulo, Calif, Comentario)
VALUES ('$datos->idusuario','$datos->IdArticulo','$datos->calif','$datos->comentario')";
if(mysqli_query($db, $saveCommentQuery)) {
    if (!isset($response)) {
        $response = new stdClass();
    }


    $updateProductRatingQuery = "SELECT FORMAT(AVG(c.Calif), 1) as calificacion
    from calificacion c, producto p where p.IdProducto=c.IdArticulo and p.IdProducto=$datos->IdArticulo";
    $updateProductRatingResult = mysqli_query($db,$updateProductRatingQuery);
    if($updateProductRatingResult) {
        $cali=mysqli_fetch_assoc($updateProductRatingResult);
        if ($cali["calificacion"]!=null) {
            $califi=$cali["calificacion"];
            $query3="UPDATE producto
            SET Calificacion='$califi' WHERE IdProducto= $datos->IdArticulo";
            $result3 = mysqli_query($db,$query3);
            //$response->data = mysqli_fetch_array($updateProductRatingResult);
            mysqli_close($db);
        }
        else{

            $query4="SELECT FORMAT(AVG(c.Calif) , 1) as calificacion
            from calificacion c, accesorio a where a.IdAccesorio=c.IdArticulo and a.IdAccesorio=$datos->IdArticulo";
            $result4 = mysqli_query($db,$query4);
            $cali2=mysqli_fetch_assoc($result4);
            $califi=$cali2["calificacion"];
            $query5 = "UPDATE accesorio
            SET Calificacion='$califi' WHERE IdAccesorio=$datos->IdArticulo";
            $result5 = mysqli_query($db,$query5);
            if($result5) {
                //$response->data = mysqli_fetch_array($updateProductRatingResult);
                mysqli_close($db);
            } else {
                // echo ("No Se Actualizo la Calificacion del accesorio.");
                mysqli_close($db);
            }
        }
    } else{
        // echo ('Error al cargar la tabla productos.');
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