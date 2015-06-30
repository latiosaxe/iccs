angular.module( 'header', [
    'ui.router'
])
    .controller( 'headerCtrl', function headerController ( $scope) {
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
        });
    })
;


//angular.module('ngBoilerplateCaptcha', ['reCAPTCHA'])
//    .config(function (reCAPTCHAProvider) {
//        // required, please use your own key :)
//        reCAPTCHAProvider.setPublicKey('6LeTnQITAAAAAPi3bP0QE4VZbNSI8zFAVNlqX1h9');
//        // optional
//        reCAPTCHAProvider.setOptions({
//            theme: 'clean'
//        });
//    })
//    .controller('AppCtrl', function ($scope, reCAPTCHA) {
//        $scope.user = {};
//        // or you can also set key here
//        reCAPTCHA.setPublicKey('6LeTnQITAAAAAPi3bP0QE4VZbNSI8zFAVNlqX1h9');
//        $scope.register = function () {
//            if($scope.registerForm.$valid) {
//                $scope.showdialog = true;
//                console.log('Form is valid');
//            }
//        };
//    });