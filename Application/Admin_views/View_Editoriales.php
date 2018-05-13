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
			<input class="form-control" name="id" id="id" hidden="true">
			<input type="number" class="form-control" placeholder="Id_Editorial *" required="true" min="0" name="idEdit" id="idEdit">
		</div>
		<div class="col">
			<input type="text" class="form-control" placeholder="Nombre *" required="true" name="name" id="name">
		</div>
		<div class="col">
			<input type="text" class="form-control" placeholder="Dirección" name="Address" id="Address">
		</div>
		<div class="col">
			<input type="number" class="form-control" placeholder="Teléfono" name="tel" id="tel">
		</div>
		<div class="col">
			<input class="btn btn-primary" id="btnAction" value="GUARDAR">
		</div>
		<div class="col">
			<input type="button" class="btn btnCancel" id="btnCancel" value="CANCELAR" hidden="true">
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
      <th scope="col">Acciones</th>
    </tr>
  </thead>
    <tbody id="contentEdit">
    
  </tbody>
</table>
</body>
</html>