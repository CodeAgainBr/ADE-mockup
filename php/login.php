<?php
$defaultLogin = "admin";
$defaultSenha = "admin";

$login = $_POST['login'];
$senha = $_POST['senha'];

if($login == $defaultLogin and $senha == $defaultSenha) {
	session_start();

	$_SESSION['auth'] = true;
	$_SESSION['nome'] = "Administrador";
	$_SESSION['login'] = "admin";

	echo '{
		"nome": "Administrador",
		"login": "admin"
	}';
} else {
	echo '1';
}