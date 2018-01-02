angular.module('generic-client.controllers.crypto_mining', [])

    .controller('CryptoMiningCtrl', function ($scope, $state, $window) {
        'use strict';

        $scope.data = {};
        $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));

        $scope.submit = function (form) {
            if (form.$valid) {
                $state.go('app.send_to', {
                    amount: form.amount.$viewValue,
                    note: form.note.$viewValue,
                    currency: $scope.currency
                });
            }
        };
    });
