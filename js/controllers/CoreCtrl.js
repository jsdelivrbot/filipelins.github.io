function CoreCtrl($injector, $scope){

   this.$injector = $injector;
   this.$scope = $scope;

   var injected = [
      "$rootScope",
      "$cookies",
      "$location",
      "$routeParams",
      "$http"
    ];

    angular.forEach(injected, function(objectName){
      this[objectName] = this.inject(objectName)
    }.bind(this));

 }

CoreCtrl.prototype.inject = function(name){
  return this.$injector.get(name);
}
