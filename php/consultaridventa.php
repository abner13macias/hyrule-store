<?php
    session_start();
    require_once 'config.php';
    $categoryId = json_decode($_POST['carrito']);
    $query = "SELECT * FROM `venta` WHERE `Id_Carrito` =  $categoryId->idcarrito ORDER BY `Id_Venta` DESC LIMIT 1";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla usuario.';
        echo json_encode($response);
        mysqli_close($db);
    }