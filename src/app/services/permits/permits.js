angular.module( 'ngBoilerplate.servicespermits', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'servicespermits', {
    url: '/servicesPermits',
    views: {
      "main": {
        controller: 'services_permits',
        templateUrl: 'services/permits/permits.tpl.html'
      }
    },
    data:{ pageTitle: "Service | Permits" }
  });
})

.controller( 'services_permits', function services_permitsController( $scope ) {
        var index = 0;
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

        setTimeout(function(){
            $(".tabs-body > ul > li:eq(1)").addClass("hidden").removeClass('opacity');
        },500);
})

;
