<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['proveedor']);
    $query = "UPDATE proveedor
              SET Nombre = '$categoryObj->name',
                  Direccion = '$categoryObj->direccion',
                  Telefono = '$categoryObj->telefono'
              WHERE Id_Proveedor = $categoryObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El proveedor ' . $categoryObj->name . ' fue editada exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al editar el proveedor, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
