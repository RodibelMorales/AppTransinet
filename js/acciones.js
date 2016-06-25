$(document).on("ready", ini);
	function ini(){
		$("#inputEnvia").click(function(e){ //Funcion encargada de iniciar el proceso de busqueda de una nueva placa
			e.preventDefault();
			InfoNuevaInfraccion();
		});

		$("#detallesMulta").on("click","#inputNplaca", function(e){ // funcion que activa los eventos despues de cargar jquery e inicia la creacion de una nueva placa
			e.preventDefault();
			newPlaca();
		});
		$("#divHecho").on("click","#closeR",function(e){
			redirectDialog();
		});
		$("#diverror").on("click","#closeR",function(e){
			redirectDialog();
		});
		$("#divHecho").hide();
	}

	function InfoNuevaInfraccion(){ //funcion encargada de recibir la placa y mandarla a otra funcion
		buscar = $("#txtPlaca").val();
		ProcesaInformacion();
	}
	function ProcesaInformacion(){
		try {
			var strHtml ="";
			//var array = new Object();
			//array['buscarplaca'] = $("#buscarplaca").val();
			$.ajax({
				type: 		"POST",
				crossDomain: true,
				url: 		$("#form").attr('action'),
				data: 		$("#form").serialize(),
			}).done(function(data){
				$("#formulario1").hide("slow"); //Evento encargado de cerar el div que contiene el formulario busqueda
						var datosFormulario = JSON.parse(data);
						var resultadoForm = "";
						var fechaActual = new Date();
						var m = fechaActual.getMonth() + 1;
						var mes = (m < 10) ? '0' + m : m;
							if(datosFormulario.error == 0){
								onError();
							}else{
								$.each( datosFormulario, function( key, value ) {
									resultadoForm += "<div>";
									resultadoForm += "<label id='titleWelcomeLogin'>Generando Multa...</label>";
									resultadoForm += "<form  id='formularioNuevaMulta'>";
									resultadoForm += "<fieldset id='fieldset'>";
										resultadoForm += "<legend id='textLeyend'>Datos Usuario</legend>";
										resultadoForm += "<label id='basic'>Nombre:</label>";
										resultadoForm += "<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input id='inputMultaNew' readonly name='nombreConductor' type='text' data-mini='true' value='"+value.nombre_propietario+"'></div>";
										resultadoForm += "<label id='basic' >Domicilio:</label>";
										resultadoForm += "<textarea class='ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow'  readonly name='domicilioConductor'>"+value.domicilio+"</textarea>";
									resultadoForm += "</fieldset>";
									resultadoForm += "<fieldset id='fieldset'>";
										resultadoForm +="<legend id='textLeyend'>Tipo de Licencia</legend>";
										resultadoForm +="<select  required name='1tipoLicencia1' >";
											resultadoForm +="<option selected disable value=''>Selecciona una opción</option>";
											resultadoForm +="<option value='1'>A</option>";
											resultadoForm +="<option value='2'>B</option>";
											resultadoForm +="<option value='3'>C</option>";
											resultadoForm +="<option value='4'>D</option>";
										resultadoForm +="</select>";
										resultadoForm +="<label id='basic'>Folio Licencia</label>";
										resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='Flicencia' data-type='text' data-mini='true' required placeholder='Ingresa el Folio de la tarjeta de circulación'></div>";
									resultadoForm += "</fieldset>";
									resultadoForm += "<fieldset id='fieldset'>";
										resultadoForm +="<legend id='textLeyend'>Datos del Vehiculo</legend>";
										resultadoForm +="<label id='basic'>Tipo de vehiculo</label>";
										resultadoForm +="<input type='hidden' name='idvehiculo' data-type='text' data-mini='true' value="+value.id_v+">";
										resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input readonly name='tipoVehiculo' data-type='text' data-mini='true' value="+value.tipo_vehiculo+"></div>";
										resultadoForm +="<div class='ui-grid-b'>";
											resultadoForm +="<div class='ui-block-a'>";
												resultadoForm += "<label id='basictextCenter'>Marca</label>";
												resultadoForm += "<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='marca' data-type='text' data-mini='true' value="+value.marca+" readonly></div>";
										resultadoForm +="</div>";
											resultadoForm +="<div class='ui-block-b'>";
												resultadoForm +="<label id='basictextCenter'>Modelo</label>";
													resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='modelo' data-type='text' data-mini='true' value="+value.modelo+" readonly></div>";
												resultadoForm +="</div>";
											resultadoForm +="<div class='ui-block-c'>";
											resultadoForm +="<label id='basictextCenter'>Color</label>";
												resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='color' data-type='text' data-mini='true' value="+value.color+" readonly></div>";
											resultadoForm += "</div>";
										resultadoForm +="</div>";    
										resultadoForm +="<label id='basic'>Estado</label>";
										resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input readonly name='placaEstado' data-type='text' type='text' data-mini='true' value='QuintanaRoo'></div>";
										resultadoForm +="<label id='basic'>Placas</label>";
										resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input readonly name='NumPlacas' data-type='text' data-mini='true' value="+value.matricula+"></div>";
									resultadoForm += "</fieldset>";
									resultadoForm +="<fieldset id='fieldset'>";
										resultadoForm +="<legend id='textLeyend'>Multa creada en</legend>";
										resultadoForm +="<label id='basic'>Dirección:</label>";
										resultadoForm +="<textarea class='ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow' name='direccionMulta'  required placeholder='Ingresa la dirección actual'></textarea>";
										resultadoForm +="<div class='ui-grid-a'>";
											resultadoForm+="<div class='ui-block-a'>";
												resultadoForm +="<label id='basic'>Fecha</label>";
												resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='fechaMulta' data-mini='true' data-type='text' value="+fechaActual.getFullYear()+"/"+mes+"/"+fechaActual.getDate() +" readonly></div>";
											resultadoForm+="</div>";
											resultadoForm+="<div class='ui-block-b'>";
												resultadoForm+="<label id='basic'>Hora</label>";
												resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='horaMulta' data-mini='true' data-type='text' value="+fechaActual.getHours()+":"+fechaActual.getMinutes()+":"+fechaActual.getSeconds()+" readonly></div>";
											resultadoForm+="</div>";
										resultadoForm +="</div>";
									resultadoForm +="</fieldset>";
									resultadoForm +="<fieldset id='fieldset'>";
										resultadoForm +="<legend id='textLeyend'>Multa</legend>";
										resultadoForm +="<div class='ui-grib-a'>";
											resultadoForm +="<label id='basic'>Grupo</label>";
												resultadoForm +="<select name='grupoMulta' required > ";
													resultadoForm +="<option select disable value=''>Selecciona una opción</option>";
													resultadoForm +="<option value='1'>Grupo 1</option>"
													resultadoForm +="<option value='2'>Grupo 2</option>";
													resultadoForm +="<option value='3'>Grupo 3</option>";
												resultadoForm +="</select>";
										resultadoForm +="</div>";
											resultadoForm +="<label id='basic'>Articulo</label>";
											resultadoForm +="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='articuloMulta' data-mini='true' type='text' required placeholder='Articulo'></div>";
										resultadoForm +="<textarea class='ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow' name='ObservacionesMulta' placeholder='Comentarios..'></textarea>";
										resultadoForm +="<label id='basic'>Documento Retenido</label>";
										resultadoForm +="<select required name='select-native-1' >";
											resultadoForm +="<option seleced disable value=''>Selecciona una Opción</option>";
											resultadoForm +="<option value='1'>A</option>";
											resultadoForm +="<option value='2'>B</option>";
											resultadoForm +="<option value='3'>C</option>";
											resultadoForm +="<option value='4'>D</option>";
										resultadoForm +="</select>";
										resultadoForm +="</div>";
									resultadoForm +="</fieldset>";
										resultadoForm +="<label id='iniciarSesion'>Crear Multa</label>";
										resultadoForm +="<div class='controlaImgLogin'>";
											resultadoForm +="<input type=image src='icons/guardar.png' id='inputNplaca'>";
										resultadoForm +="</div>";
									resultadoForm +="</form>";
									resultadoForm += "</div>";
								});
								$("#detallesMulta").html(resultadoForm);
								$("#detallesMulta").controlgroup().controlgroup('refresh');
							}
			});
		}
		catch(ex){
			alert("Error al mostrar los datos");
		} //funcion encargada de procesar los datos y mostrar en formato JSON
	}
	function newPlaca(){ //funcion usada para crear una nueva multa
		var datosform = $("#formularioNuevaMulta").serialize();
		
		$("#divHecho").fadeIn("slow");


		$.ajax({
			type: "POST",
			url : "http://chanitoledo.com/transinet/envioPOST/creaMulta.php",
			cache: false,
			data : datosform,
			success: onSuccess,
			error: onError
		});
		return false;
	}
	function onSuccess(data, status){
		data = $.trim(data);
		$("#divHecho").html(data);
		$.mobile.changePage('#divHecho', 'pop', true, true);
	}
	function onError(data,status){
		
		$("#diverror").html(data);
		$.mobile.changePage('#diverror', 'pop', true, true);
	}
	function redirectDialog(){
		location.reload();
	}
	//Funciones que realizan el login y almacenamiento de las variables de sesion//


