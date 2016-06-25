<?php 
$confi= null;
$confi= array();
$confi['server'] = 'localhost';
$confi['usuario'] = 'root';
$confi['clave'] = '';
$confi['basedato'] = 'transinet';
$con = new conexionBD($confi['server'],$confi['usuario'],$confi['clave'],$confi['basedato']);

	class conexionBD{
		public $enlace;
		function __construct($server, $usuario, $clave, $basedato){
			$this->enlace = mysql_connect($server,$usuario,$clave) or die(mysql_error());

			mysql_select_db($basedato,$this->enlace);
		}
		function __destruct(){
			mysql_close($this->enlace);
		}
	}
?>
