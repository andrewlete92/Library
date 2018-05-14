<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <link rel="stylesheet" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/stylesheet.css">
  <script src="../../js/jquery.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/Libros_Sucursal.js"></script>
</head>
<body>
<div class="container marco">
<form action="" id="formLibros">
	<div class="row">
		<div class="col">
      <input class="form-control" name="id" id="id" hidden="true">
      <select class="form-control" id="SelectLibro">
          <option value="0">Seleccione Libro</option>   
      </select>
		</div>
    <div class="col">
      <select class="form-control" id="SelectSucursal">
          <option value="0">Seleccione Sucursal</option>
      </select>
    </div>
    <div class="col">
      <input type="number" class="form-control" placeholder="Copias *" id="numCopias" name="numCopias">
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
      <th scope="col">Titulo</th>
      <th scope="col">Sucursal</th>
      <th scope="col">Copias</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody id="contentLibro_Sucursal">
    
  </tbody>
</table>
</body>
</html>