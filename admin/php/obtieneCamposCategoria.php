<?php
    session_start();
    require_once 'config.php';
    $categoryId = json_decode($_POST['categoryId']);
    $query = "SELECT Nombre,Descripcion FROM categoria WHERE IdCategoria = $categoryId";
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
