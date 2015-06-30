angular.module( 'ngBoilerplate.servicespermit135_121', [
        'ui.router'
    ])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'servicespermit135_121', {
            url: '/servicesPermit135_121',
            views: {
                "main": {
                    controller: 'services_permit135_121',
                    templateUrl: 'services/permits/permit135_121/permit135_121.tpl.html'
                }
            },
            data:{ pageTitle: "Service | Permit 135_121" }
        });
    })

    .controller( 'services_permit135_121', function services_permit135_121Controller( $scope ) {
        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true
        });
    })

;
