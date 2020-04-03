<?php
    session_start();
    require_once 'config.php';    
    $categoryObj = json_decode($_POST['consola']);
    $query = "DELETE FROM consola WHERE IdConsola = $categoryObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'La consola fue eliminada exitosamente.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al eliminar la consola.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
