angular.module( 'ngBoilerplate.FlightRequestAmbulance', [
    'ui.router'
])

.config(function config( $stateProvider, $urlRouterProvider  ) {
  $stateProvider.state( 'FlightRequestAmbulance', {
    url: '/FlightRequestAmbulance',
    views: {
      "main": {
        controller: 'FlightRequest_Ambulance',
        templateUrl: 'flightrequest/ambulance/ambulance.tpl.html'
      }
    },
    data:{ pageTitle: "Flight Request Ambulance" }
  });
})


.controller( 'FlightRequest_Ambulance', function FlightRequestAmbulanceController( $scope, $location ) {
        var index = 0;
        var row = '<tr><td>From:</td><td><input type="text" maxlength="50"/></td><td><input type="text" maxlength="12" class="calendarInput"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="3" class="justNumbers"/></td></tr><tr><td>To:</td><td><input type="text" maxlength="50"/></td><td><input type="text" maxlength="12" class="calendarInput"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="3" class="justNumbers"/></td></tr>';

        var positions = [];
        $(window).ready(function(){
//            $('#datetimepicker1').datepicker({ autoclose: true, format: "mm-dd-yyyy",todayHighlight: true });
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

            $("#targetUl li").each(function(index, value){
                var top = $(this).position().top;
                positions.push(top);
            });


            $("#addRowMagic").click(function(e){
                e.preventDefault();
                var padre = $(this).parent().parent().find("tbody");
                padre.append(row);
            });

            function changeMonth(value){
                var mes = value.split('-');
                var single = parseInt(mes[0],10);
                return Months[single-1]+"-"+mes[1]+"-"+mes[2];
            }

            $(".tabs-head ul li p").click(function(e){
                e.preventDefault();
                index = $(this).parent().index();

                var position = $(".tabs-body ul li:eq("+ index +")").position().top;
                $('html, body').animate({scrollTop : (position+300)},1500);

//                $(".tabs-body ul li").addClass('hidden');

//                $("#actualStep").text(index+1);
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


            $('input:radio').change(function(){

            });

            var hotel = null;
            $("input[name='hotel_reservation']").change(function() {
                hotel = this.value;
                if(hotel === "no"){
                    $("#hotel_reservation_wrapp").slideUp();
                }else{
                    $("#hotel_reservation_wrapp").hide().removeClass('hidden').slideDown();
                }
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

        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(scroll<=500){
                $("#goUp").css('top', -scroll);
            }

            var i;
            var y = 0;
            for (i = 0; i < positions.length; i++){
                if ((scroll-200) >= positions[i]){
                    y = i;
                }
            }


            $(".tabs-head ul li").removeClass('active');
            $(".tabs-head ul li:eq("+ y +")").addClass('active');
        });
})

;
