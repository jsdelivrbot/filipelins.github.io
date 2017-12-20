function SoldCtrl(){
  CoreCtrl.apply(this, arguments);
  this.$scope.tab = 0;
  this.$scope.itens = [
    {
      id:'1',
      img:'http://via.placeholder.com/337x400'
    },{
      id:'1',
      img:'http://via.placeholder.com/337x400'
    },{
      id:'1',
      img:'http://via.placeholder.com/337x400'
    },{
      id:'1',
      img:'http://via.placeholder.com/337x400'
    },{
      id:'1',
      img:'http://via.placeholder.com/337x400'
    },{
      id:'1',
      img:'http://via.placeholder.com/337x400'
    }
  ]
}

$.extend(SoldCtrl.prototype, CoreCtrl.prototype );
