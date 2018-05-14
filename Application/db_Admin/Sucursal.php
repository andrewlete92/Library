<?php 
require 'Conection.php';

if($_POST['action']=='load'){
	$sucursales = $mysqli->query("
	SELECT * FROM tblsucursal");

	if ($sucursales->num_rows!=null){
	$data = $sucursales->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='insert'){
	$cod = $_POST['id_suc'];
	$name = $_POST['name'];
	$dir = $_POST['Address'];

	$sql = "INSERT INTO tblsucursal VALUES ('$cod', '$name', '$dir')";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='find'){
	$cod = $_POST['id'];
	$sucursal = $mysqli->query("
	SELECT * FROM tblsucursal WHERE idSucursal = '$cod'");
	if ($sucursal->num_rows!=null){
	$data = $sucursal->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='update'){
	$id = $_POST['id'];
	$cod = $_POST['id_suc'];
	$name = $_POST['name'];
	$dir = $_POST['Address'];

	$sql = "UPDATE tblsucursal 
			SET idSucursal = '$cod', NomSucursal = '$name', direccion = '$dir'
			WHERE idSucursal = $id";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='delete'){
	$cod = $_POST['id'];

	$sql = "DELETE FROM tblsucursal WHERE idSucursal = '$cod'";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} 

$mysqli->close();

?>