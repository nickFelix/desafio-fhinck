angular.module('myApp').controller('FhinckFormCtrl', ['$scope', 'utilsService', '$timeout', 'Upload',
  function ($scope, utilsService, $timeout, Upload) {

    var vm = this;

    vm.form = {
      tolken: ''
    };

    vm.planets = [];

    vm.ships = [
      { name: 'B-WING PROTOTYPE', img: '../resources/img/bwing-featured-final.jpg' },
      { name: 'B-WING FIGHTER', img: '../resources/img/B-Wing-fighter.jpg' },
      { name: 'BROKEN HORN', img: '../resources/img/broken-horn.jpg' },
      { name: 'CLONE Z-95 STARFIGHTER', img: '../resources/img/CloneZ95Headhunter-SWE.jpg' },
      { name: 'CRUCIBLE', img: '../resources/img/crucible.jpg' },
      { name: 'GR-75 MEDIUM TRANSPORT', img: '../resources/img/GR-75_Medium_Transport.jpg' },
      { name: 'GX1 SHORT HAULE', img: '../resources/img/GX1_Ventral.jpg' },
    ];

    vm.scrollToForm = function () {
      $('html, body').animate({ scrollTop: $('.js--rebel-form').offset().top }, 1000);
    }

    vm.checkTolken = function () {
      if (vm.form.tolken
        && utilsService.checkTolken(vm.form.tolken)) {
        $(".inner-form-wrapper").children().show('slow');
        vm.invalidToken = false;
      } else {
        $(".inner-form-wrapper").children().hide('fast');
        vm.invalidToken = true;
      }
    }

    vm.checkName = function () {

      if (utilsService.hasNumber(vm.form.name)) {
        vm.planets = [{ name: 'Vril-Kh5a3r-Non' },
        { name: 'Hd2gas4ter' },
        { name: 'H1Jlç098aioewtw' },
        { name: 'P0oetsr' },
        { name: 'Za12reopd´os' },
        { name: 'Q8Pei-usa8jndl_etar' }];
      } else {
        vm.planets = [{ name: 'Kruart-mon' }
          , { name: 'Clivelle' }
          , { name: 'Kracken' }];
      }
      //rerenders select input
      $('#pilot-planet').material_select('destroy');
      $timeout(function () {
        $('#pilot-planet').material_select();
      }, 0);
    }

    vm.checkDates = function(){


      if(!vm.arrivalDate){
        $('#arrival-date').addClass('invalid');
      }else{
        $('#arrival-date').removeClass('invalid');
        $('#arrival-date').addClass('valid');
      }

      if(!vm.departureDate){
        $('#departure-date').addClass('invalid');
        return;
      }else{
        $('#departure-date').removeClass('invalid');
        $('#departure-date').addClass('valid');
      }

      var arrDate = utilsService.toDate(vm.arrivalDate);
      var depDate = utilsService.toDate(vm.departureDate);

      var arrTime = vm.arrivalTime.split(":");
      var depTime = vm.departureTime.split(":");

      arrDate.setHours(arrTime[0]);
      arrDate.setMinutes(arrTime[1]);

      depDate.setHours(depTime[0]);
      depDate.setMinutes(depTime[1]);

      if(arrDate < Date.now()){
        $('#arrival-time').addClass('invalid');
      }else{
        $('#arrival-time').removeClass('invalid');
        $('#arrival-time').addClass('valid');
      }

      if(depDate < arrDate){
        $('#departure-time').addClass('invalid');
        return;
      }else{
        $('#departure-time').removeClass('invalid');
        $('#departure-time').addClass('valid');
      }


    }

    vm.uploadFiles = function (file, errFiles) {
      vm.f = file;
      vm.errFile = errFiles && errFiles[0];
      if (file) {
        file.upload = Upload.upload({
          url: 'to be defined',
          data: { file: file }
        });

        file.upload.then(function (response) {
          $timeout(function () {
            file.result = response.data;
          });
        }, function (response) {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          file.progress = Math.min(100, parseInt(100.0 *
            evt.loaded / evt.total));
        });
      }
    }

    $(document).ready(function () {

      $('select').not().material_select();

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
        onClose: function () {
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
        aftershow: function () { } //Function for after opening timepicker
      });

    });

  }]);