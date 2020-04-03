<?php
    session_start();
    require_once 'config.php';    
    $categoryObj = json_decode($_POST['imagen']);
    $query = "DELETE FROM imagen WHERE IdImagen = $categoryObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'El proveedor fue eliminada exitosamente.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al eliminar el proveedor.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }