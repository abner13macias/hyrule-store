<?php
    session_start();
    require_once 'config.php';
    $query = "SELECT SUM(Cantidad) AS Cantidad FROM(SELECT COUNT(`IdProducto`) AS Cantidad FROM `producto`UNION ALL SELECT COUNT(`IdAccesorio`) AS Cantidad FROM `accesorio`) AS `tabla`";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla marca.';
        echo json_encode($response);
        mysqli_close($db);
    }