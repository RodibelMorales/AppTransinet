<?php
	include ('../clases/motorClases.php');
	$NuevaBusqueda = new buscar;
	if ($_POST) {
		$NuevaBusqueda->matricula = $_POST['buscaVehiculo'];
		$NuevaBusqueda->buscaVehiculo();
	}else{
		echo "error";
	}	
?>
