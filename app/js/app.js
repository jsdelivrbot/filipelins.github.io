var app = angular.module('app', [
  'ngRoute',
  'ngResource',
  'ngCookies'
]);
app.config([
    '$routeProvider',
    '$httpProvider',
    function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', { templateUrl: 'views/test.html' })

            .otherwise({
            	redirectTo: function() {
            		window.location = "/404.html";
            	}
            });
    }
]);

//-- Controllers
app.controller('TestCtrl',['$injector', '$scope', TestCtrl]);

//-- Services
app.service('Test', Test);
