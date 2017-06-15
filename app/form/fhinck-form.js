angular.module('myApp').controller('FhinckFormCtrl',['$scope', 
function($scope){

  var vm = this;

  vm.form = {};

  vm.dataMudou = function(){
    console.log(vm.arrivalTime);
  }

  vm.toDate = function(dateStr) {
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
}]);

$(document).ready(function() {
  $('select').not('.disabled').material_select();

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    closeOnClear: false,
    format: 'dd-mm-yyyy',
    today: 'Hoje',
    clear: 'Limpar',
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 
    'Abril', 'Maio', 'Junho', 
    'Julho', 'Agosto', 'Setembro', 
    'Outubro', 'Novembro', 'Dezembro'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    min: new Date(),
    onClose: function() {
      this.$holder.blur();
    }
  });

  $('.timepicker').pickatime({
      default: 'now', // Set default time
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Limpar', // text for clear-button
      canceltext: 'Cancelar', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} //Function for after opening timepicker
  });

});
