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
            .when('/', { templateUrl: 'views/home/home.html' })

            .otherwise({
            	redirectTo: function() {
            		window.location = "/404.html";
            	}
            });
    }
]);

//-- Controllers
app.controller('MenuCtrl',['$injector', '$scope', MenuCtrl]);
app.controller('HighlightedCtrl',['$injector', '$scope', HighlightedCtrl]);



//-- Services
// app.service('Test', Test);
