jQuery(document).ready(function() {loadEditorial();});

jQuery(document).on('click', '#btnSaveEdit', function(event) {
	event.preventDefault();
	if($('#idEdit').val().length!=0 && $('#name').val().length!=0){
	insertEdit();
	} else {
	$("#modal").load('../Comun/Modals/Error_Data.html');
	setTimeout(function(){
	$(".modalpopup").modal();
	},500);
	}
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
					var fila = "<tr><td>" + value.idEditorial + "</td><td>" + value.nombre + "</td><td>" + value.direccion + "</td><td>" + value.telefono + '</td><td>' + '<input type="button" value="btn" id="delbtn"/>' +"</td></tr>";
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