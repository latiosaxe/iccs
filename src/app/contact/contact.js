angular.module( 'ngBoilerplate.contact', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'contact', {
    url: '/contact',
    views: {
      "main": {
        controller: 'ContactCtrl',
        templateUrl: 'contact/contact.tpl.html'
      }
    },
    data:{ pageTitle: 'Contact Us' }
  });
})

.controller( 'ContactCtrl', function ContactController( $scope ) {

})

;
