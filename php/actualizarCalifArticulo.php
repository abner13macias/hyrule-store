<?php
    session_start();
    require_once 'config.php';
   // $idArticulo = json_decode($_POST['IdArticulo']);
    $query = "SELECT FORMAT(AVG(c.Calif), 1) 
    from calificacion c, producto p where p.IdProducto=c.IdArticulo and p.IdProducto=1000
    UNION ALL 
    SELECT FORMAT(AVG(c.Calif) , 1) 
    from calificacion c, accesorio a where a.IdAccesorio=c.IdArticulo and a.IdAccesorio=1000 ";
    $result = mysqli_query($db,$query);
    if($result){
        $cali=mysqli_fetch_array($result);
        echo($cali);
        /*if ($cali[0]!=null) {
            $califi=$cali[0];
            $query2="UPDATE producto
            SET Calificacion='$califi' WHERE IdProducto= 1000"
            $result2 = mysqli_query($db,$query2);
            $response->data = mysqli_fetch_array($result2);
            $response->message = 'Se Actualizo la Calificacion del producto.';
            echo json_encode($response);
            mysqli_close($db);
        }
        else{
            $califi=$cali[1];
            $query2 = "UPDATE accesorio
            SET Calificacion='$califi' WHERE IdAccesorio= 1000 ";
            $result2 = mysqli_query($db,$query2);
            if($result2) {
                $response->data = mysqli_fetch_array($result2);
                $response->message = 'Se Actualizo la Calificacion del accesorio.';
                echo json_encode($response);
                mysqli_close($db);
            } else {
                $response->message = 'Error al Actualizar la Calificacion.';
                echo json_encode($response);
                mysqli_close($db);
            }
        }*/
    } else{
        $response->message = 'Error al cargar la tabla productos.';
        echo json_encode($response);
        mysqli_close($db);
    }