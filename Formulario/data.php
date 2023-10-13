<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $user = $_POST['user_name'];
    $fullName = $_POST['fullName'];
    $password1 = $_POST['password1'];
    $password2 = $_POST['password2'];
    $email = $_POST['e-mail'];
    $street = $_POST['street'];
    $insideN = $_POST['number'];
    $col = $_POST['col'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $cp = $_POST['cp'];


    if(empty($user) || empty($fullName) || empty($password1) || empty($password2) || empty($email || empty($street) || empty($insideN) || empty($col) || empty($state) || empty($country) || empty($cp))){
        $errors[] = "No se pueden dejar campos vacios";
    }
    if($password1 != $password2){
        $errors[] = "Las contraseñas no son iguales";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Correo electrónico inválido.";
    }
    if(empty($errors)){
        echo json_encode("Formulario validado exitosamente");
        exit(); 
    } else {
        foreach($errors as $error){
            echo json_encode("Formulario invalido por: ".$error."<br>");
        }
    }
}   
?>
