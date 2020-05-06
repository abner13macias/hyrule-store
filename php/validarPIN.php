<?php
    session_start();
    require_once 'config.php';
    $userObj = json_decode($_POST['user']);
    $query = "SELECT PIN FROM usuario  WHERE Id_Usuario = '$userObj->idUser'";
    $result = mysqli_query($db,$query);


    $PIN_Prueba = 2138;
    if (!isset($response)) {
        $response = new stdClass();
    }

    if($result) {
        $consultaFin = mysqli_fetch_array($result);
        if($consultaFin){
            if($userObj->PIN == $consultaFin["PIN"]){          
                $response->message = 'Se encontró el PIN';             
                echo json_encode($response);
                mysqli_close($db);          
            }
            else{
                $response->message = 'NO se encontro el PIN';        
                echo json_encode($response);
                mysqli_close($db); 
            }
        }else{         
            $response->message = 'Error';
            echo json_encode($response);
            mysqli_close($db);
        }
    } else {
        $response->message = 'PIN incorrecto.';
        echo json_encode($response);
        mysqli_close($db);
    }
