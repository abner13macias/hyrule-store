<?php
    session_start();
    require_once 'config.php';    
    $categoryObj = json_decode($_POST['employee']);
    $query = "DELETE FROM empleado WHERE IdEmpleado = $categoryObj->id";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->message = 'El empleado fue eliminado exitosamente.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al eliminar al empleado.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
