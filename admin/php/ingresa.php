<?php
    require_once("config.php");
    session_start();
   
    $email = $_POST['email'];
    $pass = $_POST['password'];
    $consulta = $db->query("SELECT * FROM `empleado` WHERE `email`= '$email' and `contrasenia` = '$pass'");
    if($f = $consulta->fetch_array()){
      $_SESSION["IdEmpleado"] = $f["IdEmpleado"];
      //$id = $row ["IdEmpleado"];
      //echo '<script>alert('.$_SESSION["IdEmpleado"].');</script>';
      header('Location: ../index.html?IdEmpleado='.$_SESSION["IdEmpleado"]);
    }else{
        echo "<script>alert('Correo o contraseña erronea');</script>";
        header("Location: login.html");
      
      
    }
    
?>