describe('MainController', function() {
   beforeEach(module('angularExercise'));
    
    var scope, ctrl, rootScope, location;
    beforeEach(inject(function($rootScope, $location, $controller) {
        scope = $rootScope.$new();  
        location = $location;
        rootScope = $rootScope;
        ctrl = $controller('MainController', {
            $scope: scope,
        });
    }));

    it('Should has initially 5 customers', (function() {
        expect(scope.$storage.length).toBe(5);
    }));
    
    it('Should exactly calculate age from birthday', (function() {
        var birthday = new Date('1996-10-12');
        var baseTime = new Date(2016, 6, 29);
        jasmine.clock().mockDate(baseTime);
        
        expect(scope.calculateAge(birthday)).toBe(19);
    }));
    
    it('should redirect to customer new page after clicking on add customer button', (function() {
        location.path('/main');
        expect(location.path()).toBe('/main');
        scope.addCustomer();
        expect(location.path()).toEqual('/customer/new');
    }));
});