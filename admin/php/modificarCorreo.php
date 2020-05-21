<?php
    session_start();
    require_once 'config.php';
    $categoryObj = json_decode($_POST['proveedor']);
    
    $from = 'hyrulest@mx62.hostgator.mx';
    $name = $categoryObj->name;
    $subject = 'Preguntas y Respuestas';
    $cmessage = $categoryObj->telefono;

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
	$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Asunto:</strong> {$subject}</td></tr>";
	$body .= "<tr><td></td></tr>";
    $body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
    $body .= "<thead style='text-align: center;'><tr><td bgcolor='ededed' style='border:none;' colspan='2'>";
	$body .= "<br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($categoryObj->direccion, 'Preguntas y Respuestas', $body, $headers);


    //$contenido = "Nombre: " . $categoryObj->name . "\nCorreo: " . $categoryObj->direccion . "\nMensaje: " . $categoryObj->telefono;
    //mail($categoryObj->direccion,"Preguntas y Respuestas", $mensaje, $ca);
    $query = "UPDATE correos
              SET Nombre = '$categoryObj->name',
                  Correo = '$categoryObj->direccion',
                  Mensaje = '$categoryObj->telefono',
                  Status = 'Contestado'
              WHERE IdCorreo = $categoryObj->id";
    if (!isset($response)) {
        $response = new stdClass();
    }
    if(mysqli_query($db, $query)) {
        $response->status = 200;
        $response->message = 'El correo de ' . $categoryObj->direccion . ' fue enviado.';
        $response->class = 'success';
        echo json_encode($response);
    } else {
        $response->status = 401;
        $response->message = 'Hubo un error al enviar el correo, por favor intente más tarde.';
        $response->class = 'error';
        echo json_encode($response);
    }
    mysqli_close($db);
