APP
.directive('templateBody', [function() {
    return {
        restrict: 'C',
        replace: false,
        templateUrl: 'html/content.html',
        //template: TPL.content,
        link: function($scope, $element, $attributes) {
            $scope.cool = 'footer content';

        } 
     } 
 }])
.directive('header', [function() {
    return {
        restrict: 'A',
        replace: false,
        scope: false,
        templateUrl: 'html/header.html',
        //template: TPL.content,
        link: function($scope, $element, $attributes) {
            $scope.someData = [
                { 'name' : 'dude' },
                { 'name' : 'dude' },
                { 'name' : 'dude' },
                { 'name' : 'dude' },
                { 'name' : 'dude' },
                { 'name' : 'dude' },
                { 'name' : 'dude' }
            ]
         }
      } 
 }])
.directive('footer', [function() {
    return {
        restrict: 'A',
        replace: false,
        scope: false,
        templateUrl: 'html/footer.html',
        //template: TPL.content,
        link: function($scope, $element, $attributes) {
         }
      } 
 }])
