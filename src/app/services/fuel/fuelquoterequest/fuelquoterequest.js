angular.module( 'ngBoilerplate.servicesFuelQuoteRequest', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'servicesFuelQuoteRequest', {
    url: '/servicesFuelQuoteRequest',
    views: {
      "main": {
        controller: 'services_Quote_Fuel_Request',
        templateUrl: 'services/fuel/fuelquoterequest/fuelquoterequest.tpl.html'
      }
    },
    data:{ pageTitle: "Fuel Quote Request" }
  });
})

.controller( 'services_Quote_Fuel_Request', function services_Quote_Fuel_RequestController( $scope ) {
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
        });
})

;
