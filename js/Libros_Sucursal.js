jQuery(document).ready(function() {loadLibros_Sucursal();});

jQuery(document).on('click', '#btnSaveLibSuc', function(event) {
	event.preventDefault();
	
	if($('#numCopias').val().length!=0 && $('#SelectLibro').val()!=0 && $('#SelectSucursal').val()!=0){
	insertCopias();
	} else {
	$("#modal").load('../Comun/Modals/Error_Data.html');
	setTimeout(function(){
	$(".modalpopup").modal();
	},500);
	}
});

function loadLibros_Sucursal(){
	jQuery.ajax({
		url: '../db_admin/Libros_Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize() + "&action=" + 'load',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			$("#contentLibro_Sucursal").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var fila = "<tr><td>" + value.titulo + "</td><td>" + value.NomSucursal + "</td><td>" + value.numCopias + "</td><td>" + '<input type="button"/>' + "</td></tr>";
					$("#contentLibro_Sucursal").append(fila);
				});
			}
		}
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	cargarSelect();
}

function cargarSelect(){
	//Cargar Select de Libros
	jQuery.ajax({
		url: '../db_admin/Libros_Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'getLibro',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			if(data !=null){
				$.each(data, function(index,value){
					var option = '<option value="' + value.idLibro + '">' + value.titulo + '</option>';
					$("#SelectLibro").append(option);
				});
			}
		}
	})
	.fail(function(){
		console.log("error");
	});
	//Cargar select de Sucursales
	jQuery.ajax({
		url: '../db_admin/Libros_Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'getSucursal',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			if(data !=null){
				$.each(data, function(index,value){
					var option = '<option value="' + value.idSucursal + '">' + value.nomSucursal + '</option>';
					$("#SelectSucursal").append(option);
				});
			}
		}
	});
}

function insertCopias(){
	var libro = $('#SelectLibro').val();
	var sucursal = $('#SelectSucursal').val();
	jQuery.ajax({
		url: '../db_admin/Libros_Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formLibros').serialize()+ "&action=" + 'insert' + "&libro=" + libro + "&sucursal=" + sucursal,
	})
	.done(function(data){
		console.log("success");
		console.log(data);
		if(!data.answ){
			$("#modal").load('../Comun/Modals/Success_Save.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		} 
	})
	.fail(function(fail) {
		console.log(fail);
		$("#modal").load('../Comun/Modals/Error_Save.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
	})
	.always(function() {
		console.log("complete");
		loadLibros_Sucursal();
		limpiar();
	});
}

function limpiar(){
	document.getElementById("formLibros").reset();
}