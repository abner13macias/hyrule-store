<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $datos=json_decode($_POST['coment']);
    $query = "INSERT INTO calificacion (IdUsuario,IdArticulo, Calif, Comentario) 
    VALUES ('$datos->idusuario','$datos->IdArticulo','$datos->calif','$datos->comentario')";
    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Comentario enviado exitosmente';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Hubo un error, intenta más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }