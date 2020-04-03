<?php
    session_start();
    require_once 'config.php';    
    $marcaObj = json_decode($_POST['marca']);
    $query = "DELETE FROM marca WHERE IdMarca = $marcaObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'La Marca fue eliminada exitosamente.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al eliminar la Marca.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }