<?php
class buscar{
//Tabla Vehiculos//
public $id_v;
public $tipo_vehiculo;
public $placa;
public $modelo;
public $ano;
public $marca;
public $num_serie;
public $color;
public $descripcion;
public $cilindrage;
public $propietarios_id_prop;
//Tabla Propietarios//
public $id_prop;
public $nombre_propietario;
public $rfc;
public $localidad;
public $estado;
public $domicilio;
public $email;
public $telefono;
public $Usuarios_id;
/*Tabla Multa*/
public $id_m;
public $lugar_multado;
public $placa_estado;
public $observacion;
public $dia_multa;
public $hora_multa;
public $doc_retenido;
public $num_unidad;
public $oficiales_id_p;
public $grupo_articulos_id_r;
public $tipo_licencia_id_l;


	public function buscarPlaca(){
		$BuscaPlaca = mysql_query("SELECT t1.nombre_propietario,t1.domicilio,t1.id_prop, t2.tipo_vehiculo,t2.marca,t2.modelo,t2.color,t2.id_v, t2.matricula 
			from vehiculo t2 inner join propietarios t1 where  t1.id_prop = t2.id_V  and matricula = '{$this->matricula}' ");
		if ($Buscadato = mysql_num_rows($BuscaPlaca)){
			$contieneDatos= array();
			while ($VerPlaca = mysql_fetch_array($BuscaPlaca)) {
				$contieneDatos[]= array_map('utf8_encode',$VerPlaca);

			}
			

			echo json_encode($contieneDatos);

		}
		else{
  				$contieneDatos["msjerror"] ="
				<div data-role='header'>
    				<div class='controlaIMG'>
						<img src='img/logoFinal.png' class='img-responsive'>
					</div>
  				</div>
  				<div data-role='content'>
    				<p id='textDialogSuccess'>La placa ingresada no existe!</p>
    				<a data-role='button' href='buscarPlaca.html' id='closeR'>Intentar Nuevamente</a>
  				</div>";
			echo json_encode(array('error'=>"0",'msjerror'=>"", $contieneDatos));
		}

		mysql_free_result($BuscaPlaca);
		mysql_close();
	}
	public function GeneraMulta(){
		$NewMulta = mysql_query("INSERT INTO multas(
			num_placa,
			nombre_conductor,
			lugar_multado,
			placa_estado,
			observacion,
		    dia_multa,
		    hora_multa,
		    doc_retenido,
		    vehiculo_id_v,
		    tipo_licencia_id_l,
		    /*oficiales_id_p,*/
		    grupo_articulos_id_r)
				
				VALUES ('{$this->num_placa}',
					'{$this->nombre_conductor}',
					'{$this->lugar_multado}',
					'{$this->placa_estado}',
					'{$this->observacion}',
					'{$this->dia_multa}',
					'{$this->hora_multa}',
					'{$this->doc_retenido}',
					'{$this->id_v}',
					'{$this->tipo_licencia_id_l}',
					'{$this->grupo_articulos_id_r}')
		");
		if ($NewMulta) {
			echo "	<div data-role='header'>
	    				<div class='controlaIMG'>
							<img src='img/logoFinal.png' class='img-responsive'>
						</div>
	  				</div>
	  				<div data-role='content'>
	    				<p id='textDialogSuccess'>Multa creada con exito!</p>
	    				<a data-role='button' href='buscarPlaca.html' id='closeR'>Close</a>
	  				</div>";
		}
		else{
			echo "<script languaje='javascript'> alert('¡Ha ocurrido un error al crear la multa intente una vez más!'); location.href = '../buscarPlaca.html';</script>";
		}
		mysql_close();

	}

	public function buscaVehiculo(){
		$BuscaPlaca = mysql_query("SELECT t1.nombre_propietario,t1.email,t1.telefono,t1.domicilio,t1.id_prop, t2.tipo_vehiculo,t2.marca,t2.ano,t2.num_serie,t2.cilindrage,t2.descripcion,t2.modelo,t2.color,t2.id_v, t2.matricula 
			from vehiculo t2 inner join propietarios t1 where  t1.id_prop = t2.id_V  and matricula = '{$this->matricula}' ");
		if ($Buscadato = mysql_num_rows($BuscaPlaca)){
			$contieneDatos= array();
			while ($VerPlaca = mysql_fetch_array($BuscaPlaca)) {
				$contieneDatos[]= array_map('utf8_encode',$VerPlaca);

			}
			

			echo json_encode($contieneDatos);

		}
		else{
  				$contieneDatos ="error";
			echo json_encode(array('errorVehiculo'=>"0",'msjerror'=>$contieneDatos));
		}

		mysql_free_result($BuscaPlaca);
		mysql_close();
	}
}

?>