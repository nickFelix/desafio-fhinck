angular.module('myApp').service('formService', ['$http', function($http){
  
  return {

    submitForm: function(data){
      return $http.post('some url', data);
    }

  }


}]);