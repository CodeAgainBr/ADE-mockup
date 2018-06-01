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

.controller('homeCtrl', function($scope, JogosService) {
	JogosService.search(0);
})

.controller('clubesCtrl', function($scope, ClubesService) {
	ClubesService.get();

	$scope.apagarClube = function(index) {
		if(confirm("Realmente deseja apagar o clube " + $scope.clubes[index].nome + "?"))
		$scope.clubes.splice(index, 1);
	};
})

.controller('novoClubeCtrl', function($scope, Pagination) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	$scope.addClube = function() {
		// $scope.clubes.push($scope.clube);
		// ClubesService.insert($scope.clube);
		window.location = "#!clubes";
	}
})

.controller('detalhesClubeCtrl', function($scope, Pagination, ClubesService, $routeParams) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	ClubesService.search($routeParams.id);
})

.controller('associadosCtrl', function($scope, AssociadosService) {
	AssociadosService.get();

	$scope.apagarAssociado = function(index) {
		if(confirm("Realmente deseja apagar o associado " + $scope.associados[index].nome + "?"))
		$scope.associados.splice(index, 1);
	};
})

.controller('novoAssociadoCtrl', function($scope, Pagination) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	$scope.associado = {
		parentes: []
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

.controller('detalhesAssociadoCtrl', function($scope, Pagination, AssociadosService, $routeParams) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	AssociadosService.search($routeParams.id);

	$(document).ready(function() {
		if(typeof($scope.associado) == 'undefined') {
			$scope.associado = {
				parentes: []
			}
		}
	});

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

.controller('jogosCtrl', function($scope, JogosService) {
	JogosService.get();

	$scope.apagarJogo = function(index) {
		if(confirm("Realmente deseja apagar o jogo contra " + $scope.jogos[index].clube + "?"))
		$scope.jogos.splice(index, 1);
	};
})

.controller('novoJogoCtrl', function($scope, Pagination, ClubesService) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	ClubesService.get();

	$('#clube').on('change', function() {
    var index = $('#clube').val();
    $scope.jogo = {
	    cep: $scope.clubes[index].cepCampo,
	    rua: $scope.clubes[index].ruaCampo,
	    numero: $scope.clubes[index].numeroCampo,
	    bairro: $scope.clubes[index].bairroCampo,
	    cidade: $scope.clubes[index].cidadeCampo,
	    estado: $scope.clubes[index].estadoCampo
    }
  });
})

.controller('detalhesJogoCtrl', function($scope, Pagination, ClubesService, JogosService, $routeParams) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	ClubesService.get();

	JogosService.search($routeParams.id);

	$(document).ready(function() {
		$('#clube').val($routeParams.id);
	});

	$('#clube').on('change', function() {
    var index = $('#clube').val();
    $scope.jogo = {
	    cep: $scope.clubes[index].cepCampo,
	    rua: $scope.clubes[index].ruaCampo,
	    numero: $scope.clubes[index].numeroCampo,
	    bairro: $scope.clubes[index].bairroCampo,
	    cidade: $scope.clubes[index].cidadeCampo,
	    estado: $scope.clubes[index].estadoCampo
    }
  });
})

.controller('agendaCtrl', function($scope, JogosService) {
	JogosService.get();

	$scope.apagarJogo = function(index) {
		if(confirm("Realmente deseja apagar o jogo contra " + $scope.jogos[index].clube + "?"))
		$scope.jogos.splice(index, 1);
	};
})

.controller('novoRelatorioIndividualCtrl', function($scope, Pagination, JogosService, AssociadosService, $routeParams) {
	$scope.relatorioIndividual = false;

	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);
	
	JogosService.search($routeParams.id);

	AssociadosService.get();

	$scope.carregarAssociado = function(index) {
		$scope.relatorioIndividual = true;
		$scope.associado = $scope.associados[index];
	}
})

.controller('relatoriosCtrl', function($scope, Pagination, AssociadosService) {
	$scope.relatorioIndividual = false;

	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);

	AssociadosService.get();

	$scope.carregarAssociado = function(index) {
		$scope.relatorioIndividual = true;
		// $scope.associado = $scope.associados[index];
	}

	$scope.associado = {
		golsMarcados: 5,
		golsSofridos: 0,
		jogosParticipados: 10,
		confraternizacoesParticipadas: 8,
		cartoesAmarelos: 2,
		cartoesVermelhos: 1
	}

	$scope.relatorios = {
		totalJogos: 15,
		totalConfraternizacoes: 12,
		mediaGolsMesAtual: 2,
		jogadorDestaqueMes: "Vitor Reis",
		goleiroFrangoMes: "Mario"
	}
})

.controller('opcoesCtrl', function($scope, Pagination) {
	$scope.trocarPage = function(page) {
		var pagination = Pagination.changePage(page);

		$scope.page = pagination.page;
		$scope.aba = pagination.aba;
	}

	$scope.trocarPage(0);
});