<?php 
	require 'Conection.php';

if($_POST['action']=='load'){
	$libros = $mysqli->query("
	SELECT * FROM vw_libros_Sucursal");

	if ($libros->num_rows!=null){
	$data = $libros->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='getLibro'){
	$libros = $mysqli->query("
	SELECT idLibro,titulo FROM tblLibro");
	if ($libros->num_rows!=null){
	$data = $libros->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='getSucursal'){
	$sucursales = $mysqli->query("
	SELECT idSucursal, nomSucursal FROM tblSucursal");
	if ($sucursales->num_rows!=null){
	$data = $sucursales->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='insert'){
	$idLibro = $_POST['libro'];
	$idSucursal = $_POST['sucursal'];
	$numCopias = $_POST['numCopias'];

	$sql = "INSERT INTO tblCopias VALUES ('$idLibro', '$idSucursal', '$numCopias')";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='find'){
	$cod = $_POST['id'];
	$copias = $mysqli->query("
	SELECT * FROM vw_libros_Sucursal WHERE idCopias = '$cod'");
	if ($copias->num_rows!=null){
	$data = $copias->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='update'){
	$id = $_POST['id'];
	$idLibro = $_POST['libro'];
	$idSucursal = $_POST['sucursal'];
	$numCopias = $_POST['numCopias'];

	$sql = "UPDATE tblCopias 
			SET idLibro = '$idLibro', idSucursal = '$idSucursal', numCopias = '$numCopias'
			WHERE idCopias = $id";

	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} 

$mysqli->close();
?>