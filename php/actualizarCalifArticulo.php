<?php
    session_start();
    require_once 'config.php';
   // $idArticulo = 1;
    $idArticulo = json_decode($_POST['IdArticulo']);
    $query = "SELECT FORMAT(AVG(c.Calif), 1) as calificacion
    from calificacion c, producto p where p.IdProducto=c.IdArticulo and p.IdProducto=$idArticulo";
    $result = mysqli_query($db,$query);
    if($result) {
        $cali=mysqli_fetch_assoc($result);
        if ($cali["calificacion"]!=null) {   
            $califi=$cali["calificacion"];
            $query2="UPDATE producto
            SET Calificacion='$califi' WHERE IdProducto= $idArticulo";
            $result2 = mysqli_query($db,$query2);
            //$response->data = mysqli_fetch_array($result2);
            echo ('Se Actualizo la Calificacion del producto.');
            mysqli_close($db);
        }
        else{
          
            $query2="SELECT FORMAT(AVG(c.Calif) , 1) as calificacion
            from calificacion c, accesorio a where a.IdAccesorio=c.IdArticulo and a.IdAccesorio=$idArticulo";
            $result2 = mysqli_query($db,$query2);
            $cali2=mysqli_fetch_assoc($result2);
            $califi=$cali2["calificacion"];
            $query2 = "UPDATE accesorio
            SET Calificacion='$califi' WHERE IdAccesorio=$idArticulo";
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