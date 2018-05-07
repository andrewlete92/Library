jQuery(document).on('submit','#formlg',function(event){
	event.preventDefault();

	jQuery.ajax({
		url: '../db_admin/Login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$('#btnlg').val("VALIDANDO...");
		}
	})
	.done(function(respuesta) {
		//console.log(respuesta);
		if (!respuesta.error) {
			if(respuesta.type=='Admin'){
			//location.href='';
			$('#btnlg').val("INGRESAR");
			alert("Perfil Admin");
			} else if (respuesta.type=='User'){
			$('#btnlg').val("INGRESAR");
			//location.href='';
			alert("Perfil Usuario");
			}
		}else {
			$('.error').slideDown('slow');
			setTimeout(function(){
				$('.error').slideUp('slow');
			},3000);
			$('#btnlg').val("INGRESAR");
		}
	})
	.fail(function(resp) {
		//console.log(resp);
	})
	.always(function(){
		console.log("Complete");
	});
});

function signin(){
	window.location = "SignInUp.php";
}