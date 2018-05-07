<?php 
	
	define('host', 'localhost');
	define('user','root');
	define('pass', '');
	define('database','library');

	$mysqli = new mysqli(host,user,pass,database);
	if($mysqli->connect_errno):
		echo "Error al intentar conectarse a MySQLdebido al error " .$mysqli->connect_error;
	endif;

?>