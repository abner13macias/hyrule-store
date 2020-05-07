<?php 
session_start();
    require_once 'config.php';
    
$ftp_server="ftp.hyrulestoreita.com";
$ftp_usuario="admin@hyrulestoreita.com";
$ftp_pass="negocios123";
$con_id=ftp_connect($ftp_server);
$lr=ftp_login($con_id, $ftp_usuario, $ftp_pass);
if ((!$con_id) || (!$lr) ) {
    echo 'No se pudo conectar.';
    exit;
} 
else {
    //echo 'Conectado correctamente.';


    $temp=explode(".", $_FILES['archivo']['name']);
    $source_file=$_FILES['archivo']['tmp_name'];
    $destino="/public_html/img";
    $nombre=$_FILES["archivo"]['name'];
    //ftp_pass($con_id, true);
    $dir=$destino.'/'.$nombre;
    
    $query = "INSERT INTO imagen (Direccion) VALUES ('$dir')";

    if(mysqli_query($db, $query)) {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Imagen ' . $categoryObj->categoryName . ' fue dada de alta exitosamente';
        $response->class = 'success';
        echo json_encode($response);
        $subio=ftp_put($con_id, $dir, $source_file, FTP_BINARY);
        mysqli_close($db);
        header('Location: https://hyrulestore.000webhostapp.com//admin/table5.html ');
    } else {
        if (!isset($response)) {
            $response = new stdClass();
        }
        $response->message = 'Hubo un error al dar de alta la imagen, por favor intente mas tarde.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }

    
    if ($subio) {
        echo "Se subió el archivo correctamente.";
    }
    else {
        echo "Ocurrió un error.";
    }
}
?>
}
?>