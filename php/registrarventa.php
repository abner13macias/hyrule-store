<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $userObj = json_decode($_POST['carrito']);
    date_default_timezone_set('/America/Mexico_City');
    $fechahoy=date("Y-m-d");
    //$hashedPass = password_hash($userObj->pass, PASSWORD_DEFAULT);
    $query = "INSERT INTO `venta`(`Total`, `Status`, `Fecha`, `Id_Carrito`) VALUES ('$userObj->totalc','$userObj->status','$fechahoy','$userObj->idcarrito')";

    
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
