jQuery(document).ready(function() {loadSucursal();});

jQuery(document).on('click', '#btnAction', function(event) {
	event.preventDefault();
	if($(this).val()=='GUARDAR'){
		if($('#id_suc').val().length!=0 && $('#name').val().length!=0 && $('#Address').val().length!=0){
			insertSucursal();
		} else {
			$("#modal").load('../Comun/Modals/Error_Data.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		}
	} else if ($(this).val()=='ACTUALIZAR') {
		if($('#id_suc').val().length!=0 && $('#name').val().length!=0 && $('#Address').val().length!=0){
			updateSucursal($('#id').val());
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
	findSucursal(id);
});

jQuery(document).on('click', '.btnDelete', function(){
	event.preventDefault();
	var id = $(this).attr('id');
	deleteSucursal(id);
});

jQuery(document).on('click', '#btnCancel', function(){
	event.preventDefault();
	limpiar();
	$(this).attr('hidden', 'true');
	$('#btnAction').val('GUARDAR');
	$('.btnEdit').removeAttr('disabled');
	$('.btnDelete').removeAttr('disabled');
});

function loadSucursal(){
	jQuery.ajax({
		url: '../db_admin/Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize()+ "&action=" + 'load',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			$("#contenido").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var fila = "<tr><td>" + value.idSucursal + "</td><td>" + value.NomSucursal + "</td><td>" + value.direccion + '</td><td>' + '<input type="button" id="' + value.idSucursal + '" class="btn btn-warning btnEdit" value="E"/>' + '<input type="button" id="' + value.idSucursal + '" class="btn btn-danger btnDelete" value="X"/>' + "</td></tr>";
					$("#contenido").append(fila);
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
}

function insertSucursal(){
	jQuery.ajax({
		url: '../db_admin/Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formSucursal').serialize()+ "&action=" + 'insert',
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
		console.log('fail');
		$("#modal").load('../Comun/Modals/Error_Save.html');
		setTimeout(function(){
		$(".modalpopup").modal();
		},500);
	})
	.always(function() {
		console.log("complete");
		loadSucursal();
		limpiar();
	});
}

function findSucursal(id){
		jQuery.ajax({
		url: '../db_admin/Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'find' + "&id=" + id,
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(data !=null){
			$("#id").val(data[0].idSucursal);
			$("#id_suc").val(data[0].idSucursal);
			$("#name").val(data[0].NomSucursal);
			$("#Address").val(data[0].direccion);
			$("#btnCancel").removeAttr('hidden');
			$("#btnAction").val('ACTUALIZAR');
			$('.btnEdit').attr('disabled', 'true');
			$('.btnDelete').attr('disabled', 'true');
		}
	});
}

function updateSucursal(id){
	jQuery.ajax({
		url: '../db_admin/Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formSucursal').serialize()+ "&action=" + 'update',
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
		loadSucursal();
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

function deleteSucursal(id){
	jQuery.ajax({
		url: '../db_admin/Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'delete' + "&id=" + id,
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			if(!data.answ){
				$("#modal").load('../Comun/Modals/Success_Delete.html');
				setTimeout(function(){
				$(".modalpopup").modal();
				},500);
			}
		}
		loadSucursal();
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

function limpiar(){
	document.getElementById("formSucursal").reset();
}