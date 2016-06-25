<?php
sleep(2);
    include('../clases/motorClases.php');
    $DetalleGrupos = new findArticulos;
	if ($_POST) {
	    $DetalleGrupos->grupo = $_POST['GrupoArticulo'];
    	$DetalleGrupos->findArticle();
	}else{
		echo "error";
	}

    
?>
