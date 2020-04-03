<?php
    session_start();
    require_once 'config.php';
    $accesorioObj = json_decode($_POST['accesorio']);
    $query = "INSERT INTO accesorio (Nombre, IdMarca , IdProveedor , IdCategoria , IdConectividad, Descripcion, MeGusta) VALUES (' $accesorioObj->productoName', ' $accesorioObj->marca',
    '$accesorioObj->proveedor', '$accesorioObj->categoria', '$accesorioObj->conectividad', '$accesorioObj->descripcion', '0')";

    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'El accesorio ' . $accesorioObj->accesorioName . ' fue dado de alta exitosamente';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = "Hubo un error al dar de alta el accesorio, por favor intente más tarde. marca: $accesorioObj->marca";
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }