<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  	<link rel="stylesheet" href="../../css/bootstrap.min.css">
	<link rel="stylesheet" href="../../css/stylesheet.css">
  	<script src="../../js/jquery.js"></script>
  	<script src="../../js/bootstrap.min.js"></script>
	<script src="../../js/Sucursal.js"></script>
</head>
<body>
<div class="container marco">
<form action="" id="formSucursal">
	<div class="row">
		<div class="col">
			<input type="number" class="form-control" placeholder="Id_Sucursal *" name="id_suc" id="id_suc" min="0">
		</div>
		<div class="col">
			<input type="text" class="form-control" placeholder="Nombre *" name="name" id="name">
		</div>
		<div class="col">
			<input type="text" class="form-control" placeholder="Dirección *" name="Address" id="Address">
		</div>
		<div class="col">
			<button class="btn btn-primary" id="btnSaveSuc" name="btnSaveSuc">GUARDAR</button>
		</div>
	</div>
</form>
<div id="modal" role="dialog">
			
</div>
</div>
<table class="table table-hover table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id_Sucursal</th>
      <th scope="col">Nombre</th>
      <th scope="col">Dirección</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody id="contenido">
    
  </tbody>
</table>
</body>
</html>