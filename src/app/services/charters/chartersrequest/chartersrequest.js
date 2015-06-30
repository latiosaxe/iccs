angular.module( 'ngBoilerplate.servicesChartersRequest', [
        'ui.router'
    ])

    .config(function config( $stateProvider ) {
        $stateProvider.state( 'servicesChartersRequest', {
            url: '/servicesChartersRequest',
            views: {
                "main": {
                    controller: 'services_ChartersRequest',
                    templateUrl: 'services/charters/chartersrequest/chartersrequest.tpl.html'
                }
            },
            data:{ pageTitle: "Request Charters" }
        });
    })

    .controller( 'services_ChartersRequest', function services_Charters_Request_Controller( $scope ) {
        var index = 0;
        var row = '<tr><td>From:</td><td><input type="text" maxlength="50"/></td><td><input type="text" maxlength="12" class="calendarInput"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="3" class="justNumbers"/></td></tr><tr><td>To:</td><td><input type="text" maxlength="50"/></td><td><input type="text" maxlength="12" class="calendarInput"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="12"/></td><td><input type="text" maxlength="3" class="justNumbers"/></td></tr>';
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

            $("#addRowMagic").click(function(e){
                e.preventDefault();
                var padre = $(this).parent().parent().find("tbody");
                padre.append(row);
            });

            $("#addRoute").click(function(e){
                e.preventDefault();
                var target = $("#target");
                if(target.hasClass('hidden')){
                    target.hide().removeClass('hidden').slideDown();
                }else{
                    target.slideUp();
                    setTimeout(function(){
                        target.addClass('hidden');
                    },500);
                }
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