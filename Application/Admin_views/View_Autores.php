<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <link rel="stylesheet" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/stylesheet.css">
  <script src="../../js/jquery.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/Autor.js"></script>
</head>
<body>
<div class="container marco">
<form action="" id="formAutor">
	<div class="row">
		<div class="col">
			<input class="form-control" name="id" id="id" hidden="true">
			<input type="number" class="form-control" placeholder="Id_Autor *" id="Id_Autor" name="Id_Autor">
		</div>
		<div class="col">
			<input type="text" class="form-control" placeholder="Nombre *" id="name" name="name">
		</div>
		<div class="col">
			<input type="number" class="form-control" placeholder="Edad *" id="edad" name="edad" >
		</div>
		<div class="col">
			<input class="btn btn-primary" id="btnAction" value="GUARDAR">
		</div>
		<div class="col">
			<input type="button" class="btn btnCancel" id="btnCancel" value="CANCELAR" hidden="true">
		</div>
	</div>
</form>
<div id="modal" role="dialog">
      
</div>
</div>
<table class="table table-hover table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id_Autor</th>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody id="contentAutor">
    
  </tbody>
</table>
</body>
</html>