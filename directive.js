var app = angular.module("time", []);

app.directive("timeInput", function() {
  return {
    restrict: "E",
    scope: {
      stepHr: "@",
      stepMin: "@"
    },
    template: "<select ng-model='hr' ng-options='a for a in hrOptions'></select><select ng-model='min' ng-options='b for b in minOptions'></select><select ng-model='ampm' ng-options='c for c in ampmOptions'></select>",
    link: function(scope, element, attrs) {
      //global variable to grab in console
      scope_timeinput = scope;

      //AM and PM array
      scope.ampmOptions = ['AM', 'PM'];
      scope.ampm = 'AM';

      //start hours
      scope.$watch('stepHr', function(stepHr) {
        scope.hrOptions = _.range(1, 13, stepHr);
      });
      scope.hr = 1;

      //start minutes
      scope.$watch('stepMin', function(stepMin) {
            scope.minOptions = _.range(0, 59, stepMin);
      });
      scope.min = 0;
    }
  };
});
