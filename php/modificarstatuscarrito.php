<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $userObj = json_decode($_POST['carrito']);
    //$hashedPass = password_hash($userObj->pass, PASSWORD_DEFAULT);
    $query = "UPDATE `carrito` SET `Status`= 'Desactivo'  WHERE `IdCarrito` = '$userObj->idcarrito'";

    
    if (!isset($response)) {
        $response = new stdClass();
    }

    if(mysqli_query($db, $query)) {
        //$response->message = 'Fuiste dado de alta exitosamente!';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        //$response->message = 'Hubo un error, intenta más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
