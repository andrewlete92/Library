jQuery(document).ready(function() {loadAutor();});

jQuery(document).on('click', '#btnSaveAut', function(event) {
	event.preventDefault();
	if($('#Id_Autor').val().length!=0 && $('#name').val().length!=0 && $('#edad').val().length!=0){
	insertAutor();
	} else {
	$("#modal").load('../Comun/Modals/Error_Data.html');
	setTimeout(function(){
	$(".modalpopup").modal();
	},500);
	}
});

function loadAutor(){
	jQuery.ajax({
		url: '../db_admin/Autor.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize()+ "&action=" + 'load',
	})
	.done(function(data) {
		//console.log("success");
		console.log(data);
		if(!data.error){
			$("#contentAutor").html('');
			if(data !=null){
				$.each(data, function(index,value){
					var fila = "<tr><td>" + value.idAutor + "</td><td>" + value.nomAutor + "</td><td>" + value.edad + '</td><td>' + '<input type="button" value="btn" id="delbtn"/>' +"</td></tr>";
					$("#contentAutor").append(fila);
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

function insertAutor(){
	jQuery.ajax({
		url: '../db_admin/Autor.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formAutor').serialize()+ "&action=" + 'insert',
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
		loadAutor();
		limpiar();
	});	
}

function limpiar(){
	document.getElementById("formAutor").reset();
}