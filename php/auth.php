<?php
session_start();

if(isset($_SESSION['auth']) and $_SESSION['auth']) {
	echo '{
		"nome": "Administrador",
		"login": "admin"
	}';
} else {
	echo 1;
}