<html>
<head>
	<title>Transinet</title>
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
			<label id="titleWelcomeLogin">Ingresar un termino Articulo</label>
			<form action="menuPrincipal.php" method="post">
					<input id="myFilter" data-type="search" data-mini="true">
				</form>
				<label id="iniciarSesion">Busca Articulo</label>
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