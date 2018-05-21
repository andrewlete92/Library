<?php 
require 'Conection.php';

if($_POST['action']=='libros_suc'){
	$libros_suc = $mysqli->query("
	SELECT * FROM vw_libros_sucursal_chart");

	if ($libros_suc->num_rows!=null){
	$data = $libros_suc->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} elseif($_POST['action']=='libros_lec'){
	$libros_lec = $mysqli->query("
	SELECT * FROM vw_Libros_lector_chart");

	if ($libros_lec->num_rows!=null){
	$data = $libros_lec->fetch_all(MYSQLI_ASSOC);
	echo json_encode($data);
	}else{
	echo json_encode(array('error' =>true));
	}
} 

$mysqli->close();
?>