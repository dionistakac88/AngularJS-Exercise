describe('CustomerController', function() {
   beforeEach(module('angularExercise'));
    
    var scope, ctrl, rootScope, location;
    
    beforeEach(inject(function($rootScope, $location, $controller) {
        scope = $rootScope.$new();  
        location = $location;
        rootScope = $rootScope;
        ctrl = $controller('CustomerController', {
            $scope: scope
        });
    }));
    
    it('should redirect to customer overview page after clicking on cancel button', (function() {
        location.path('/customer/new');
        expect(location.path()).toBe('/customer/new');
        scope.cancel();
        expect(location.path()).toBe('/main');
    }));
});