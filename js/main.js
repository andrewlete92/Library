//Inicia verificación Login
jQuery(document).on('submit','#formlg',function(event){
	event.preventDefault();

	jQuery.ajax({
		url: '../db_admin/Login.php',
		type: 'POST',
		dataType: 'json',
		data: $(this).serialize(),
		beforeSend: function(){
			$('#btnlg').val("VALIDANDO..."); //Sustituir por un cargando
		}
	})
	.done(function(respuesta) {
		//console.log(respuesta);
		if (!respuesta.error) {
			if(respuesta.type=='Admin'){
			$('#btnlg').val("INGRESAR");
			location.href='../Admin_views/Admin_panel.html';
			} else if (respuesta.type=='User'){
			$('#btnlg').val("INGRESAR");
			//location.href='';
			location.href='../Users_views/User_panel.html';
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
		console.log(resp);
	})
	.always(function(){
		console.log("Complete");
	});
});
//Finaliza verificación login

function signin(){
	window.location = "SignInUp.php";
}

function logout(){
	window.location = "../Comun/Index.php";
}