<?php

include ('../clases/motorClases.php');
$nuevaSesion = new Sesiones();
header("access-control-allow-origin: *");
	$nuevaSesion->usuario  = $_POST['user'];
	$nuevaSesion->password = md5($_POST['password']);
	$nuevaSesion->StarSesion();
?>