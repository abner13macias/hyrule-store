<?php
    session_start();
    require_once 'config.php';
    $idusuario = json_decode($_POST['idusuario']);
    $query = "SELECT u.Nombre, u.ApellidoMaterno, u.ApellidoPaterno FROM usuario u where u.Id_Usuario=$idusuario";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        $response->message = 'Nombre cargado';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar El nombre';
        echo json_encode($response);
        mysqli_close($db);
    }
