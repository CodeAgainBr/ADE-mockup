angular.module('SistemaADE')
.controller('homeCtrl', function($scope) {
	$scope.teste = 'Home';
})

.controller('clubesCtrl', function($scope) {
	$scope.teste = 'Clubes';
})

.controller('novoClubeCtrl', function($scope) {
	$scope.page1 = "active";
	$scope.aba1 = ""
	$scope.aba2 = "hidden"
	$scope.aba3 = "hidden"
	$scope.aba4 = "hidden"

	$scope.trocarPage = function(page) {
		$scope.page = page;
		switch(page) {
			case 1:
				$scope.page1 = "active";
				$scope.page2 = "";
				$scope.page3 = "";
				$scope.page4 = "";
				$scope.aba1 = ""
				$scope.aba2 = "hidden"
				$scope.aba3 = "hidden"
				$scope.aba4 = "hidden"
				break;
			case 2:
				$scope.page1 = "";
				$scope.page2 = "active";
				$scope.page3 = "";
				$scope.page4 = "";
				$scope.aba1 = "hidden"
				$scope.aba2 = ""
				$scope.aba3 = "hidden"
				$scope.aba4 = "hidden"
				break;
			case 3:
				$scope.page1 = "";
				$scope.page2 = "";
				$scope.page3 = "active";
				$scope.page4 = "";
				$scope.aba1 = "hidden"
				$scope.aba2 = "hidden"
				$scope.aba3 = ""
				$scope.aba4 = "hidden"
				break;
			case 4:
				$scope.page1 = "";
				$scope.page2 = "";
				$scope.page3 = "";
				$scope.page4 = "active";
				$scope.aba1 = "hidden"
				$scope.aba2 = "hidden"
				$scope.aba3 = "hidden"
				$scope.aba4 = ""
				break;
		}
	};
})

.controller('detalhesClubeCtrl', function($scope) {
	$scope.clube = {
		nome: "Associação Desportiva Eldorado",
		dataFundacao: "10/10/2000",
		uniforme: "Azul",
		categoria: "Base",
		possuiCampo: true,
		telefoneClube: "4832423242",
		nomeContato: "Vitor",
		telefoneContato: "48984008400",
		cepClube: 88135100,
		ruaClube: "Avenida Bom Jesus de Nazaré",
		numeroClube: 10,
		bairroClube: "Aririu",
		cidadeClube: "Palhoça",
		estadoClube: "SC",
		cepCampo: 88135100,
		ruaCampo: "Avenida Bom Jesus de Nazaré",
		numeroCampo: 10,
		bairroCampo: "Aririu",
		cidadeCampo: "Palhoça",
		estadoCampo: "SC",
	};

	$scope.page1 = "active";
	$scope.aba1 = ""
	$scope.aba2 = "hidden"
	$scope.aba3 = "hidden"
	$scope.aba4 = "hidden"

	$scope.trocarPage = function(page) {
		$scope.page = page;
		switch(page) {
			case 1:
				$scope.page1 = "active";
				$scope.page2 = "";
				$scope.page3 = "";
				$scope.page4 = "";
				$scope.aba1 = ""
				$scope.aba2 = "hidden"
				$scope.aba3 = "hidden"
				$scope.aba4 = "hidden"
				break;
			case 2:
				$scope.page1 = "";
				$scope.page2 = "active";
				$scope.page3 = "";
				$scope.page4 = "";
				$scope.aba1 = "hidden"
				$scope.aba2 = ""
				$scope.aba3 = "hidden"
				$scope.aba4 = "hidden"
				break;
			case 3:
				$scope.page1 = "";
				$scope.page2 = "";
				$scope.page3 = "active";
				$scope.page4 = "";
				$scope.aba1 = "hidden"
				$scope.aba2 = "hidden"
				$scope.aba3 = ""
				$scope.aba4 = "hidden"
				break;
			case 4:
				$scope.page1 = "";
				$scope.page2 = "";
				$scope.page3 = "";
				$scope.page4 = "active";
				$scope.aba1 = "hidden"
				$scope.aba2 = "hidden"
				$scope.aba3 = "hidden"
				$scope.aba4 = ""
				break;
		}
	};
})

.controller('associadosCtrl', function($scope) {
	$scope.teste = 'Associados';
})

.controller('agendaCtrl', function($scope) {
	$scope.teste = 'Agenda';
})

.controller('relatoriosCtrl', function($scope) {
	$scope.teste = 'Relatorios';
})

.controller('opcoesCtrl', function($scope) {
	$scope.teste = 'Opções';
});