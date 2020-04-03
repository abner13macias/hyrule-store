<?php
    session_start();
    require_once 'config.php';
    $IdImagen = json_decode($_POST['imagenId']);
    $query = "SELECT Direccion from imagen where idImagen=";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        $response->message = 'Tabla cargada';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla empleado.';
        echo json_encode($response);
        mysqli_close($db);
    }
