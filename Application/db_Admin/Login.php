<?php 
require 'Conection.php';

$users = $mysqli->query("
	SELECT name,UserType 
	FROM tbl_users
	WHERE user = '".$_POST['userlg']."'
	AND pass = '".$_POST['passlg']."'
	");
	
if($users->num_rows == 1):
	$data = $users->fetch_assoc();
	echo json_encode(array('error' => false, 'type' => $data['UserType']));
else:
	echo json_encode(array('error'=>true));
endif;

$mysqli->close();
?>