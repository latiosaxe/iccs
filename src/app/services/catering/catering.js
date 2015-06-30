angular.module( 'ngBoilerplate.servicescatering', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'servicescatering', {
    url: '/servicesCatering',
    views: {
      "main": {
        controller: 'services_catering',
        templateUrl: 'services/catering/catering.tpl.html'
      }
    },
    data:{ pageTitle: "Service | Catering" }
  });
})

.controller( 'services_catering', function services_cateringController( $scope ) {

        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

        $(".tabs-head > ul > li p").click(function(e){
            e.preventDefault();
            index = $(this).parent().index();
            $(".tabs-head > ul > li").removeClass('active');
            $(this).parent().addClass('active');
            $(".tabs-body > ul > li").addClass('hidden');
            $(".tabs-body > ul > li:eq("+ index +")").removeClass('hidden');
            $("#actualStep").text(index+1);
        });


        setTimeout(function(){
            $(".tabs-body > ul > li:eq(1)").addClass("hidden").removeClass('opacity');
        },500);
})

    .directive('targetBlank', function() {
        return {
            compile: function(element) {
                var elems = (element.prop("tagName") === 'A') ? element : element.find('a');
                elems.attr("target", "_blank");
            }
        };
    })

;