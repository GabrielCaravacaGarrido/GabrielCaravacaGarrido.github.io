<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Dirección de correo electrónico a la que se enviará el mensaje
    $to = "gcaravacag@ucenfotec.ac.cr";
    $subject = "Nueva petición de $name";
    $body = "Nombre: $name\nCorreo Electrónico: $email\nMensaje:\n$message";
    $headers = "From: $email";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>