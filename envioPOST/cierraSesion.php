<?php
include('../clases/motorClases.php');
header('Access-Control-Allow-Origin:',"*");
$cerrarSesion = new Sesiones();
$cerrarSesion->id_p=$_POST['usuario'];
$cerrarSesion->CloseSesion();
?>