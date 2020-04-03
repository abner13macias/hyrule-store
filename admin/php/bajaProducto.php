<?php
    session_start();
    require_once 'config.php';    
    $categoryObj = json_decode($_POST['producto']);
    $query = "DELETE FROM producto WHERE IdProducto = $categoryObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'El producto fue eliminado exitosamente.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al eliminar el producto';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
