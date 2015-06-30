angular.module( 'ngBoilerplate.servicesCharters', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'servicesCharters', {
    url: '/servicesCharters',
    views: {
      "main": {
        controller: 'services_Charters',
        templateUrl: 'services/charters/charters.tpl.html'
      }
    },
    data:{ pageTitle: "Charters" }
  });
})

.controller( 'services_Charters', function services_ChartersController( $scope ) {
})

;
