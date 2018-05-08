<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
	<link rel="stylesheet" href="../../css/stylesheet.css">
</head>
<body>
<div class="container marco">
	<div class="row">
		<div class="col">
			<input type="number" placeholder="Id_Autor">
		</div>
		<div class="col">
			<input type="text" placeholder="Nombre">
		</div>
		<div class="col">
			<input type="text" placeholder="Edad">
		</div>
		<div class="col">
			<button class="btn btn-primary">GUARDAR</button>
		</div>
	</div>
</div>
<table class="table table-hover table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id_Autor</th>
      <th scope="col">Nombre</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>40</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>50</td>
    </tr>
  </tbody>
</table>
</body>
</html>