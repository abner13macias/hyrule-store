<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $userObj = json_decode($_POST['carrito']);
    /*$from = 'hyrulest@mx62.hostgator.mx';
    $name = $userObj->nombreuser;
    $subject = 'Su producto va en camino.';
    $cmessage = $userObj->direccionuser;

    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

   
    $logo = 'https://hyrulestoreita.com/img/logo.png';
    $link = 'https://hyrulestoreita.com/';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td bgcolor='ededed' style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
    $body .= "<td style='border:none;'><strong>Nombre:</strong> {$name}</td>";
    $body .= "</tr>";
	$body .= "<td style='border:none;'><strong>Email:</strong> {$userObj->emailuser}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Asunto:</strong> {$subject}</td></tr>";
	$body .= "<tr><td></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>Su envio a {$cmessage} se encuenta en proceso</td></tr>";
    $body .= "<thead style='text-align: center;'><tr><td bgcolor='ededed' style='border:none;' colspan='2'>";
	$body .= "<br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($userObj->emailuser, 'Su producto va en camino.', $body, $headers);
    */
    date_default_timezone_set('/America/Mexico_City');
    $fechahoy=date("Y-m-d");
    //$hashedPass = password_hash($userObj->pass, PASSWORD_DEFAULT);
    $query = "INSERT INTO `venta`(`Total`, `Status`, `Fecha`, `Id_Carrito`) VALUES ('$userObj->totalc','$userObj->status','$fechahoy','$userObj->idcarrito')";

    
    if (!isset($response)) {
        $response = new stdClass();
    }

    if(mysqli_query($db, $query)) {
        //$response->message = 'Fuiste dado de alta exitosamente!';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        //$response->message = 'Hubo un error, intenta más tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
