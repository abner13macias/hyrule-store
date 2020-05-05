<?php
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
 $mail->Subject = "Factor de Autenticación";
 $mail->Body = "Tu PIN dodo es:";
 $mail->AddAddress("abner1322.nintendo@gmail.com");
 if(!$mail->Send()) {
 echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
 echo "Mensaje enviado correctamente";
 }
?>