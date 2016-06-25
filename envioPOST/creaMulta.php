<?php
include('../clases/motorClases.php');
 
 $insertaMulta = new buscar();
  if ($_POST) {
	$insertaMulta->num_placa 			      = $_POST['NumPlacas'];
	$insertaMulta->nombre_conductor		  = $_POST['nombreConductor'];
	$insertaMulta->lugar_multado		    = $_POST['direccionMulta'];
	$insertaMulta->placa_estado			    = $_POST['placaEstado'];
	$insertaMulta->observacion			    = $_POST['ObservacionesMulta'];
	$insertaMulta->dia_multa			      = $_POST['fechaMulta'];
  $insertaMulta->hora_multa           = $_POST['horaMulta'];
	$insertaMulta->doc_retenido			    = $_POST['select-native-1'];
	//$this->num_unidad			= $_POST['numPatrulla'];
  $insertaMulta->id_v 				        = $_POST['idvehiculo'];
  $insertaMulta->tipo_licencia_id_l 	= $_POST['1tipoLicencia1'];
  $insertaMulta->grupo_articulos_id_r = $_POST['grupoMulta'];

  	$insertaMulta->GeneraMulta();
  }
  else{
  	echo "<script languaje='javascript'> alert('¡No se recibio ningun dato!'); location.href = '../buscarPlaca.html';</script>";
  }
?>