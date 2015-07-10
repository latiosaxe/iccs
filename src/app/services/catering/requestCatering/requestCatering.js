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
            $(".note").addClass('width0');

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

            var elementsData, elementChild, checkbox;

            $(".acordeon input[type='checkbox']").click(function(event){

            });

            $('body').delegate('.acordeon fieldset input[type="checkbox"]', 'click', function(event){
                //event.stopPropagation();
                var este = $(this).parent().parent();
                console.log(este);
                checkbox = $(this);

                if(este.hasClass('hasChild')){
                    elementsData = este.attr("data-elements").split("/");
                    elementChild = este.children(".child");
                    if(este.hasClass("active")){
                        elementChild.html("");
                        este.removeClass('active');
                        checkbox.prop('checked', false);
                    }else{
                        elementChild.html("");
                        var aux;
                        $.each(elementsData, function(index, value){
                            console.log(value);
                            if (value.indexOf("|") !=-1) {
                                aux =  value.split("|");
                                console.log(aux);

                                elementChild.append("<span class='Bigblock'>"+aux[1]+"</span>");
                                elementChild.append('<div class="falseRow"><label><input type="checkbox"/><span>'+aux[2]+'</span><input type="text" class="note width0" name="special_note'+aux[2]+'" placeholder="Special Notes"/><input type="text" class="qty width0" name="qty'+aux[2]+'" placeholder="quantity"/></label></div>');
                            }else{
                                elementChild.append('<div class="falseRow"><label><input type="checkbox"/><span>'+value+'</span><input type="text" class="note width0" name="special_note'+value+'" placeholder="Special Notes"/><input type="text" class="qty width0" name="qty'+value+'" placeholder="quantity"/></label></div>');
                            }

                        });
                        este.addClass('active');
                        checkbox.prop('checked', true);
                    }

                }else{
                    console.log("No");
                    //$(".acordeon fieldset label input[type='checkbox']").removeClass('aux');
                    //checkbox.addClass('aux');
                    if(este.hasClass("active")){
                        este.removeClass('active');
                        checkbox.prop('checked', false);
                        este.find('.qty').addClass('width0');
                        este.find('.note').addClass('width0');
                    }else{
                        este.addClass('active');
                        checkbox.prop('checked', true);
                        este.find('.qty').removeClass('width0');
                        este.find('.note').removeClass('width0');
                    }
                }


                var total= $(".acordeon").find('.qty:not(".width0")').length;
                $("#here").text(total);
            });
        });
})

;
