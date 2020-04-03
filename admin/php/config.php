<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
$db_username = 'id12914556_admin';
$db_password = '12345678mz';
$db_name = 'id12914556_hs';
$db_host = 'localhost';

$db = new mysqli($db_host, $db_username, $db_password,$db_name) or die('could not connect to database');
?>