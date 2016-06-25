<?php
	include ('../clases/motorClases.php');
	$NuevaBusqueda = new buscar;
	if ($_POST) {
		$NuevaBusqueda->matricula = $_POST['buscarplaca'];
		$NuevaBusqueda->buscarPlaca();
	}else{
		echo "error";
	}	
?>

