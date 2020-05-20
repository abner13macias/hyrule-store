<?php
    session_start();
    require_once 'config.php';
    $categoryId = json_decode($_POST['proveedorId']);
    $query = "SELECT Nombre,Correo,Mensaje FROM correos WHERE IdCorreo = $categoryId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla proveedor.';
        echo json_encode($response);
        mysqli_close($db);
    }
