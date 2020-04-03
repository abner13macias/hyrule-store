<?php
    session_start();
    require_once 'config.php';
    $employeeId = json_decode($_POST['employeeId']);
    $query = "SELECT empleado.IdEmpleado,empleado.Nombre,empleado.ApellidoPaterno,empleado.ApellidoMaterno,empleado.Telefono,empleado.email, rol.NombreRol 
                FROM empleado, rol 
                WHERE empleado.IdRol=rol.Id_Rol AND empleado.IdEmpleado=$employeeId";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        $response->message = 'Tabla cargada';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla empleado.';
        echo json_encode($response);
        mysqli_close($db);
    }
