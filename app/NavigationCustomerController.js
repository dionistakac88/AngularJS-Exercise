angular.module('angularExercise')

.controller('NavigationCustomerController', ['$scope', '$routeParams', '$location', '$localStorage',
      function($scope, $routeParams, $location, $localStorage) {

        $scope.filteredNavigationData = [];
        var customerId = $location.search().id;
        var navigationData = $localStorage.navigationData;
            
        if (navigationData) {
            navigationData.forEach(function(customer) {
                if (customer.id == customerId) {
                    $scope.filteredNavigationData.push(customer);
                }
            });
        }
          
        $scope.backToOverview = function() {
            $location.path("/main").search({});
        } 
        
        
}]);