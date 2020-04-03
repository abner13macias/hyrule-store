<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['consola']);
    $query = "UPDATE consola
              SET Nombre = '$categoryObj->name',
                  IdMarca = '$categoryObj->IdMarca',
                  Descripcion = '$categoryObj->Descripcion'
              WHERE IdConsola = $categoryObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'La consola ' . $categoryObj->name . ' fue editada exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al editar la consola, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);