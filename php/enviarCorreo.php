<?php
//Asignar PIN al usuario en su registro de la DB
session_start();
require_once 'config.php';
$userObj = json_decode($_POST['user']);
$query  = "UPDATE usuario SET PIN = $userObj->PIN WHERE usuario.Id_Usuario = $userObj->idUser";
$result = mysqli_query($db,$query);

if (!isset($response)) {
    $response = new stdClass();
}

if($result){
    enviarCorreo($userObj->email,$userObj->PIN);
    $response->message = 'Se envio el correo exitosamente!';
    echo json_encode($response);
    mysqli_close($db);
}
else{
    $response->message = 'Hubo un error enviando el correo!';
    echo json_encode($response);
    mysqli_close($db);
}

function enviarCorreo($email,$PIN){ 
    require("PHPMailer-master/src/PHPMailer.php");
    require("PHPMailer-master/src/SMTP.php");
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    $mail->IsSMTP(); // enable SMTP
    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "ns62.hostgator.mx";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "ventas@hyrulestoreita.com";
    $mail->Password = "negocios123";
    $mail->SetFrom("ventas@hyrulestoreita.com");
    $mail->Subject = "PIN DODO";
    $mail->Body = "Tu PIN dodo es: ".$PIN;
    $mail->AddAddress($email);
    /*if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
    echo "Mensaje enviado correctamente";
    }*/
}
?>