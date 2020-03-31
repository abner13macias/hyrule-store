<?php
    session_start();
    require_once 'config.php';    
    $categoryObj = json_decode($_POST['category']);
    $query = "DELETE FROM categoria WHERE IdCategoria = $categoryObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'La categoría fue eliminada exitosamente.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al eliminar la categoría.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
