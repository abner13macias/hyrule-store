<?php
    session_start();
    require_once 'config.php';
    $employeeObj = json_decode($_POST['employee']);
    $query = "INSERT INTO empleado (Nombre,ApellidoPaterno, ApellidoMaterno, Telefono, email, contrasenia, IdRol) VALUES ('$employeeObj->employeeName', '$employeeObj->ap_Patern',
    '$employeeObj->ap_Matern', '$employeeObj->telefono', '$employeeObj->email', '$employeeObj->pass', '$employeeObj->idRol')";

    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'El empleado ' . $categoryObj->employeeName . ' fue dado de alta exitosamente';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Hubo un error al dar de alta al empleado, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
