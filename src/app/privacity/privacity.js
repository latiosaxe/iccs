angular.module( 'ngBoilerplate.privacity', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'privacity', {
    url: '/privacity',
    views: {
      "main": {
        controller: 'PrivacityCtrl',
        templateUrl: 'privacity/privacity.tpl.html'
      }
    },
    data:{ pageTitle: 'Privacy & Terms' }
  });
})

.controller( 'PrivacityCtrl', function Privacity_Ctrl( $scope ) {

        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
})

;
