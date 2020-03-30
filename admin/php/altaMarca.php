<?php
session_start();
require_once 'config.php';
$marcaObj = json_decode($_POST['marca']);
$query = "INSERT INTO marca (Nombre, Descripcion) VALUES ('$marcaObj->marcaName', '$marcaObj->description')";
if(mysqli_query($db, $query)){
    if (!isset($response)) {
        $response = new stdClass();
    }
    $response->message = 'La marca ' . $marcaObj->marcaName . ' fue dada de alta exitosamente';
    $response->class = 'success';
    echo json_encode($response);
    mysqli_close($db);
} else {
    if (!isset($response)) {
        $response = new stdClass();
    }
    $response->message = 'Hubo un error al dar de alta a la marca, por favor intente más tarde.';
    $response->class = 'error';
    echo json_encode($response);
     mysqli_close($db); mysqli_close($db);
}
