jQuery(document).ready(function() {loadLibros();});

jQuery(document).on('click', '#btnAction', function(event) {
	event.preventDefault();
	if($(this).val()=='GUARDAR'){
		if($('#idLibro').val().length!=0 && $('#titulo').val().length!=0 && $('#SelectEdit').val()!=0 && $('#SelectAutor').val()!=0){
			insertLibros();
		} else {
			$("#modal").load('../Comun/Modals/Error_Data.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		}
	} else if($(this).val()=='ACTUALIZAR'){
		if($('#idLibro').val().length!=0 && $('#titulo').val().length!=0 && $('#SelectEdit').val()!=0 && $('#SelectAutor').val()!=0){
			updateLibros($('#id').val());
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
	findLibro(id);
});

jQuery(document).on('click', '.btnDelete', function(){
	event.preventDefault();
	var id = $(this).attr('id');
	deleteLibro(id);
});

jQuery(document).on('click', '#btnCancel', function(){
	event.preventDefault();
	limpiar();
	$(this).attr('hidden', 'true');
	$('#btnAction').val('GUARDAR');
	$('.btnEdit').removeAttr('disabled');
	$('.btnDelete').removeAttr('disabled');
});

function loadLibros(){
	jQuery.ajax({
		url: '../db_admin/Libros.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize() + "&action=" + 'load',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			$("#contentLibro").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var fila = "<tr><td>" + value.idLibro + "</td><td>" + value.titulo + "</td><td>" + value.Editorial + "</td><td>" + value.Autor + "</td><td>" + '<input type="button" id="' + value.idLibro + '" class="btn btn-warning btnEdit" value="E"/>' + '<input type="button" id="' + value.idLibro + '" class="btn btn-danger btnDelete" value="X"/>' + "</td></tr>";
					$("#contentLibro").append(fila);
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
	//Cargar Select de Editorial
	jQuery.ajax({
		url: '../db_admin/Libros.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'getEditorial',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			//$("#selectEdit").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var option = '<option value="' + value.idEditorial + '">' + value.Nombre + '</option>';
					$("#SelectEdit").append(option);
				});
			}
		}
	});
	//Cargar select de Autores
	jQuery.ajax({
		url: '../db_admin/Libros.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'getAutor',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			//$("#selectEdit").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var option = '<option value="' + value.idAutor + '">' + value.nomAutor + '</option>';
					$("#SelectAutor").append(option);
				});
			}
		}
	});
}

function insertLibros(){
	var editorial = $('#SelectEdit').val();
	var autor = $('#SelectAutor').val();
	jQuery.ajax({
		url: '../db_admin/Libros.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formLibros').serialize()+ "&action=" + 'insert' + "&editorial=" + editorial + "&autor=" + autor,
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
		loadLibros();
		limpiar();
	});
}

function findLibro(id){
	//alert("El id enviado es: " + id);
	jQuery.ajax({
		url: '../db_admin/Libros.php',
		type: 'POST',
		dataType: 'json',
		data: "&action=" + 'find' + "&id=" + id,
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(data !=null){
			$("#id").val(data[0].idLibro);
			$("#idLibro").val(data[0].idLibro);
			$("#titulo").val(data[0].titulo);
			$("#SelectEdit option[value=" + data[0].idEditorial + "]").attr('selected', 'true');
			$("#SelectAutor option[value=" + data[0].idAutor + "]").attr('selected', 'true');
			$("#btnCancel").removeAttr('hidden');
			$("#btnAction").val('ACTUALIZAR');
			$('.btnEdit').attr('disabled', 'true');
			$('.btnDelete').attr('disabled', 'true');
		}
	});
}

function updateLibros(id){
	var editorial = $('#SelectEdit').val();
	var autor = $('#SelectAutor').val();
	jQuery.ajax({
		url: '../db_admin/Libros.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formLibros').serialize()+ "&action=" + 'update'  + "&editorial=" + editorial + "&autor=" + autor,
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
		loadLibros();
		limpiar();
	});
}

function deleteLibro(id){
	//alert("El id enviado es: " + id);
	jQuery.ajax({
		url: '../db_admin/Libros.php',
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
		loadLibros();
		limpiar();
	});	
}

function limpiar(){
	document.getElementById("formLibros").reset();
	$("#SelectEdit option[value=0]").attr('selected', 'true');
	$("#SelectAutor option[value=0]").attr('selected', 'true');
}