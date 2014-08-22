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

      scope.$watch('stepHr', function(hours) {
        hours = Number(scope.stepHr);
        scope.hrOptions = _.range(1, 13, hours);
      });
      scope.hr = 1;

      //start minutes
      scope.$watch('stepMin', function(minutes) {
        minutes = Number(scope.stepMin);
        scope.minOptions = ["00"];
        scope.minOptions = _.map(_.range(0, 60, minutes), function(val) {
          val = String(Math.floor(val / 10)) + String(val % 10);
          return val;
        });
      });
      scope.min = "00";
    }
  };
});
