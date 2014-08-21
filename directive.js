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
          scope_timeinput = scope;
          scope.ampmOptions = ['AM','PM'];
          scope.ampm = 'AM';
    }
  };
});
