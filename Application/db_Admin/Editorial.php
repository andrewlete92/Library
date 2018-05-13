<?php 
require 'Conection.php';

if($_POST['action']=='load'){
	$editoriales = $mysqli->query("
	SELECT * FROM tbleditorial");

	if ($editoriales->num_rows!=null){
	$data = $editoriales->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='insert'){
	$cod = $_POST['idEdit'];
	$name = $_POST['name'];
	$dir = $_POST['Address'];
	$tel = $_POST['tel'];

	$sql = "INSERT INTO tbleditorial VALUES ('$cod', '$name', '$dir', '$tel')";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='delete'){
	$cod = $_POST['id'];

	$sql = "DELETE FROM tbleditorial WHERE idEditorial = '$cod'";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='find'){
	$cod = $_POST['id'];
	$editorial = $mysqli->query("
	SELECT * FROM tbleditorial WHERE idEditorial = '$cod'");
	if ($editorial->num_rows!=null){
	$data = $editorial->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='update'){
	$id = $_POST['id'];
	$cod = $_POST['idEdit'];
	$name = $_POST['name'];
	$dir = $_POST['Address'];
	$tel = $_POST['tel'];

	$sql = "UPDATE tbleditorial 
			SET idEditorial = '$cod', nombre = '$name', direccion = '$dir', telefono = '$tel'
			WHERE idEditorial = $id";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
}

$mysqli->close();
?>