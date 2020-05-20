<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['proveedor']);
    $contenido = "Nombre: " . $categoryObj->name . "\nCorreo: " . $categoryObj->direccion . "\nMensaje: " . $categoryObj->telefono;
    mail($categoryObj->direccion,"Contacto", $contenido);
    $query = "UPDATE correos
              SET Nombre = '$categoryObj->name',
                  Correo = '$categoryObj->direccion',
                  Mensaje = '$categoryObj->telefono',
                  Status = 'Contestado'
              WHERE IdCorreo = $categoryObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El correo de ' . $categoryObj->direccion . ' fue enviado.';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al enviar el correo, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
