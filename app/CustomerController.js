angular.module('angularExercise')

.controller('CustomerController', ['$scope', '$location', '$localStorage',
      function($scope, $location, $localStorage) {
        
        $scope.customer = {};
        var indexOfChangedCustomer;
        
        $scope.isCustomerEdit = $location.search().id;
        $scope.pageTitle = $scope.isCustomerEdit ? "Customer Edit" : "Customer Details";
        
        if ($scope.isCustomerEdit){
            $localStorage.customers.forEach(function(customer, index) {
                if (customer.id == $location.search().id) {
                    indexOfChangedCustomer = index;
                    $scope.customer.id = $location.search().id;
                    $scope.customer.firstName = customer.firstName;
                    $scope.customer.lastName = customer.lastName;
                    $scope.customer.birthday = new Date(customer.birthday);
                    $scope.customer.gender = customer.gender;
                    $scope.customer.lastContact = new Date(customer.lastContact);
                    $scope.customer.customerLifetimeValue = customer.customerLifetimeValue;
                }
            });
        }
        
        $scope.birthdayOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            startingDay: 1
        };
        
        $scope.lastContactOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            startingDay: 1
        };
        
        $scope.openBirthday = function() {
            $scope.birthday.opened = true;
            // birthday date cannot be after last contact date
            if ($scope.customer.lastContact){
                $scope.birthdayOptions.maxDate = $scope.customer.lastContact;
            }
        };
        
        $scope.openLastContact = function() {
            $scope.lastContact.opened = true;
            // last contact date cannot be before birthday date
            if ($scope.customer.birthday){
                $scope.lastContactOptions.minDate = $scope.customer.birthday;
            }
        };
        
        $scope.birthday = {
            opened: false
        };
        
        $scope.lastContact = {
            opened: false
        };
        
        $scope.genders = [
            "male",
            "female"
        ];
        
        $scope.saveCustomer = function () {
            if (!$scope.isCustomerEdit){
                $localStorage.customers.push($scope.customer);
                $location.path("/main");
            } else {
                $localStorage.customers[indexOfChangedCustomer] = $scope.customer;
                $location.path("/main").search({});;
            }
        }
        
        $scope.cancel = function() {
            $location.path("/main").search({});
        }
}]);