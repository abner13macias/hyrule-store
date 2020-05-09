<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $userObj = json_decode($_POST['user']);
    $hashedPass = password_hash($userObj->pass, PASSWORD_DEFAULT);
    $query = "INSERT INTO usuario (Nombre,ApellidoPaterno, ApellidoMaterno, Telefono, Email, contrasenia, Direccion, FechaDeNacimiento, fecharegistro) VALUES ('$userObj->userName', '$userObj->ap_Patern',
    '$userObj->ap_Matern', '$userObj->phone', '$userObj->email', '$hashedPass', '$userObj->address' ,'$userObj->fecha_Nac', '$userObj->fecha_Actual')";

    
    if (!isset($response)) {
        $response = new stdClass();
    }

    if(mysqli_query($db, $query)) {
        $response->message = 'Fuiste dado de alta exitosamente!';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Hubo un error, intenta más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
