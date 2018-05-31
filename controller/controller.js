angular.module('SistemaADE')
.run(['$rootScope', function($rootScope) {
	$rootScope.auth = false;

	$.ajax({
		url: "php/auth.php",
		success: function(data) {
			if(data != 1) {
				$rootScope.auth = true;
				$rootScope.user = JSON.parse(data);
			} else {
				$rootScope.auth = false;
			}
		}
	});

	$rootScope.logout = function() {
		$.ajax({
			url: "php/logout.php",
			success: function() {
				$rootScope.auth = false;
				$rootScope.user = null;
				window.location.href = "#!";
			}
		});
	}

	$rootScope.page1 = "active";
	$rootScope.page2 = "";
	$rootScope.page3 = "";
	$rootScope.page4 = "";
	$rootScope.aba1 = ""
	$rootScope.aba2 = "hidden"
	$rootScope.aba3 = "hidden"
	$rootScope.aba4 = "hidden"

	$rootScope.trocarPage = function(page) {
		$rootScope.page = page;
		switch(page) {
			case 1:
				$rootScope.page1 = "active";
				$rootScope.page2 = "";
				$rootScope.page3 = "";
				$rootScope.page4 = "";
				$rootScope.aba1 = ""
				$rootScope.aba2 = "hidden"
				$rootScope.aba3 = "hidden"
				$rootScope.aba4 = "hidden"
				break;
			case 2:
				$rootScope.page1 = "";
				$rootScope.page2 = "active";
				$rootScope.page3 = "";
				$rootScope.page4 = "";
				$rootScope.aba1 = "hidden"
				$rootScope.aba2 = ""
				$rootScope.aba3 = "hidden"
				$rootScope.aba4 = "hidden"
				break;
			case 3:
				$rootScope.page1 = "";
				$rootScope.page2 = "";
				$rootScope.page3 = "active";
				$rootScope.page4 = "";
				$rootScope.aba1 = "hidden"
				$rootScope.aba2 = "hidden"
				$rootScope.aba3 = ""
				$rootScope.aba4 = "hidden"
				break;
			case 4:
				$rootScope.page1 = "";
				$rootScope.page2 = "";
				$rootScope.page3 = "";
				$rootScope.page4 = "active";
				$rootScope.aba1 = "hidden"
				$rootScope.aba2 = "hidden"
				$rootScope.aba3 = "hidden"
				$rootScope.aba4 = ""
				break;
		}
	};
}])

.controller('loginCtrl', ['$rootScope', function($scope, $rootScope) {
	if($scope.auth) {
		window.location.href = "#!";
	}

	$scope.logar = function() {
		$.ajax({
			url: "php/login.php",
			method: "post",
			data: {'login': $('#login').val(),'senha': $('#senha').val()},
			success: function(data) {
				if(data == 1) {
					alert('Login ou senha incorretos!');
				} else {
					$scope.auth = true;
					$scope.user = JSON.parse(data);

					$scope.$apply();
					window.location.href = "#!";
				}
			}
		});
	}
}])

.controller('homeCtrl', function($scope, ClubesService) {
	ClubesService.search(0);
})

.controller('clubesCtrl', function($scope, ClubesService) {
	ClubesService.get();

	$scope.apagarClube = function(index) {
		if(confirm("Realmente deseja apagar o clube " + $scope.clubes[index].nome + "?"))
		$scope.clubes.splice(index, 1);
	};
})

.controller('novoClubeCtrl', function($scope) {
	$scope.addClube = function() {
		// $scope.clubes.push($scope.clube);
		// ClubesService.insert($scope.clube);
		window.location = "#!clubes";
	}
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
		estadoCampo: "SC"
	};
})

.controller('associadosCtrl', function($scope) {
	$scope.associados = [{
		nome: "Associado 1"
	},{
		nome: "Associado 2"
	},{
		nome: "Associado 3"
	}]

	$scope.apagarAssociado = function(index) {
		if(confirm("Realmente deseja apagar o associado " + $scope.associados[index].nome + "?"))
		$scope.associados.splice(index, 1);
	};
})

.controller('novoAssociadoCtrl', function($scope) {
	$scope.associado = {
		parentes: []
	}
})

.controller('detalhesAssociadoCtrl', function($scope) {
	$scope.associado = {
		parentes: []
	}

	$scope.associado = {
		nome: "Vitor Reis",
		dataNascimento: "10/10/2000",
		localNascimento: "São José",
		rg: "1234567",
		cpf: "12345678911",
		prato: "Macarronada",
		observacoes: "Tem asma",
		telefone: "48984008400",
		email: "email@email.com",
		cep: 88135100,
		rua: "Avenida Bom Jesus de Nazaré",
		numero: 10,
		bairro: "Aririu",
		cidade: "Palhoça",
		estado: "SC",
		parentes: [{
			nome: "João",
			parentesco: "Filho",
			nascimento: "10/10/2017"
		},{
			nome: "Maria",
			parentesco: "Filha",
			nascimento: "10/10/2017"
		}]
	}

	$scope.novoParente = function() {
		$scope.associado.parentes.push({
			nome: "",
			parentesco: "",
			dataNascimento: ""
		})
	};

	$scope.apagarParente = function(index) {
		$scope.associado.parentes.splice(index, 1);
	};
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