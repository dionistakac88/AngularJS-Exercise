angular.module('angularExercise')

.controller('MainController', ['$scope', '$location', '$localStorage',
      function($scope, $location, $localStorage) {

        if (!$localStorage.customers){
            $localStorage.$default({
                "customers": [  
                    {id: 1, firstName: "Peter", lastName: "Smith", birthday: new Date('1996-10-12'), gender: "male", lastContact: "2013-06-01", customerLifetimeValue: 191.12},
                    {id: 2, firstName: "Anna", lastName: "Hopp", birthday: new Date('1987-05-03'), gender: "female", lastContact: "2013-07-08", customerLifetimeValue: 50.99},
                    {id: 3, firstName: "Christian", lastName: "Cox", birthday: new Date('1991-10-12'), gender: "male", lastContact: "2013-08-01", customerLifetimeValue: 0},
                    {id: 4, firstName: "Roxy", lastName: "Fox", birthday: new Date('1979-06-30'), gender: "female", lastContact: "2012-01-29", customerLifetimeValue: 213.12},
                    {id: 5, firstName: "Eric", lastName: "Adam", birthday: new Date('1969-11-21'), gender: "male", lastContact: "2013-03-18", customerLifetimeValue: 1019.91}
                ],
                "navigationData": [
                    {id: 1, page: "A", timestamp: new Date(2013, 6, 1, 10, 10, 12)},
                    {id: 1, page: "B", timestamp: new Date(2013, 6, 1, 10, 11, 12)},
                    {id: 1, page: "A", timestamp: new Date(2013, 6, 1, 10, 12, 12)},
                    {id: 2, page: "C", timestamp: new Date(2013, 7, 8, 9, 3, 9)},
                    {id: 2, page: "A", timestamp: new Date(2013, 7, 8, 9, 9, 9)},
                    {id: 2, page: "D", timestamp: new Date(2013, 7, 8, 9, 19, 9)},
                    {id: 3, page: "B", timestamp: new Date(2013, 7, 8, 9, 19, 9)},
                    {id: 3, page: "A", timestamp: new Date(2013, 7, 8, 9, 19, 10)},
                    {id: 4, page: "D", timestamp: new Date(2013, 7, 8, 9, 19, 11)},
                    {id: 4, page: "A", timestamp: new Date(2013, 7, 8, 9, 19, 12)},
                    {id: 5, page: "X", timestamp: new Date(2013, 7, 8, 9, 19, 13)},
                    {id: 5, page: "A", timestamp: new Date(2013, 7, 8, 9, 19, 14)},
                    {id: 5, page: "B", timestamp: new Date(2013, 7, 8, 9, 19, 15)}
                ]
            });
        }
        
        $scope.$storage = $localStorage.customers;
        
        $scope.calculateAge = function calculateAge(birthday) {
            var ageDifMs = Date.now() - new Date(birthday);
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        
        
         $scope.addCustomer = function () {
            $location.path("/customer/new");
         }
         
         $scope.editCustomer = function (item) {
            $location.path('customer/edit').search({id: item.id});
         }
         
         $scope.navigationCustomer = function (item) {
            $location.path('customer/navi').search({id: item.id});
         }
         
         $scope.deleteCustomer = function (item) {
             var index = $localStorage.customers.indexOf(item);
             $localStorage.customers.splice(index, 1);
             $scope.$storage = $localStorage.customers;
         }
}]);