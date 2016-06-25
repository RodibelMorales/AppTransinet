<?php 
    session_start();
    if (!isset($_SESSION['usuario'])) {
        header("Location:login.php");
        exit();
    }
?>
<html>
<head>
	<title>Transinet</title>
	<meta charset="utf-8">
	<link rel="shortcut icon" href="../../transinet/icons/favicon.ico">
	<link rel="stylesheet" href="../../transinet/jmobile/jquery.mobile-1.4.5.min.css" />
	<link rel="stylesheet" href="../../transinet/css/custom.css">
	<script src="../../transinet/jmobile/jquery-1.11.1.min.js"></script>
	<script src="../../transinet/jmobile/jquery.mobile-1.4.5.min.js"></script>
	<script src="../../transinet/parches/procesosAJAX.js"></script>
	<script src="../../transinet/js/acciones.js"></script>
</head>
<body class="fondoApp">
		<div data-role="page" >
			<div class="controlaIMG">
				<img src="img/logoFinal.png" class="img-responsive">
			</div>
			<div data-role="content">
			<label id="titleWelcomeLogin">Ingresa las placas del vehiculo</label>
			<form action="envioPOST/findPlaca.php" method="post"  id="FormFindPlaca">
				<input type="text" name="buscar" data-mini="true" required placeholder="Buscar placa" id="PlacaVehiculo">
				<label id="iniciarSesion">Busca Articulo</label>
					<div class="controlaImgLogin">
						<fieldset class="ui-grid-a">
							<div class="ui-block-a"><a href="menuPrincipal.php"><img src="icons/back.png" class="bttnBack"></a></div>
							<div class="ui-block-b"><input type=image src="icons/buscar.png" id="inputEnvia"></div>
						</fieldset>
					</div>			
			</form>	
			</div>
			<div data-role="page">
						<div data-role="content">
			<label id="titleWelcomeLogin">Generando Multa...</label>
			<div id="InfoNuevaMulta">
				<form action="../envioPOST/creaMulta.php" method="post" >
						
						<div class="controlaImgLogin">
								<input type=image src="icons/buscar.png" id="inputForms">
						</div>	
				</form>
			</div>
		</div>
			</div>
		</div>
</body>
</html>