<?php
    session_start();
    require_once 'config.php';
    $marcaId = json_decode($_POST['marcaId']);
    $query = "SELECT Nombre,Descripcion FROM marca WHERE IdMarca = $marcaId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla marca.';
        echo json_encode($response);
        mysqli_close($db);
    }