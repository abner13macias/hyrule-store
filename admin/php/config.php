<?php

error_reporting(E_ERROR | E_WARNING | E_PARSE);

$db_username = 'hyrulest_adminhs';

$db_password = '5FB9E9eJuLtU';

$db_name = 'hyrulest_hyrulestore';

$db_host = 'localhost';



$db = new mysqli($db_host, $db_username, $db_password,$db_name) or die('could not connect to database');
?>