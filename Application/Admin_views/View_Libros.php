<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <link rel="stylesheet" href="../../css/bootstrap.min.css">
  <link rel="stylesheet" href="../../css/stylesheet.css">
  <script src="../../js/jquery.js"></script>
  <script src="../../js/bootstrap.min.js"></script>
  <script src="../../js/Libros.js"></script>
</head>
<body>
<div class="container marco">
<form action="" id="formLibros">
	<div class="row">
		<div class="col">
      <input class="form-control" name="id" id="id" hidden="true">
			<input type="number" class="form-control" placeholder="Id_Libro *" id="idLibro" name="idLibro">
		</div>
		<div class="col">
			<input type="text" class="form-control" placeholder="Título *" id="titulo" name="titulo">
		</div>
		<div class="col">
      <select class="form-control" id="SelectEdit">
          <option value="0">Seleccione Editorial</option>        
      </select>
		</div>
    <div class="col">
      <select class="form-control" id="SelectAutor">
          <option value="0">Seleccione Autor</option>
      </select>
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
      <th scope="col">Id_Libro</th>
      <th scope="col">Titulo</th>
      <th scope="col">Editorial</th>
      <th scope="col">Autor</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody id="contentLibro">
    
  </tbody>
</table>
</body>
</html>