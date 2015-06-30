angular.module( 'ngBoilerplate', [
        'templates-app',
        'templates-common',
        'ngBoilerplate.home',
        'ngBoilerplate.about',
        'ngBoilerplate.contact',
        'ngBoilerplate.ourlocations',
        'ngBoilerplate.fbo',
        'ngBoilerplate.flightRequest',
        'ngBoilerplate.FlightRequestCargo',
        'ngBoilerplate.FlightRequestExecutive',
        'ngBoilerplate.FlightRequestAmbulance',
        'ngBoilerplate.servicesFuel',
        'ngBoilerplate.servicesFuelQuoteRequest',
        'ngBoilerplate.servicesFuelCard',
        'ngBoilerplate.servicesFuelRequest',
        'ngBoilerplate.servicesgroundHandling',
        'ngBoilerplate.servicespermits',
        'ngBoilerplate.servicespermit91',
        'ngBoilerplate.servicespermit135_121',
        'ngBoilerplate.servicescatering',
        'ngBoilerplate.servicesRequestCatering',
        'ngBoilerplate.servicesCharters',
        'ngBoilerplate.servicesChartersRequest',
        'ngBoilerplate.privacity',
        'ui.router',
        'header'
    ])

    .config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/home' );
    })

    .run( function run () {

    })

    .controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
        header = 0;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            if ( angular.isDefined( toState.data.pageTitle ) ) {
                $scope.pageTitle = toState.data.pageTitle + ' | ICCS' ;
            }

            $("html, body").animate({ scrollTop: 0 }, 500);

            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if(scroll>0){
                    $(".header").addClass("active");
                    $(".fake_header").addClass("active");
                }else{
                    $(".header").removeClass("active");
                    $(".fake_header").removeClass("active");
                }
            });
            if(header === 0){
                $("#copyMe").clone().appendTo("#pasteHere");
                $("#mobile, #mobile_close").click(function(e){
                    e.preventDefault();
                    var mobile_nav = $(".mobile-nav");
                    if(mobile_nav.hasClass('active')){
                        mobile_nav.removeClass('active');
                    }else{
                        mobile_nav.addClass('active');
                    }
                });
                $("#pasteHere a").click(function(e){
                    $(window).scrollTop(0);
                    $(".mobile-nav").removeClass('active');
                });

                header = 1;
            }

            $(document).ready(function(){
                console.log($("#contentHeight").height()+80, $(window).height());

                if(($("#contentHeight").height()+80) < $(window).height()){
                    $("#footerFix").addClass('fixed');
                }else{
                    $("#footerFix").removeClass('fixed');
                }
            });

        });

    })

    .controller('externalCtrl', function($scope, $window) {
        $scope.external = function(url) {
            $window.open(url);
        };
    })
;

