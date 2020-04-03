<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['producto']);
    $query = "UPDATE producto, marca, proveedor, categoria, consola
              SET producto.Nombre = '$categoryObj->nombre',
                  producto.IdMarca = '$categoryObj->marca',
                  producto.IdProveedor = '$categoryObj->proveedor',
                  producto.IdCategoria = '$categoryObj->categoria',
                  producto.IdConsola = '$categoryObj->consola'
              WHERE producto.IdProducto = $categoryObj->id AND producto.IdMarca = marca.IdMarca 
              and producto.IdProveedor=proveedor.Id_Proveedor and producto.IdCategoria= categoria.IdCategoria
              and producto.IdConsola= consola.IdConsola";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El producto' . $categoryObj->nombre . ' fue editado exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = "Hubo un error al editar el producto, por favor intente más tarde. nombre: $categoryObj->nombre marca: $categoryObj->marca proveedor: $categoryObj->proveedor";
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
