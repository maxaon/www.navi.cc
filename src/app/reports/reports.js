angular.module('reports', ['ngRoute', 'resources.account'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/reports', {
    templateUrl:'templates/reports/reports.tpl.html',
    controller:'ReportsViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  }).
  when('/reports/:skey', {
    templateUrl:'templates/reports/reports.tpl.html',
    controller:'ReportsViewCtrl',
    resolve:{
      account:['Account', function (Account) {
        //TODO: sure for fetch only one for the current user
        return Account;
      }]
    }
  });
}])

.controller('ReportsViewCtrl', ['$scope', '$location', 'account', function ($scope, $location, account) {
  $scope.account = account;
}]);
