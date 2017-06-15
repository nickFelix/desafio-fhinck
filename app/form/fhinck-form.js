angular.module('myApp').controller('FhinckFormCtrl',['$scope',  'utilsService',
function($scope, utilsService){

  var vm = this;

  vm.form = {};

  vm.checkTolken = function(){
    if(vm.form.tolken 
    && utilsService.checkTolken(vm.form.tolken)){
      $(".inner-form-wrapper").children().show('slow');
      vm.invalidToken = false;
    }else{
      $(".inner-form-wrapper").children().hide('fast');
      vm.invalidToken = true;
    }
  }

  vm.checkName = function(){
    if(utilsService.hasNumber(vm.form.name)){
      vm.planets = ['Vril-Kh5a3r-Non', 'Hd2gas4ter', 'H1Jlç098aioewtw', 'P0oetsr', 'Za12reopd´os', 'Q8Pei-usa8jndl_etar'];
    }else{
      vm.planets = ['Kruart-mon', 'Clivelle', 'Kracken'];
    }
  }

  vm.toDate = function(dateStr) {
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

}]);

$(document).ready(function() {
  $('select').not('.disabled').material_select();

  $(".inner-form-wrapper").children().hide();

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
      $(document.activeElement).blur()
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
