<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['accesorio']);
    $query = "UPDATE accesorio, marca, proveedor, categoria, conectividad
              SET accesorio.Nombre = '$categoryObj->nombre',
              accesorio.IdMarca = '$categoryObj->marca',
              accesorio.IdProveedor = '$categoryObj->proveedor',
              accesorio.IdCategoria = '$categoryObj->categoria',
              accesorio.IdConectividad = '$categoryObj->conectividad',
              accesorio.Descripcion = '$categoryObj->descripcion'
              WHERE accesorio.IdAccesorio = '$categoryObj->id' AND accesorio.IdMarca = marca.IdMarca 
              and accesorio.IdProveedor=proveedor.Id_Proveedor and accesorio.IdCategoria= categoria.IdCategoria
              and accesorio.IdConectividad= conectividad.IdConectividad";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El accesorio' . $categoryObj->nombre . ' fue editado exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = "Hubo un error al editar el accesorio, por favor intente más tarde. nombre: $categoryObj->nombre marca: $categoryObj->marca proveedor: $categoryObj->proveedor";
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
