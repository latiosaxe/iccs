angular.module( 'ngBoilerplate.fbo', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'fbo', {
    url: '/fbo',
    views: {
      "main": {
        controller: 'FboCtrl',
        templateUrl: 'ourlocations/fbo/fbo.tpl.html'
      }
    },
    data:{ pageTitle: "FBO's" }
  });
})

.controller( 'FboCtrl', function FboController( $scope ) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll<=500){
                $("#goUp").css('top', -scroll);
            }
        });

        $(".myfancybox").click(function(e){
            e.preventDefault();
            var target = $(this).attr("data-target");
            $("#"+target).hide().removeClass('hidden').fadeIn(500);
            $(".colseMe").hide().removeClass('hidden').fadeIn(500);
        });

        $(".colseMe").click(function(){

            $(".fancySpace").fadeOut(500);
            $(".colseMe").fadeOut(500);
        });

        $('.owl-carousel').owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });

//        var element = $(".mini-sec-header").parent();
//        element.hover(function(){
//            $(this).children(".content-fbo").hide().removeClass('hidden').stop().slideDown(200);
//        }, function(){
//            $(this).children(".content-fbo").stop().slideUp(200);
//        });
})

;
