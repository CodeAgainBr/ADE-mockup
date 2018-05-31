angular.module('SistemaADE')
.service('Pagination', function() {
	var page = ["active", "", "", ""];
	var aba = ["", "hidden", "hidden", "hidden"];

	this.changePage = function(pageAtual) {
		switch(pageAtual) {
			case 0:
				page[0] = "active";
				page[1] = "";
				page[2] = "";
				page[3] = "";
				aba[0] = "";
				aba[1] = "hidden";
				aba[2] = "hidden";
				aba[3] = "hidden";
				break;
			case 1:
				page[0] = "";
				page[1] = "active";
				page[2] = "";
				page[3] = "";
				aba[0] = "hidden";
				aba[1] = "";
				aba[2] = "hidden";
				aba[3] = "hidden";
				break;
			case 2:
				page[0] = "";
				page[1] = "";
				page[2] = "active";
				page[3] = "";
				aba[0] = "hidden";
				aba[1] = "hidden";
				aba[2] = "";
				aba[3] = "hidden";
				break;
			case 3:
				page[0] = "";
				page[1] = "";
				page[2] = "";
				page[3] = "active";
				aba[0] = "hidden";
				aba[1] = "hidden";
				aba[2] = "hidden";
				aba[3] = "";
				break;
		}

		return {page, aba};
	};
})

.service('ClubesService', ['$rootScope', function($rootScope) {
	this.get = function() {
		$.ajax({
			url: 'php/selectClubes.php',
			success: function(data) {
				$rootScope.clubes = JSON.parse(data);
				$rootScope.$apply();
			},
			error: function() {
				$rootScope.clubes = null;
			}
		});
	}

	this.search = function(id) {
		$.ajax({
			url: 'php/searchClube.php',
			method: 'post',
			data: 'id='+id,
			success: function(data) {
				$rootScope.clube = JSON.parse(data);
				$rootScope.$apply();
			},
			error: function() {
				return null;
			}
		});
	}
	
	this.insert = function(clube) {
		$.ajax({
			url: 'php/insertClube.php',
			method: 'post',
			data: clube,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}

	this.update = function(clube) {
		$.ajax({
			url: 'php/updateClube.php',
			method: 'post',
			data: clube,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}

	this.delete = function(id) {
		$.ajax({
			url: 'php/deleteClube.php',
			method: 'post',
			data: 'id='+id,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}
}])

.service('AssociadosService', ['$rootScope', function($rootScope) {
	this.get = function() {
		$.ajax({
			url: 'php/selectAssociados.php',
			success: function(data) {
				$rootScope.associados = JSON.parse(data);
				$rootScope.$apply();
			},
			error: function() {
				$rootScope.associados = null;
			}
		});
	}

	this.search = function(id) {
		$.ajax({
			url: 'php/searchAssociado.php',
			method: 'post',
			data: 'id='+id,
			success: function(data) {
				$rootScope.associado = JSON.parse(data);
				$rootScope.$apply();
			},
			error: function() {
				$rootScope.associado = null;
			}
		});
	}
	
	this.insert = function(clube) {
		$.ajax({
			url: 'php/insertAssociado.php',
			method: 'post',
			data: clube,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}

	this.update = function(clube) {
		$.ajax({
			url: 'php/updateAssociado.php',
			method: 'post',
			data: clube,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}

	this.delete = function(id) {
		$.ajax({
			url: 'php/deleteAssociado.php',
			method: 'post',
			data: 'id='+id,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}
}])

.service('JogosService', ['$rootScope', function($rootScope) {
	this.get = function() {
		$.ajax({
			url: 'php/selectJogos.php',
			success: function(data) {
				$rootScope.jogos = JSON.parse(data);
				$rootScope.$apply();
			},
			error: function() {
				$rootScope.jogos = null;
			}
		});
	}

	this.search = function(id) {
		$.ajax({
			url: 'php/searchJogo.php',
			method: 'post',
			data: 'id='+id,
			success: function(data) {
				$rootScope.jogo = JSON.parse(data);
				$rootScope.$apply();
			},
			error: function() {
				$rootScope.jogo = null;
			}
		});
	}
	
	this.insert = function(jogo) {
		$.ajax({
			url: 'php/insertJogo.php',
			method: 'post',
			data: jogo,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}

	this.update = function(jogo) {
		$.ajax({
			url: 'php/updateJogo.php',
			method: 'post',
			data: jogo,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}

	this.delete = function(id) {
		$.ajax({
			url: 'php/deleteJogo.php',
			method: 'post',
			data: 'id='+id,
			success: function(data) {
				return true;
			},
			error: function() {
				return false;
			}
		});
	}
}])
