<?php
session_start();
require_once 'config.php';
$destino="ventas@hyrulestoreita.com";
$nombre = $_POST["name"];
$correo = $_POST["email"];
$mensaje = $_POST["message"];
//$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje;
//mail($destino,"Contacto", $contenido);
//header("Location:../contact.html") 

$query = "INSERT INTO `correos`(`Nombre`, `Correo`, `Mensaje`, `Status`) VALUES ('$nombre','$correo','$mensaje','Pendiente')";

    


    if(mysqli_query($db, $query)) {
        //$response->message = 'Fuiste dado de alta exitosamente!';
        $response->class = 'success';
        header("Location:../contact.html");
        echo json_encode($response);
        mysqli_close($db);
    } else {
        //$response->message = 'Hubo un error, intenta más tarde.';
        $response->class = 'error';
        header("Location:../contact.html");
        echo json_encode($response);
        mysqli_close($db);
    }
?>