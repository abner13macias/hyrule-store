<?php
    session_start();
    require_once 'config.php';
    $employeeObj = json_decode($_POST['employee']);
    $query = "INSERT INTO empleado (Nombre, Descripcion, ApellidoPaterno, ApellidoMaterno, Telefono, email, contrasenia, IdRol(VALUES ('$categoryObj->employeeName', '$categoryObj->ap_Patern',
    '$employeeObj->ap_Matern', '$employeeObj->telefono', '$employeeObj->email', '$employeeObj->pass', '$employeeObj->idRol')";

    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'La categoria ' . $categoryObj->categoryName . ' fue dada de alta exitosamente';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Hubo un error al dar de alta la categoría, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
