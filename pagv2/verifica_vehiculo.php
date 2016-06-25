
<html>
<head>
	<title>Transinet</title>
	<?php
		include('parches/head.php');
	?>
</head>
<body  class="fondoApp">
	<div data-role="page">
		<div class="controlaIMG">
			<img src="img/logoFinal.png" class="img-responsive">
		</div>
		<div data-role="content">
			<label id="titleWelcomeLogin">Ingresa las placas del vehiculo</label>
			<form action="envioPOST/findVehiculo.php" method="post">
					<input name="buscaVehiculo" data-type="text" data-mini="true" required placeholder="Placa del vehiculo">
				<label id="iniciarSesion">Buscar vehiculo</label>
				<div class="controlaImgLogin">
					<fieldset class="ui-grid-a">
						<div class="ui-block-a"><a href="menuPrincipal.php"><img src="icons/back.png" class="bttnBack"></a></div>
						<div class="ui-block-b"><input type=image src="icons/buscar.png" id="inputEnvia"></div>
					</fieldset>
				</div>		
			</form>			
		</div>
	</div>
</body>
</html>