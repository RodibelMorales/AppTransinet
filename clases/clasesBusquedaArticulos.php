<?php 

class findArticulos{
	public $id_r;
	public $grupo;
	public $articulos;
	public $salario_min;
	public $detalles;


	public function findArticle(){

		$buscaArticulos = "SELECT * FROM grupo_articulos WHERE grupo like '%{$this->grupo}%' or articulos like '%{$this->grupo}%' or salario_min like '%{$this->grupo}%' or detalles like '%{$this->grupo}%'";
		$MandaDatos = mysql_query($buscaArticulos);
		if($resultadoSerch = mysql_num_rows($MandaDatos)){
			$guardaDatos= array();

			while($verBusqueda = mysql_fetch_array($MandaDatos)){
				$guardaDatos[]=array_map('utf8_encode',$verBusqueda);
			}
			echo json_encode($guardaDatos);
		}else{
			$guardaDatos="No se encontro ningun resultado";
			echo json_encode(array('errorBusqueda'=>"0",'msjerror'=>$guardaDatos));
		}
	}
}

?>