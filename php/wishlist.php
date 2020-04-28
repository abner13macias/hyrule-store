<?php
    session_start();
    require_once 'config.php';    
    $productObj = json_decode($_POST['article']);
    $query = "INSERT INTO wishlist (IdUsuario,IdArticulo) VALUES ($productObj->idUser,$productObj->idArticle)";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'Se ha agregado exitosamente a la lista de deseos.';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al llenar la lista de deseos.';
        echo json_encode($response);
        mysqli_close($db);  
    }
