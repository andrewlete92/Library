<?php 
require 'Conection.php';

if($_POST['action']=='load'){
	$autores = $mysqli->query("
	SELECT * FROM tblAutores");

	if ($autores->num_rows!=null){
	$data = $autores->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='insert'){
	$cod = $_POST['Id_Autor'];
	$name = $_POST['name'];
	$edad = $_POST['edad'];

	$sql = "INSERT INTO tblAutores VALUES ('$cod', '$name', '$edad')";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='find'){
	$cod = $_POST['id'];
	$autor = $mysqli->query("
	SELECT * FROM tblAutores WHERE idAutor = '$cod'");
	if ($autor->num_rows!=null){
	$data = $autor->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='update'){
	$id = $_POST['Id_Autor'];
	$cod = $_POST['Id_Autor'];
	$name = $_POST['name'];
	$edad = $_POST['edad'];

	$sql = "UPDATE tblAutores 
			SET idAutor = '$cod', nomAutor = '$name', edad = '$edad'
			WHERE idAutor = $id";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
} elseif($_POST['action']=='delete'){
	$cod = $_POST['id'];

	$sql = "DELETE FROM tblAutores WHERE idAutor = '$cod'";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
}


$mysqli->close();
?>