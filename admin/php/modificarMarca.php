<?php
    session_start();
    require_once 'config.php';
    $marcaObj = json_decode($_POST['marca']);
    $query = "UPDATE marca
              SET Nombre = '$marcaObj->name',
                  Descripcion = '$marcaObj->description'
              WHERE IdMarca = $marcaObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'La marca ' . $categoryObj->name . ' fue editada exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al editar la marca, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);