<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Inicio</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="css/stylesheet.css">

</head>
<body>
<div>
	<img class="banner" src="img/banner-biblioteca.jpg">
</div>

<section>
	<div>
		<div class="row barra">
			<div class="col-lg-2">
				<h3>EMAIL</h3>
			</div>
			<div class="col-lg-2">
				<input type="text" required="true">
			</div>
			<div class="col-lg-2">
				<h3>CONTRASEÑA</h3>
			</div>
			<div class="col-lg-2">
				<input type="password" required="true">
			</div>
			<div class="col-lg-2">
				<button class="btn btn-success botonIni">INGRESAR</button>
			</div>
			<div class="col-lg-2">
				<button class="btn btn-primary botonIni" onclick="signin()">REGISTRARSE</button>
			</div>
		</div>
	</div>
</section>


<footer>
	<iframe src="footer.html" id="footer"></iframe>
</footer>
	
</body>
</html>

<script>
	function login(){
	window.location = "Managment.html";
	}

	function signin(){
		window.location = "SignInUp.php";
	}
</script>