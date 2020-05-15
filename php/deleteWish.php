<?php
//Pendiente
    session_start();
    require_once 'config.php';
    $article = json_decode($_POST['article']);
    $query = "DELETE FROM wishlist WHERE IdUsuario = $article->idUser AND IdArticulo = $article->IdArticle";
    
    if (!isset($response)) {
        $response = new stdClass();
    }

    if(mysqli_query($db, $query)) {
        $response->message = 'Producto eliminado de la wishlist.';
        $response->class = 'success';
        echo json_encode($response);
        mysqli_close($db);
    } else {
        $response->message = 'No se pudo eliminar de la wishlist.';
        $response->class = 'error';
        echo json_encode($response);
        mysqli_close($db);
    }
?>