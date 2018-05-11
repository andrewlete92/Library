<?php 
require 'Conection.php';

if($_POST['action']=='load'){
	$libros = $mysqli->query("
	SELECT * FROM vw_libros");

	if ($libros->num_rows!=null){
	$data = $libros->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='getEditorial'){
	$editoriales = $mysqli->query("
	SELECT idEditorial,Nombre FROM tbleditorial");
	if ($editoriales->num_rows!=null){
	$data = $editoriales->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='getAutor'){
	$autores = $mysqli->query("
	SELECT idAutor,nomAutor FROM tblAutores");
	if ($autores->num_rows!=null){
	$data = $autores->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='insert'){
	$idLibro = $_POST['idLibro'];
	$titulo = $_POST['titulo'];
	$idEditorial = $_POST['editorial'];
	$idAutor = $_POST['autor'];

	$sql = "INSERT INTO tblLibro VALUES ('$idLibro', '$titulo', '$idEditorial', '$idAutor')";
	if(mySqli_query($mysqli,$sql)){
		echo json_encode(array('answ' =>false));
	} else {
		echo json_encode(array('answ' =>true));
	}
}

$mysqli->close();
?>