jQuery(document).ready(function() {loadLibros_Sucursal();});

jQuery(document).on('click', '#btnAction', function(event) {
	event.preventDefault();
	if($(this).val()=='GUARDAR'){
		if($('#numCopias').val().length!=0 && $('#SelectLibro').val()!=0 && $('#SelectSucursal').val()!=0){
			insertCopias();
	} else {
			$("#modal").load('../Comun/Modals/Error_Data.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		}
	} else if ($(this).val()=='ACTUALIZAR') {
		if($('#numCopias').val().length!=0 && $('#SelectLibro').val()!=0 && $('#SelectSucursal').val()!=0){
			updateCopias($('#id').val());
		} else {
			$("#modal").load('../Comun/Modals/Error_Data.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		}
	}
});

jQuery(document).on('click', '.btnEdit', function(){
	event.preventDefault();
	var id = $(this).attr('id');
	findCopias(id);
});

jQuery(document).on('click', '.btnDelete', function(){
	event.preventDefault();
	var id = $(this).attr('id');
	deleteCopias(id);
});

jQuery(document).on('click', '#btnCancel', function(){
	event.preventDefault();
	limpiar();
	$(this).attr('hidden', 'true');
	$('#btnAction').val('GUARDAR');
	$('.btnEdit').removeAttr('disabled');
	$('.btnDelete').removeAttr('disabled');
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
					var fila = "<tr><td>" + value.titulo + "</td><td>" + value.NomSucursal + "</td><td>" + value.numCopias +  "</td><td>"  + '<input type="button" id="' + value.idCopias + '" class="btn btn-warning btnEdit" value="E"/>' + '<input type="button" id="' + value.idCopias + '" class="btn btn-danger btnDelete" value="X"/>' + "</td></tr>";
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

function findCopias(id){
	jQuery.ajax({
		url: '../db_admin/Libros_Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'find' + "&id=" + id,
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(data !=null){
			$("#id").val(data[0].idCopias);
			$("#SelectLibro option[value=" + data[0].idLibro + "]").attr('selected', 'true');
			$("#SelectSucursal option[value=" + data[0].idSucursal + "]").attr('selected', 'true');
			$("#numCopias").val(data[0].numCopias);
			$("#btnCancel").removeAttr('hidden');
			$("#btnAction").val('ACTUALIZAR');
			$('.btnEdit').attr('disabled', 'true');
			$('.btnDelete').attr('disabled', 'true');
		}
	});
}

function updateCopias(id){
	var libro = $('#SelectLibro').val();
	var sucursal = $('#SelectSucursal').val();
	jQuery.ajax({
		url: '../db_admin/Libros_Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formLibros').serialize()+ "&action=" + 'update'  + "&libro=" + libro + "&sucursal=" + sucursal,
	})
	.done(function(data){
		console.log("success");
		console.log(data);
		if(!data.answ){
			$("#modal").load('../Comun/Modals/Success_Update.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		}
		loadLibros_Sucursal();
		limpiar();
	})
	.fail(function(fail) {
		console.log('fail');
		$("#modal").load('../Comun/Modals/Error_Save.html');
		setTimeout(function(){
		$(".modalpopup").modal();
		},500);
	})
	.always(function() {
		console.log("complete");
	});
}

function deleteCopias(id){

}

function limpiar(){
	document.getElementById("formLibros").reset();
	$("#SelectLibro option[value=0]").attr('selected', 'true');
	$("#SelectSucursal option[value=0]").attr('selected', 'true');
}