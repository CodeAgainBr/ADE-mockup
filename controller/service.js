angular.module('SistemaADE')
.service('UserService', function() {
	
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

.service('AssociadosService', function() {
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
})

.service('JogosService', function() {
	
});
