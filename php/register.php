<?php    
    if (isset($_POST["regist"]))
    {
        $login = ($_POST['login']);
        $pass = ($_POST['pass']);
        $email = ($_POST['email']);
        $ip = ($_SERVER['REMOTE_ADDR']);
        
        $mysqli = new mysqli("localhost", "root", "", "superliga");
        $result = $mysqli->query("INSERT INTO users (userLogin, userPass, userMail, registration, login, userIp) VALUES ('".$login."', '".md5($pass)."', '".$email."', '".time()."', '".time()."', '".$ip."')");
    }

?>