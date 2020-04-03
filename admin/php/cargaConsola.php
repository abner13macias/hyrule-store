<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT IdConsola, Nombre FROM consola";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla Consola.';
        echo json_encode($response);
        mysqli_close($db);
    }