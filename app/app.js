(function(){
    
    var app = angular.module("angularExercise", ["ngRoute", "smart-table", "ngMessages", "ui.bootstrap", "ngSanitize", "ui.select", "ngStorage"]);
    app.config(function($routeProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "main.html",
                controller: "MainController"
            })
            .when("/customer/new", {
                templateUrl: "customer.html",
                controller: "CustomerController"
            })
            .when("/customer/edit", {
                templateUrl: "customer.html",
                controller: "CustomerController"
            })
            .when("/customer/navi", {
                templateUrl: "navigation-customer.html",
                controller: "NavigationCustomerController"
            })
            .otherwise({redirectTo:"/main"});
    });
    
}());