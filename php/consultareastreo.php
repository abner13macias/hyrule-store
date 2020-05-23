    <?php
    session_start();
    require_once 'config.php';
    $busqueda = json_decode($_POST['busqueda']);
    $query = "SELECT * FROM `venta` WHERE `Id_Venta` = $busqueda->search";
    $result = mysqli_query($db,$query);

    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $response->data = mysqli_fetch_assoc($result);
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'Error al cargar la tabla usuario.';
        echo json_encode($response);
        mysqli_close($db);
    }