$(document).on('ready',ini);

	function ini(){
		$("#formVerificaVehiculo").on("click","#inputBuscaVehiculo", function(e){
			e.preventDefault();
			buscaVehiculo();
		});
		$("#closeR1").click(function(e){
			actualiza();
		});

	}
	function buscaVehiculo(){
				var datoInput = $("#buscaVehiculo").val();
				$.ajax({
					type: "POST",
					url: "http://chanitoledo.com/transinet/envioPOST/findVehiculo.php",
					data: $("#formVerificaVehiculo").serialize(),
					dataType: "html",
					success: function(data){
						var respuestaVehiculo = JSON.parse(data);
						var imprimeVehiculo = "";
						$("#formVerificaVehiculo").hide('slide up');
						console.log(datoInput);
						if(respuestaVehiculo.errorVehiculo ==0){
							mensajeError();
						}else{
							$.each(respuestaVehiculo, function(key, value){
								imprimeVehiculo+="<div>";
									imprimeVehiculo+="<fieldset id='fieldset'>";
										imprimeVehiculo+="<legend id='textLeyend'>Datos del vehiculo</legend>";
											imprimeVehiculo+="<div class='ui-grid-b'>";
												imprimeVehiculo+="<div class='ui-block-a'>";
													imprimeVehiculo+="<label id='basicTextCenter'>Matricula</label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='matricula' data-type='text' data-mini='true' value="+value.matricula+" readonly> </Div>";
												imprimeVehiculo+="</div>";
												imprimeVehiculo+="<div class='ui-block-b'>";
													imprimeVehiculo+="<label id='basicTextCenter'>Modelo</label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='modelo' data-type='text' data-mini='true' value="+value.modelo+" readonly></div>";
												imprimeVehiculo+="</div>";
												imprimeVehiculo+="<div class='ui-block-c'>";
													imprimeVehiculo+="<label id='basicTextCenter'>Año</label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='anio' data-type='text' data-mini='true' value="+value.ano+" readonly></div>";
												imprimeVehiculo+="</div>";
											imprimeVehiculo+="</div>";

											imprimeVehiculo+="<label id='basic'>Numero de serie</label>";
											imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='NumSerie' data-type='text' data-mini='true' value="+value.num_serie+" readonly></div>";

											imprimeVehiculo+="<div class='ui-grid-c'>";
												imprimeVehiculo+="<div class='ui-block-a'>";
													imprimeVehiculo+="<label id='basic'>Marca</label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input readonly name='marca' data-type='text' data-mini='true' value="+value.marca+"></div>";
												imprimeVehiculo+="</div>";

												imprimeVehiculo+="<div class='ui-block-b'>";
													imprimeVehiculo+="<label id='basic'>Vehiculo</label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='vehiculo' data-type='text' data-mini='true' readonly value="+value.tipo_vehiculo+"></div>";
												imprimeVehiculo+="</div>";

												imprimeVehiculo+="<div class='ui-block-c'>";
													imprimeVehiculo+="<label id='basic'>Color<label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='color' data-type='text' data-mini='true' readonly value="+value.color+"></div>";
												imprimeVehiculo+="</div>";

												imprimeVehiculo+="<div class='ui-block-d'>";
													imprimeVehiculo+="<label id='basic'>Cilindraje</label>";
													imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='cilindraje' data-type='text' data-mini='true' readonly value="+value.cilindrage+"></div>";
												imprimeVehiculo+="</div>";
											imprimeVehiculo+="</div>";

											imprimeVehiculo+="<label id='basic'>Descripción:</label>";
											imprimeVehiculo+="<textarea class='ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow' readonly name='Descripción' data-type='text' data-mini='true'>"+value.descripcion+"</textarea>";
									imprimeVehiculo+="</fieldset>";


									imprimeVehiculo+="<fieldset id='fieldset'>";
										imprimeVehiculo+="<legend id='textLeyend'>Datos del Propietario</legend>";
											imprimeVehiculo+="<label id='basic'>Nombre</label>";
											imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset'><input name='namePropietario' data-type='text' data-mini='true' readonly value="+value.nombre_propietario+"></div>";

											imprimeVehiculo+="<label id='basic'>Domicilio</label>";
											imprimeVehiculo+="<textarea class='ui-input-text ui-shadow-inset ui-body-inherit ui-corner-all ui-textinput-autogrow' name='domicilio' data-type='text' data-mini='true' readonly>"+value.domicilio+"</textarea>";

											imprimeVehiculo+="<div class='ui-grid-a'>";
												imprimeVehiculo+="<div class='ui-block-a'>";
													imprimeVehiculo+="<label id='basic'>Telefono</label>";
														imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset inputdatos'>";
															imprimeVehiculo+="<input class='' readonly name='numTelefono' data-type='text' data-mini='true' value="+value.telefono+" readonly>";
														imprimeVehiculo+="</div>";
												imprimeVehiculo+="</div>";

												imprimeVehiculo+="<div class='ui-block-b'>";
													imprimeVehiculo+="<label id='basic'>Email</label>";
														imprimeVehiculo+="<div class='ui-input-text ui-body-inherit ui-corner-all ui-mini ui-shadow-inset inputdatos'>";
															imprimeVehiculo+="<input class='' name='email' data-type='text' data-mini='true' readonly value="+value.email+">";
														imprimeVehiculo+="</div>";
												imprimeVehiculo+="</div>";
											imprimeVehiculo+="</div>";


									imprimeVehiculo+="</fieldset>";

									imprimeVehiculo+="<div class='controlaImgLogin'>";
										imprimeVehiculo+="<fieldset class='ui-grid-a'>";
											imprimeVehiculo+="<div class='ui-block-a'>";
												imprimeVehiculo+="<a href='verifica_vehiculo.html'><img src='icons/back.png' class='bttnBack'></a>";
											imprimeVehiculo+="</div>";
											imprimeVehiculo+="<div class='ui-block-b'>";
												imprimeVehiculo+="<a href='menuPrincipal.html'><img src='icons/guardar.png' id='btnConfirmaVehiculo'></a>";
											imprimeVehiculo+="</div>";
										imprimeVehiculo+="</fieldset>";
									imprimeVehiculo+="</div>";
								imprimeVehiculo+="</div>";
							});
							$("#ResultadoVehiculo").html(imprimeVehiculo);
							$("#ResultadoVehiculo").listview().listview('refresh');
						}
					}
				});
	}
	function mensajeError(data, status){
		$("#diverror").html(data);
		$.mobile.changePage('#diverror', 'pop', true, true);
	}
	function actualiza(){
		location.reload();
	}