angular.module( 'ngBoilerplate.flightRequest', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'flightRequest', {
    url: '/flightRequest',
    views: {
      "main": {
        controller: 'flightRequestCtrl',
        templateUrl: 'flightrequest/flightRequest.tpl.html'
      }
    },
    data:{ pageTitle: 'Flight Request' }
  });
})

.controller( 'flightRequestCtrl', function flightRequestController( $scope ) {

})

;
