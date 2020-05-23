<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $userObj = json_decode($_POST['carritoventa']);
    $from = 'hyrulest@mx62.hostgator.mx';
    $name = $userObj->nombreuser;
    $subject = 'Su producto va en camino.';
    $cmessage = $userObj->direccionuser;
    $cfmessage = $userObj->fechav;
    $ccmessage = $userObj->idventa;

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
    $body .= "<tr><td colspan='2' style='border:none;'>Su compra de la fecha {$cfmessage} a sido exitosa. Su envio a {$cmessage} se encuenta en proceso, este es su codigo de seguimiento: {$ccmessage}</td></tr>";
    $body .= "<thead style='text-align: center;'><tr><td bgcolor='ededed' style='border:none;' colspan='2'>";
	$body .= "<br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($userObj->emailuser, 'Su producto va en camino.', $body, $headers);
    