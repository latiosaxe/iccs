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
})

;
