<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Inicio</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="../../css/stylesheet.css">
	<script src="../../js/jquery.js"></script>
	<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>-->
	<script src="../../js/main.js"></script>
</head>
<body>
<div class="error">
	<span>Usuario y/o Contraseña son inválidos, por favor verifique</span>
</div>
<div>
	<img class="banner" src="../../img/banner-biblioteca.jpg">
</div>

<section>
	<div class="row barra d-flex flex-row">
	<form action="" id="formlg">
		<div class="row">
			<div class="col">
				<h3>EMAIL</h3>
			</div>
			<div class="col">
				<input class="textbox" type="text" required="true" name="userlg" placeholder="Email" >
			</div>
			<div class="">
				<h3>CONTRASEÑA</h3>
			</div>
			<div class="col">
				<input class="textbox2" type="password" required="true" name="passlg" placeholder="Contraseña">
			</div>
			<div class="col">
				<!--<button class="btn btn-success" name="btnlg">INGRESAR</button>-->
				<input type="submit" class="btn btn-success" id="btnlg" value="INGRESAR">
			</div>
		</div>
	</form>
		<div class="col">
			<button class="btn btn-primary" name="btnlg2" onclick="signin()">REGISTRARSE</button>		
		</div>
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
</section>

<footer>
	<iframe src="footer.html" id="footer"></iframe>
</footer>
	
</body>
</html>