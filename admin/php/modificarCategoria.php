<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['category']);
    $query = "UPDATE categoria
              SET Nombre = '$categoryObj->name',
                  Descripcion = '$categoryObj->description'
              WHERE IdCategoria = $categoryObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'La categoria ' . $categoryObj->name . ' fue editada exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al editar la categoría, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
