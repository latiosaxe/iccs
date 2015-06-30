angular.module( 'ngBoilerplate.servicesRequestCatering', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'servicesRequestCatering', {
    url: '/servicesRequestCatering',
    views: {
      "main": {
        controller: 'services_Request_Catering',
        templateUrl: 'services/catering/requestCatering/requestCatering.tpl.html'
      }
    },
    data:{ pageTitle: "Request Catering" }
  });
})

.controller( 'services_Request_Catering', function services_Request_CateringController( $scope ) {
        var index = 0;
        $(window).ready(function(){
            var Months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

            $(".calendarInput").datepicker({ autoclose: true, format: "mm-dd-yyyy",todayHighlight: true });
            $('#todayInput').datepicker('update', new Date());

            var este = $('#todayInput').val();
            var result = changeMonth(este);
            $('#todayInput').val(result);


            $(".calendarInput").change(function(){
                este = $(this).val();
                result = changeMonth(este);
                $(this).val(result);
            });

            function changeMonth(value){
                var mes = value.split('-');
                var single = parseInt(mes[0],10);
                return Months[single-1]+"-"+mes[1]+"-"+mes[2];
            }

            $(".tabs-head ul li p").click(function(e){
                e.preventDefault();
                index = $(this).parent().index();
                $(".tabs-head ul li").removeClass('active');
                $(this).parent().addClass('active');
                $(".tabs-body ul li").addClass('hidden');
                $(".tabs-body ul li:eq("+ index +")").removeClass('hidden');
                $("#actualStep").text(index+1);
            });


            $(".tabLeft").click(function(e){
                e.preventDefault();
                index --;
                $(".tabs-head ul li").removeClass('active');
                $(".tabs-head ul li:eq("+ index +")").addClass('active');
                $(".tabs-body ul li").addClass('hidden');
                $(".tabs-body ul li:eq("+ index +")").removeClass('hidden');
                $("#actualStep").text(index+1);
            });


            $(".nextLeft").click(function(e){
                e.preventDefault();
                index ++;
                $(".tabs-head ul li").removeClass('active');
                $(".tabs-head ul li:eq("+ index +")").addClass('active');
                $(".tabs-body ul li").addClass('hidden');
                $(".tabs-body ul li:eq("+ index +")").removeClass('hidden');
                $("#actualStep").text(index+1);
            });



            $(".justNumbers").keydown(function (e) {
                if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
                }
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });


            $(".acordeon section").hide();
//            $(".acordeon section").eq(0).show();
            $(".qty").addClass('width0');

            $(".acordeon .target").click(function(){
               var index = $(this).index()/2;
                $(".acordeon section").slideUp(300);
                setTimeout(function(){
                    $(".acordeon section").eq(index).slideDown(300);
                    setTimeout(function(){
                        var position = $(".acordeon section").eq(index).position().top;
                        $('html,body').animate({scrollTop: position});
                    },500);
                },300);
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
        });
})

;
