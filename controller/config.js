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

  .when("/clubes/:id/detalhes", {
    templateUrl: "view/detalhesClube.html",
    controller: "detalhesClubeCtrl"
  })

  .when("/associados", {
    templateUrl: "view/associados.html",
    controller: "associadosCtrl"
  })

  .when("/associados/novo", {
    templateUrl: "view/novoAssociado.html",
    controller: "novoAssociadoCtrl"
  })

  .when("/associados/:id/detalhes", {
    templateUrl: "view/detalhesAssociado.html",
    controller: "detalhesAssociadoCtrl"
  })

  .when("/jogos", {
    templateUrl: "view/jogos.html",
    controller: "jogosCtrl"
  })

  .when("/jogos/novo", {
    templateUrl: "view/novoJogo.html",
    controller: "novoJogoCtrl"
  })

  .when("/jogos/:id/detalhes", {
    templateUrl: "view/detalhesJogo.html",
    controller: "detalhesJogoCtrl"
  })

  .when("/agenda", {
    templateUrl: "view/agenda.html",
    controller: "agendaCtrl"
  })

  .when("/agenda/:id/relatorio", {
    templateUrl: "view/novoRelatorioIndividual.html",
    controller: "novoRelatorioIndividualCtrl"
  })

  .when("/relatorios", {
    templateUrl: "view/relatorios.html",
    controller: "relatoriosCtrl"
  })

  .when("/opcoes", {
    templateUrl: "view/opcoes.html",
    controller: "opcoesCtrl"
  })

  .otherwise({
    redirectTo : '/'
  });
});