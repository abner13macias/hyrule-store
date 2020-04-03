<?php
    session_start();
    require_once 'config.php';
    $productoObj = json_decode($_POST['producto']);
    $query = "INSERT INTO producto (Nombre, IdMarca , IdProveedor , IdCategoria , IdConsola) VALUES (' $productoObj->productoName', ' $productoObj->marca',
    '$productoObj->proveedor', '$productoObj->categoria', '$productoObj->consola')";

    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'El producto ' . $productoObj->productoName . ' fue dado de alta exitosamente';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = "Hubo un error al dar de alta el producto, por favor intente más tarde. marca: $productoObj->marca";
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }