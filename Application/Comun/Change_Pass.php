<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">

</head>
<body id="contenido">
	<div class="container-fluid changePass">
		<h3>Cambiar Clave</h3>
		<hr>
		<form action="" method="POST">
			<div class="row">
				<div class="col-lg-3">
					<h4>Clave Actal</h4>
				</div>
				<div class="col-lg-2">
					<h4><input type="text" required="true" name="passcurrent"></h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3">
					<h4>Nueva Clave</h4>
				</div>
				<div class="col-lg-2">
					<h4><input type="text" required="true" name="newpass"></h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3">
					<h4>Confirmar Nueva Clave</h4>
				</div>
				<div class="col-lg-2">
					<h4><input type="text" required="true" name="newpass2"></h4>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<button class="btn btn-success">CAMBIAR CLAVE</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>