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
	$insert = $mysqli->query("INSERT INTO tblsucursal VALUES ('$cod', '$name', '$dir')");
	
	if($insert==false){
		echo json_encode(array('asw'=> false));
	
	} else {
		echo json_encode(array('asw'=> true));
	}
} elseif()($_POST['action']=='update'){

}

}

$mysqli->close();

?>