<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['employee']);
    $query = "UPDATE empleado,rol
              SET empleado.Nombre = '$categoryObj->name',
                  empleado.ApellidoPaterno = '$categoryObj->patern',
                  empleado.ApellidoMaterno = '$categoryObj->matern',
                  empleado.Telefono = '$categoryObj->phone',
                  empleado.email = '$categoryObj->mail',
                  empleado.IdRol = '$categoryObj->rol'
              WHERE empleado.IdEmpleado = $categoryObj->id AND empleado.IdRol = rol.Id_Rol";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El empleado ' . $categoryObj->name . ' fue editado exitosamente';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al editar el empleado, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
