angular.module('myApp').directive("myMaterialSelect", ["$timeout", function ($timeout) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      $(function () {
        $(element).material_select();

        //Model muda quando o item selecionado muda
        $(element).change(function () {
          ngModelCtrl.$setViewValue($(element).val());
        });
      });
    }
  }
}])