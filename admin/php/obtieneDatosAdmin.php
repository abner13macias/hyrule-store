<?php
    session_start();
    require_once 'config.php';
    $categoryId = json_decode($_POST['categoryId']);
    $query = "SELECT * FROM empleado WHERE IdEmpleado = $categoryId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla marca.';
        echo json_encode($response);
        mysqli_close($db);
    }