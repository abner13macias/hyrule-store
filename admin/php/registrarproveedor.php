<?php
    session_start();
    require_once 'config.php';
    $nombre = ($_POST['nombre']);
    $direccion = ($_POST['direccion']);
    $telefono = json_decode($_POST['telefono']);
    $query = "INSERT INTO `proveedor`(`Nombre`, `Direccion`, `Telefono`) VALUES ('$nombre', '$direccion', '$telefono')";

    if(mysqli_query($db, $query)) {
        echo "<script> alert('Proveedor registrado'); </script>";
        header("Location: ../registrarproveedor.html");
        mysqli_close($db);
    } else {
        echo "<script> alert('Error de registro'); </script>";
        header("Location: ../registrarproveedor.html");
        mysqli_close($db);
    }