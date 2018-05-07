<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>SignIn</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
	<link rel="stylesheet" href="../../css/stylesheet.css">
	<link rel="stylesheet" href="../../css/footer.css">
</head>
<body>
<div class="confirmation">
	<span>Felicidades! El usuario ha sido registrado con éxito</span>
</div>
	<div>
		<img src="../../img/signin_banner.jpg" style="width: 100%; height: 100%">
	</div>
<nav class="navbar navbar-expand-sm bg-light">
  	<ul class="navbar-nav">
		 <li class="nav-item">
      			<a class="nav-link" href="Index.php">Inicio</a>
  		</li>
   		<li class="nav-item">
     			<a class="nav-link" href="Libros.php">Lecturas</a>
   		</li>
   		<li class="nav-item">
      			<a class="nav-link" href="Editrial-php">Noticias</a>
   		</li>
	</ul>
</nav>

<section>
	<form action="Managment.html" method="POST">
		<div class="container" style="margin: 10px;padding: 10px">
		<div class="row">
			<div class="col-lg-2">
				<h4>N°Documento</h4>
			</div>
			<div class="col">
				<h4><input type="number" required="true" placeholder="N° Documento"></h4>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<h4>Nombre</h4>
			</div>
			<div class="col">
				<h4><input type="text" required="true" placeholder="Nombre"></h4>
			</div>
			<div class="col-lg-2">
				<h4>Apellido</h4>
			</div>
			<div class="col">
				<h4><input type="text" required="true" placeholder="Apellido"></h4>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<h4>Email</h4>
			</div>
			<div class="col">
				<h4><input type="email" required="true" placeholder="Ingrese Email"></h4>
			</div>
			<div class="col-lg-2">
				<h4>Contraseña</h4>
			</div>
			<div class="col">
				<h4><input type="password" required="true" placeholder="Contraseña"></h4>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<h4>Confirmar Email</h4>
			</div>
			<div class="col">
				<h4><input type="mail" required="true" placeholder="Confirmar Email"></h4>
			</div>
			<div class="col-lg-2">
				<h4>Confirmar Contraseña</h4>
			</div>
			<div class="col">
				<h4><input type="password" required="true" placeholder="Contraseña"></h4>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
			<h4>Departamento</h4>
			</div>
			<div class="col">
				<h4><input type="mail" required="true" placeholder="Departamento"></h4>
			</div>
			<div class="col-lg-2">
				<h4>Ciudad</h4>
			</div>
			<div class="col">
				<h4><input type="password" required="true" placeholder="Ciudad"></h4>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-2">
				<h4>Dirección</h4>
			</div>
			<div class="col">
				<h4><input type="mail" required="true" placeholder="Dirección"></h4>
			</div>
			<div class="col-lg-2">
				<h4>Teléfono</h4>
			</div>
			<div class="col">
				<h4><input type="password" required="true" placeholder="Telefono"></h4>
			</div>
		</div>
		</div>
		<div class="row" style="margin: 20px">
			<button class="btn btn-success">REGISTRARSE</button>
		</div>
	</form>

</section>

<footer>
	<iframe src="footer.html" id="footer"></iframe>
</footer>
</body>
</html>