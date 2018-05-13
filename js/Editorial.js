jQuery(document).ready(function() {loadEditorial();});

jQuery(document).on('click', '#btnAction', function(event) {
	event.preventDefault();
	if($(this).val()=='GUARDAR'){
		if($('#idEdit').val().length!=0 && $('#name').val().length!=0){
			insertEdit();
		} else {
			$("#modal").load('../Comun/Modals/Error_Data.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		}
	} else if ($(this).val()=='ACTUALIZAR') {
		if($('#idEdit').val().length!=0 && $('#name').val().length!=0){
			updateEdit($('#id').val());
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
	findEdit(id);
});

jQuery(document).on('click', '.btnDelete', function(){
	event.preventDefault();
	var id = $(this).attr('id');
	deleteEdit(id);
});

jQuery(document).on('click', '#btnCancel', function(){
	event.preventDefault();
	limpiar();
	$(this).attr('hidden', 'true');
	$('#btnAction').val('GUARDAR');
	$('.btnEdit').removeAttr('disabled');
	$('.btnDelete').removeAttr('disabled');
});

function loadEditorial(){
	jQuery.ajax({
		url: '../db_admin/Editorial.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize()+ "&action=" + 'load',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			$("#contentEdit").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var fila = "<tr><td>" + value.idEditorial + "</td><td>" + value.nombre + "</td><td>" + value.direccion + "</td><td>" + value.telefono + '</td><td>' + '<input type="button" id="' + value.idEditorial + '" class="btn btn-warning btnEdit" value="E"/>' + '<input type="button" id="' + value.idEditorial + '" class="btn btn-danger btnDelete" value="X"/>' + "</td></tr>";
					$("#contentEdit").append(fila);
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

function insertEdit(){
	jQuery.ajax({
		url: '../db_admin/Editorial.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formEditorial').serialize()+ "&action=" + 'insert',
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
		loadEditorial();
		limpiar();
	});	
}

function limpiar(){
	document.getElementById("formEditorial").reset();
}

function findEdit(id){
	//alert("El id enviado es: " + id);
	jQuery.ajax({
		url: '../db_admin/Editorial.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'find' + "&id=" + id,
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(data !=null){
			$("#id").val(data[0].idEditorial);
			$("#idEdit").val(data[0].idEditorial);
			$("#name").val(data[0].nombre);
			$("#Address").val(data[0].direccion);
			$("#tel").val(data[0].telefono);
			$("#btnCancel").removeAttr('hidden');
			$("#btnAction").val('ACTUALIZAR');
			$('.btnEdit').attr('disabled', 'true');
			$('.btnDelete').attr('disabled', 'true');
		}
	});
}

function updateEdit(id){
	jQuery.ajax({
		url: '../db_admin/Editorial.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formEditorial').serialize()+ "&action=" + 'update',
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
		loadEditorial();
		limpiar();
	});	
}

function deleteEdit(id){
	//alert("El id enviado es: " + id);
	jQuery.ajax({
		url: '../db_admin/Editorial.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'delete' + "&id=" + id,
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			$("#contentEdit").html('');
			if(!data.answ){
				$("#modal").load('../Comun/Modals/Success_Delete.html');
				setTimeout(function(){
				$(".modalpopup").modal();
				},500);
			}
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
		loadEditorial();
		limpiar();
	});	
}