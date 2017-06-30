describe('NavigationCustomerController', function() {
   beforeEach(module('angularExercise'));
    
    var scope, ctrl, rootScope, location;
    
    beforeEach(inject(function($rootScope, $location, $controller) {
        scope = $rootScope.$new();  
        location = $location;
        rootScope = $rootScope;
        ctrl = $controller('NavigationCustomerController', {
            $scope: scope
        });
        
    }));
    
    it('should redirect to customer overview page after clicking on "Back To Overview" button', (function() {
        location.path('customer/navi');
        expect(location.path()).toBe('/customer/navi');
        scope.backToOverview();
        expect(location.path()).toBe('/main');
    }));
});