<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['imagen']);
    $query = "UPDATE imagen
              SET Direccion = '$categoryObj->direccion'
              WHERE IdImagen = $categoryObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El empleado ' . $categoryObj->direccion . ' fue editado exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al editar el empleado, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);

