<?php
    session_start();
    require_once 'config.php';
    $consolaId = json_decode($_POST['consolaId']);
    $query = "SELECT Nombre,IdMarca,Descripcion FROM consola WHERE IdConsola = $consolaId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla consola';
        echo json_encode($response);
        mysqli_close($db);
    }