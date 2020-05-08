<?php
    session_start();
    require_once 'config.php';    
    $productObj = json_decode($_POST['article']);

    $preQuery = "SELECT c.IdCarrito FROM carrito c WHERE c.IdUsuario = $productObj->idUser AND c.Status='Activo'";
    $preResult = mysqli_query($db,$preQuery);
    
    if (!isset($response)) {
        $response = new stdClass();
    }

    if($preResult){
        $idCarro = mysqli_fetch_array($preResult);
        if(count($idCarro) > 0){
            $idCarrito = $idCarro[0];
            $query = "SELECT p.Precio FROM producto p WHERE p.IdProducto = $productObj->idArticle UNION ALL SELECT a.Precio FROM accesorio a WHERE a.IdAccesorio = $productObj->idArticle";
            $result = mysqli_query($db,$query);
            if($result) {
                $subtotal = mysqli_fetch_array($result);
                $finalSub =  ($subtotal[0] * $productObj->cantidad);
                $query2 = "INSERT INTO carrito (IdCarrito, IdArticulo, IdUsuario,Subtotal,Cantidad) VALUES ($idCarrito,$productObj->idArticle,$productObj->idUser,$finalSub,$productObj->cantidad)";
                $result2 = mysqli_query($db,$query2);

                if($result2){
                    $response->message = 'Registrado al carrito correctamente';
                    echo json_encode($response);
                    mysqli_close($db);
                }
                else{
                    $response->message = 'Error al insertar carrito';
                    echo json_encode($response);
                    mysqli_close($db);
                }
            } else {
                $response->message = 'Error al cargar la tabla productos';
                echo json_encode($response);
                mysqli_close($db);
            }
        }
        else{
            $query = "SELECT p.Precio FROM producto p WHERE p.IdProducto = $productObj->idArticle UNION ALL SELECT a.Precio FROM accesorio a WHERE a.IdAccesorio = $productObj->idArticle";
            $result = mysqli_query($db,$query);
            if($result) {
                $subtotal = mysqli_fetch_array($result);
                $finalSub =  ($subtotal[0] * $productObj->cantidad );
                $query2 = "INSERT INTO carrito (IdUsuario, IdArticulo, Subtotal,Cantidad) VALUES ($productObj->idUser,$productObj->idArticle,$finalSub,$productObj->cantidad)";
                $result2 = mysqli_query($db,$query2);

                if($result2){
                    $response->message = 'Registrado al carrito correctamente';
                    echo json_encode($response);
                    mysqli_close($db);
                }
                else{
                    $response->message = 'Error al insertar carrito.';
                    echo json_encode($response);
                    mysqli_close($db);
                }
            } else {
                $response->message = 'Error al cargar la tabla productos.';
                echo json_encode($response);
                mysqli_close($db);
            }
        }

    }else{
        $response->message = 'Error al iniciar';
        echo json_encode($response);
        mysqli_close($db);
    }

    
