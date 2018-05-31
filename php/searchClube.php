<?php

$id = $_POST['id'];

$clubes = '[{
		"id": 1
		"nome": "Clube 1",
		"dataFundacao": "10/10/2000",
		"uniforme": "Amarelo",
		"categoria": "Base",
		"possuiCampo": true,
		"telefoneClube": "4832423242",
		"nomeContato": "Vitor",
		"telefoneContato": "48984008400",
		"cepClube": "88135100",
		"ruaClube": "Avenida Bom Jesus de Nazaré",
		"numeroClube": 10,
		"bairroClube": "Aririu",
		"cidadeClube": "Palhoça",
		"estadoClube": "SC",
		"cepCampo": 88135100,
		"ruaCampo": "Avenida Bom Jesus de Nazaré",
		"numeroCampo": 10,
		"bairroCampo": "Aririu",
		"cidadeCampo": "Palhoça",
		"estadoCampo": "SC"
	},{
		"id": 2
		"nome": "Clube 2",
		"dataFundacao": "10/10/2001",
		"uniforme": "Vermelho",
		"categoria": "Sem Categoria",
		"possuiCampo": true,
		"telefoneClube": "4832423242",
		"nomeContato": "João",
		"telefoneContato": "48984008400",
		"cepClube": "88135100",
		"ruaClube": "Avenida Bom Jesus de Nazaré",
		"numeroClube": 10,
		"bairroClube": "Aririu",
		"cidadeClube": "Palhoça",
		"estadoClube": "SC",
		"cepCampo": 88135100,
		"ruaCampo": "Avenida Bom Jesus de Nazaré",
		"numeroCampo": 10,
		"bairroCampo": "Aririu",
		"cidadeCampo": "Palhoça",
		"estadoCampo": "SC"
	},{
		"id": 3
		"nome": "Clube 3",
		"dataFundacao": "10/10/2002",
		"uniforme": "Verde",
		"categoria": "Superior",
		"possuiCampo": true,
		"telefoneClube": "4832423242",
		"nomeContato": "Maria",
		"telefoneContato": "48984008400",
		"cepClube": "88135100",
		"ruaClube": "Avenida Bom Jesus de Nazaré",
		"numeroClube": 10,
		"bairroClube": "Aririu",
		"cidadeClube": "Palhoça",
		"estadoClube": "SC",
		"cepCampo": 88135100,
		"ruaCampo": "Avenida Bom Jesus de Nazaré",
		"numeroCampo": 10,
		"bairroCampo": "Aririu",
		"cidadeCampo": "Palhoça",
		"estadoCampo": "SC"
	}]';

echo json_encode(json_decode($clubes)[$id]);
