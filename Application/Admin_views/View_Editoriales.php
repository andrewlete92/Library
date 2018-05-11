<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <link rel="stylesheet" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/stylesheet.css">
  <script src="../../js/jquery.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/Editorial.js"></script>
</head>
<body>
<div class="container marco">
<form action="" id="formEditorial">
	<div class="row">
		<div class="col">
			<input type="number" placeholder="Id_Editorial *" required="true" min="0" name="idEdit" id="idEdit">
		</div>
		<div class="col">
			<input type="text" placeholder="Nombre *" required="true" name="name" id="name">
		</div>
		<div class="col">
			<input type="text" placeholder="Dirección" name="Address">
		</div>
		<div class="col">
			<input type="number" placeholder="Teléfono" name="tel">
		</div>
		<div class="col">
			<button class="btn btn-primary" id="btnSaveEdit">GUARDAR</button>
		</div>
	</div>
</form>
</div>
<div id="modal" role="dialog">
      
</div>
<table class="table table-hover table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id_Edit</th>
      <th scope="col">Nombre</th>
      <th scope="col">Dirección</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
    <tbody id="contentEdit">
    
  </tbody>
</table>
</body>
</html>