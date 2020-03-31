<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['category']);
    $query = "SELECT Nombre FROM categoria WHERE IdCategoria = $categoryObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla categoría.';
        echo json_encode($response);
        mysqli_close($db);
    }
