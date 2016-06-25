<?php 
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header("Location:login.php");
        exit();
    }
?>
<html>
<head>
	<title>Menu Principal</title>
	<?php
		include('parches/head.php');
	?>
</head>
<body class="fondoApp">
    <div data-role="page" >
        <div class="controlaIMG">
            <img src="img/logoFinal.png" class="img-responsive">
        </div>
        <div data-role="content">
            <div class="ui-grid-a">
                <div class="ui-block-a ">
                    <div class="circuloColumna1">
                        <a href="buscarPlaca.php"  data-icon="arrow-r" data-iconpos="right">
                           <img src="icons/nueva-multa.png" class="sizeIcons">
                        </a>
                        <label id="sizeText1">Nueva Multa</label>
                    </div>
                </div>
                <div class="ui-block-b">
                    <div class="circuloColumna1">
                        <a href="verifica_articulo.php"  data-icon="arrow-r" data-iconpos="right">
                            <img src="icons/verifica-multa.png" class="sizeIcons">
                        </a>
                        <label id="sizeText1">Verificar Articulo</label>
                    </div>
                </div>
            </div><!-- /grid-a -->  
            <div class="ui-grid-a">
                <div class="ui-block-a ">
                    <div class="circuloColumna2">
                        <a href="verifica_vehiculo.php"  data-icon="arrow-r" data-iconpos="right">
                           <img src="icons/busca-vehiculo" class="sizeIcons">
                        </a>
                        <label id="sizeText2">Verificar Vehiculo</label>
                    </div>
                </div>
                <div class="ui-block-b">
                    <div class="circuloColumna2">
                        <a href="envioPOST/cierraSesion.php"  data-ajax="false"  data-icon="arrow-r" data-iconpos="right">
                           <img src="icons/salir.png" class="sizeIcons">
                        </a>
                        <label id="sizeText2">Salir</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>


