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


        $(".acordeon section").hide();
//            $(".acordeon section").eq(0).show();
        $(".qty").addClass('width0');

        $(".acordeon .target").click(function(){
            var index = $(this).index()/2;


            var este = $(this);
            if(este.hasClass('active')){
                $(".acordeon section").eq(index).slideUp(300);
                $(this).removeClass('active');
            }else{
                $(".acordeon section").slideUp(300);
                setTimeout(function(){
                    $(".acordeon section").eq(index).slideDown(300);
                    setTimeout(function(){
                        var position = $(".acordeon section").eq(index).position().top;
                        $('html,body').animate({scrollTop: position});
                    },500);
                },300);
                $(this).addClass('active');
            }
        });

        $(".acordeon fieldset label").click(function(){
            $(".acordeon fieldset label input[type='checkbox']").removeClass('aux');
            var checkbox = $(this).children('input[type=checkbox]');
            checkbox.addClass('aux');

            if($(".aux").is(':checked')){
                $(this).children('.qty').removeClass('width0');
            }else{
                $(this).children('.qty').addClass('width0');
            }

            var total= $(".acordeon").find('input[type="checkbox"]:checked').length;
            $("#here").text(total);
        });

        setTimeout(function(){
            $(".tabs-body > ul > li:eq(1)").addClass("hidden").removeClass('opacity');
        },500);

        //first
        $(".showActive").click(function(event){
            event.preventDefault();
            var index = $(this).parent().index();
            $(".showMe").slideUp();
            setTimeout(function(){
                $(".showMe").eq(index).hide().removeClass('hidden').slideDown();
            },300);
            console.log(index);
        });
})

;
