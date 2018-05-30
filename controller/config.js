angular.module("SistemaADE", ["ngRoute"])
.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "view/home.html",
    controller: "homeCtrl"
  })

  .when("/clubes", {
    templateUrl: "view/clubes.html",
    controller: "clubesCtrl"
  })

  .when("/clubes/novo", {
    templateUrl: "view/novoClube.html",
    controller: "novoClubeCtrl"
  })

  .when("/clubes/detalhes", {
    templateUrl: "view/detalhesClube.html",
    controller: "detalhesClubeCtrl"
  })

  .when("/associados", {
    templateUrl: "view/associados.html",
    controller: "associadosCtrl"
  })

  .when("/agenda", {
    templateUrl: "view/agenda.html",
    controller: "agendaCtrl"
  })

  .when("/relatorios", {
    templateUrl: "view/relatorios.html",
    controller: "relatoriosCtrl"
  })

  .when("/opcoes", {
    templateUrl: "view/opcoes.html",
    controller: "opcoesCtrl"
  });
});