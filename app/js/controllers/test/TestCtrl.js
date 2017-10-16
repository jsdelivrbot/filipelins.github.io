function TestCtrl (){
  CoreCtrl.apply(this, arguments);

  this.service = this.inject('Test');
  this.list();
}
$.extend(TestCtrl.prototype, CoreCtrl.prototype );

TestCtrl.prototype.list =  function (){
  this.service.list(
    function(data){console.log(data);}.bind(this),
    function(data){console.log(data);}
  );
};
