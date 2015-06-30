/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
        'ui.router',
        'header'
    ])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
    .config(function config( $stateProvider ) {
        $stateProvider.state( 'home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'HomeCtrl',
                    templateUrl: 'home/home.tpl.html'
                }
            },
            data:{ pageTitle: 'Inicio' }
        });
    })

/**
 * And of course we define a controller for our route.
 */
    .controller( 'HomeCtrl', function HomeController( $scope, $rootScope) {
        var ActualCard = 0;
        var cards = $(".carousel ul li");
        var LimitCards = cards.length;
        var CarrouselTime = 5000;

//        FIST ANIMATION
        $(".bar").addClass("animateThis");
        setTimeout(function(){
            $(".bar").addClass("active");
        },100);
        setTimeout(function(){
            $(".bar").removeClass("animateThis active");
        }, (CarrouselTime-100));
//        END FIST ANIMATION


//        var widthCard =  $("#helpWidth").width();
//        $(".cardCarousel").css({'width': widthCard});

//        $(".dots li a").click(function(e){
//            e.preventDefault();
//            $(".dots li").removeClass('active');
//            $(this).parent().addClass('active');
//            var index = $(this).parent().index();
//            console.log(index);
//            $(".infinite").css({'margin-left': -((widthCard*(index+1))-widthCard)});
//        });

        var CarrouselInterval = setInterval(function(){
            if(ActualCard>=(LimitCards-1)){
                ActualCard=0;
            }else{
                ActualCard ++;
            }
            $(".bar").addClass("animateThis active");
            $(".carousel ul li.active").addClass('opacity');
            cards.eq(ActualCard).removeClass('hidden');
            setTimeout(function(){
                $(".carousel ul li.active").addClass('hidden').removeClass('active');
                cards.eq(ActualCard).removeClass('opacity').addClass('active');
            }, 500);
            setTimeout(function(){
                $(".bar").removeClass("animateThis active");
            }, (CarrouselTime-100));
        }, CarrouselTime);
    });

