<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT `Status`, COUNT(`Id_Venta`) AS Cantidad FROM `venta` GROUP BY `Status` ORDER BY COUNT(`Id_Venta`) ASC";
    $result = mysqli_query($db,$query);
    // Hacemos un bucle con los datos obntenidos
    $data = array();
    foreach ($result as $row) {
        $data[] = $row;
    }

    // Limpiamos memoria consumida al extraer los datos
    $result->close();

    // Cerramos la conexión a la Base de Datos
    mysqli_close($db);

    // Mostramos los datos en formato JSON
    print json_encode($data);

    //var_dump($data);




    /*if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla proveedor.';
        echo json_encode($response);
        mysqli_close($db);
    }
*/