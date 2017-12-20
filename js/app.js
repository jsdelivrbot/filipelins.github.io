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
            .when('/rent', { templateUrl: 'views/pages/rent.html' })
            .when('/sold', { templateUrl: 'views/pages/sold.html' })
            .when('/about', { templateUrl: 'views/pages/about-us.html' })


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
app.controller('RentCtrl',['$injector', '$scope', RentCtrl]);
app.controller('SoldCtrl',['$injector', '$scope', SoldCtrl]);



//-- Services
app.service('Rent', Rent);
app.service('Sold', Sold);
app.service('Highlighted', Highlighted);
