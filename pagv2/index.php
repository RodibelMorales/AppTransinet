<html>
<head>
	<title>Transinet</title>
<?php
include ('parches/head.php');
?>
</head>
<body class="fondoApp">
	<div data-role="page" >
		<div class="controlaIMG">
			<img src="img/logoFinal.png" class="img-responsive">
		</div>
		<div data-role="content">
			<label id="titleWelcomeLogin">Bienvenido</label>
			<form action="envioPOST/inicioSesion.php" method="post" data-ajax="false" >
				<input type="text" name="user" data-mini="true" placeholder="Usuario"/>
				<input type="password" name="pass" data-mini="true" placeholder="Constraseña"/>
				<label id="iniciarSesion">Iniciar Sesion</label>
				<div class="controlaImgLogin">
					<input type=image src="icons/login_transinet.png" id="inputForms" >
				</div>			
			</form>			
		</div>
	</div>
</body>
</html>