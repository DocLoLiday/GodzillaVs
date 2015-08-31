//var app = angular.module("godzillaVsApp", []);

var app = angular.module("godzillaVsApp", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .when('/reviews/:id', {
      controller: 'ReviewController',
      templateUrl: 'views/review.html'
    })
    .when('/about', {
      controller: 'AboutController',
      templateUrl: 'views/about.html'
    })
    .when('/contact', {
      controller: 'ContactController',
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });


});