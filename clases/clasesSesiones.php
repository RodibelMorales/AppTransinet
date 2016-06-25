<?php 
	class Sesiones{
		public $id_p;
		public $nombre;
		public $apellido;
		public $usuario;
		public $password;
		public $status;
		public $imei;
		public $telefono;
		public $direccion;


		public function StarSesion(){
			$update =mysql_query("UPDATE oficiales SET status= '1' where usuario = '{$this->usuario}'");
			$consultaUsuario = "SELECT * FROM oficiales WHERE usuario = '{$this->usuario}' AND password= '{$this->password}' ";

			$RealizaConsulta = mysql_query($consultaUsuario) or die(mysql_error());

			$consultaUsuario = mysql_num_rows($RealizaConsulta);
				
			if ($consultaUsuario >0) {
			
				$datosLogin=array();

				while ($datosUser = mysql_fetch_array($RealizaConsulta)){
					//$datosLogin[] = array_map('utf8_encode', $datosUser);
					
						$id 		= $datosUser[0];
						$nombre 	= $datosUser[1];
						$status		= $datosUser[5];
						$num_unidad = $datosUser[13];
					
						$datosLogin['id_p'] 		= $id;
						$datosLogin['nombre']  		= $nombre;
						$datosLogin['status'] 		= $status;
						$datosLogin['num_unidad']	= $num_unidad;
						
				}		
				echo json_encode($datosLogin);
		
			}
			else{
				$update =mysql_query("UPDATE oficiales SET status= '0' where usuario = '{$this->usuario}'");
				$datosLogin["mnsjError"]="
							<div data-role='header'>
			    				<div class='controlaIMG'>
									<img src='img/logoFinal.png' class='img-responsive'>
								</div>
			  				</div>
			  				<div data-role='content'>
			    				<p id='textDialogSuccess'>Tu usuario y/o contraseña son invalidos!</p>
			    				<a data-role='button' href='buscarPlaca.html' id='closeR'>Intentar Nuevamente</a>
			  				</div>";

						echo json_encode(array('error'=>"0",'mnsjError'=>"", $datosLogin ));
			}
					 
			mysql_free_result($RealizaConsulta);
			mysql_close();
		} 
		public function CloseSesion(){
			$consutal ="UPDATE oficiales SET status= '0' where id_p = '{$this->id_p}'";
			$updateClose =mysql_query($consutal);
			if ($updateClose) {
				echo json_encode("Sesion Cerrada Correctamente");
			}else{
				$contieneDatos="Ha ocurrido un error intentar cerrar la sesion";
				echo json_encode(array('errorcierraSesion'=>"0",'msjerror'=>$contieneDatos));
			}
		}

	}
?>