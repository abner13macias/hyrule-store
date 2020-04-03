<?php

session_start();

    $nombre = $_POST['nombre'];
    $idMarca = $_POST['idmarca'];
    $descripcion = $_POST['descripcion'];

require_once 'config.php';

$consulta = "INSERT INTO consola (`nombre`, `idmarca`, `descripcion`) VALUES ('$nombre', '$idMarca', '$descripcion')";

if(mysqli_query($db, $consulta)){
    echo "<script> alert('Consola registrada'); </script>";
       
}
else{
    echo "<script> alert('Error en registrar'); </script>";
       
}

?>