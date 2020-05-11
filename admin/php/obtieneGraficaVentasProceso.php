<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT `Fecha`, COUNT(`Fecha`) AS Cantidad FROM `venta` WHERE `Status`= 'Proceso' GROUP BY `Fecha` ORDER BY `Fecha` ASC";
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