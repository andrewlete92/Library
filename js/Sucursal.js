jQuery(document).ready(function() {loadSucursal();});

jQuery(document).on('click', '#btnSaveSuc', function(event) {
	event.preventDefault();
	insertSucursal();
	loadSucursal();
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
					var fila = "<tr><td>" + value.idSucursal + "</td><td>" + value.NomSucursal + "</td><td>" + value.direccion + "</td></tr>";
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
if($('#id_suc').val().length!=0 && $('#name').val().length!=0 && $('#Address').val().length!=0){
	jQuery.ajax({
		url: '../db_admin/Sucursal.php',
		type: 'POST',
		dataType: 'json',
		data: $('#formSucursal').serialize()+ "&action=" + 'insert',
	})
	.done(function(data){
		console.log("success");
		console.log(data);
		if(!data.asw){
			$("#modal").load('../Comun/Modals/Success_Save.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);
		} else {
			$("#modal").load('../Comun/Modals/Error_Save.html');
			setTimeout(function(){
			$(".modalpopup").modal();
			},500);

		}	
	})
	.fail(function(fail) {
		console.log("fail");
	})
	.always(function() {
		console.log("complete");
	});
} else {
	$("#modal").load('../Comun/Modals/Error_Data.html');
	setTimeout(function(){
	$(".modalpopup").modal();
	},500);
}
}