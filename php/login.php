<?php
    $captcha;
    if(isset($_POST['g-recaptcha-response'])){
    $captcha=$_POST['g-recaptcha-response'];}
    if(!$captcha){
        echo "<SCRIPT>
        alert('Debes chequear el captcha!')
        window.location.replace('../login.html');
    </SCRIPT>";;}
    $secretKey = "6LfHoO8UAAAAAO25H5xABNKHspmw85ZlNrzEiQ9z";
    $ip = $_SERVER['REMOTE_ADDR'];
    //Chequear captcha con Google
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
    $responseKeys = json_decode($response,true);
    if(intval($responseKeys["success"]) !== 1) {
    //echo '<h4>Error!</h4>';
        } else {
    //si la captcha es correcta se escribe los datos introducidos
    hacerLogin();}

    function hacerLogin(){ 
        session_start();
        require_once 'config.php';
        
        $email = $_POST['email'];
        $pass = $_POST['password'];
        $query = "SELECT Id_Usuario,Email, contrasenia FROM usuario WHERE usuario.Email = '$email'";
        $result = mysqli_query($db, $query);

        $hashPass = "";

        if($row = mysqli_fetch_array($result)){
            $hashPass = $row["contrasenia"];
            if(password_verify ($pass, $hashPass)){
                $_SESSION["Id_Usuario"] = $row["Id_Usuario"];
                header('Location: ../index.html?Id_Usuario='.$_SESSION["Id_Usuario"]);
            }
            else{
                echo "<SCRIPT>
                alert('Datos incorrectos')
                window.location.replace('../login.html');
                </SCRIPT>";
            }
        }
        else{
            echo "<SCRIPT>
            alert('No existe la cuenta, por favor registrese')
            window.location.replace('../register.html');
        </SCRIPT>";
        }

    }
?>