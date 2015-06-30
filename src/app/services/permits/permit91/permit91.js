angular.module( 'ngBoilerplate.servicespermit91', [
        'ui.router'
    ])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'servicespermit91', {
            url: '/servicesPermit91',
            views: {
                "main": {
                    controller: 'services_permit91',
                    templateUrl: 'services/permits/permit91/permit91.tpl.html'
                }
            },
            data:{ pageTitle: "Service | Permit 91" }
        });
    })

    .controller( 'services_permit91', function services_permit91Controller( $scope ) {
        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true
        });
    })

;
