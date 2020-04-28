<?php
    session_start();
    require_once 'config.php';
    require_once 'login.php';    
    $productObj = json_decode($_POST['product']);
    $query = "INSERT INTO wishlist (IdUsuario,IdArticulo) VALUES ($_SESSION["Id_Usuario"],$productObj->IdProduct)";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'Se ha agregado exitosamente al carrito.';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla productos.';
        echo json_encode($response);
        mysqli_close($db);  
    }
