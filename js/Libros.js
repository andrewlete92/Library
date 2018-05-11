jQuery(document).ready(function() {loadLibros();});

jQuery(document).on('click', '#btnSaveLib', function(event) {
	event.preventDefault();
	
	if($('#idLibro').val().length!=0 && $('#titulo').val().length!=0 && $('#SelectEdit').val()!=0 && $('#SelectAutor').val()!=0){
	insertLibros();
	} else {
	$("#modal").load('../Comun/Modals/Error_Data.html');
	setTimeout(function(){
	$(".modalpopup").modal();
	},500);
	}
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
					var fila = "<tr><td>" + value.idLibro + "</td><td>" + value.titulo + "</td><td>" + value.Editorial + "</td><td>" + value.Autor + "</td><td>" +'<input type="button"/>' + "</td></tr>";
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

function limpiar(){
	document.getElementById("formLibros").reset();
}