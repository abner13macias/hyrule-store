<?php
    require_once("config.php");
    session_start();
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $consulta = $db->query("SELECT * FROM `empleado` WHERE `email`= '$email' and `contrasenia` = '$pass'");
    if($f = $consulta->fetch_array()){
      $_SESSION["id"] = $f['id'];
      header("Location: ../index.html");
    }else{
        echo "<script>alert('Correo o contraseña erronea');</script>";
        header("Location: login.html");
      
      
    }
    
?>