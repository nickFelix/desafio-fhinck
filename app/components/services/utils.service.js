angular.module('myApp').service('utilsService', [function(){
  
  return {

    checkTolken: function(tolken){
      var validTolken = false;
      var now = new Date();
      var parts = tolken.split("+");

      if(parts[0] == now.getDate() 
      && (parts[1] == now.getMonth() + 1)
      && parts[2] == 5){
        validTolken = true;
      }
      
      return validTolken;

    },

    hasNumber: function(val){

      if(!val){
        return
      }
      var contains = false;

      for(var i = 0; i < val.length; i++){
        if(val.charCodeAt(i) >= 48 
        && val.charCodeAt(i) <= 57){
          contains = true;
        }
      }

      return contains;
    },

    toDate: function(dateStr) {
      var parts = dateStr.split("-");
      return new Date(parts[2], parts[1] - 1, parts[0]);
    }

  }


}]);