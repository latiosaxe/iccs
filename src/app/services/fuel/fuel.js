angular.module( 'ngBoilerplate.servicesFuel', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'servicesFuel', {
    url: '/servicesFuel',
    views: {
      "main": {
        controller: 'services_Fuel',
        templateUrl: 'services/fuel/fuel.tpl.html'
      }
    },
    data:{ pageTitle: "Flight Request Cargo" }
  });
})

.controller( 'services_Fuel', function services_FuelController( $scope ) {
        var index = 0;
        $(window).ready(function(){
            $(".tabs-head > ul > li p").click(function(e){
                e.preventDefault();
                index = $(this).parent().index();
                $(".tabs-head > ul > li").removeClass('active');
                $(this).parent().addClass('active');
                $(".tabs-body > ul > li").addClass('hidden');
                $(".tabs-body > ul > li:eq("+ index +")").removeClass('hidden');
                $("#actualStep").text(index+1);
            });

            $('.owl-carousel').owlCarousel({
                items:1,
                loop:true,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:true
            });

        });
})

;
