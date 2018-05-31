<?php

$id = $_POST['id'];

$associados = '[{
		"nome": "Vitor Reis",
		"dataNascimento": "10/10/2000",
		"localNascimento": "São José",
		"rg": "1234567",
		"cpf": "12345678911",
		"prato": "Macarronada",
		"observacoes": "Tem asma",
		"telefone": "48984008400",
		"email": "email@email.com",
		"cep": 88135100,
		"rua": "Avenida Bom Jesus de Nazaré",
		"numero": 10,
		"bairro": "Aririu",
		"cidade": "Palhoça",
		"estado": "SC",
		"parentes": [{
			"nome": "João",
			"parentesco": "Filho",
			"nascimento": "10/10/2017"
		},{
			"nome": "Maria",
			"parentesco": "Filha",
			"nascimento": "10/10/2017"
		}]
	},{
		"nome": "Mario",
		"dataNascimento": "10/10/1999",
		"localNascimento": "São José",
		"rg": "7654321",
		"cpf": "98765432199",
		"prato": "Feijoada",
		"observacoes": "Tem bronquite",
		"telefone": "48984008400",
		"email": "email@email.com",
		"cep": 88135100,
		"rua": "Avenida Bom Jesus de Nazaré",
		"numero": 10,
		"bairro": "Aririu",
		"cidade": "Palhoça",
		"estado": "SC",
		"parentes": [{
			"nome": "Guilherme",
			"parentesco": "Filho",
			"nascimento": "10/10/2016"
		},{
			"nome": "Vitória",
			"parentesco": "Filha",
			"nascimento": "10/10/2015"
		}]
	},{
		"nome": "Matheus",
		"dataNascimento": "10/10/1980",
		"localNascimento": "São José",
		"rg": "1241241",
		"cpf": "12312331212",
		"prato": "Macarronada",
		"observacoes": "",
		"telefone": "48984008400",
		"email": "email@email.com",
		"cep": 88135100,
		"rua": "Avenida Bom Jesus de Nazaré",
		"numero": 10,
		"bairro": "Aririu",
		"cidade": "Palhoça",
		"estado": "SC",
		"parentes": [{
			"nome": "Isaac",
			"parentesco": "Filho",
			"nascimento": "10/10/2001"
		},{
			"nome": "Brenda",
			"parentesco": "Filha",
			"nascimento": "10/10/2003"
		}]
	}]';

echo json_encode(json_decode($associados)[$id]);
