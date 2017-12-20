function RentCtrl(){
  CoreCtrl.apply(this, arguments);
  this.$scope.tab = 0;
  // this.addCarosel();
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

$.extend(RentCtrl.prototype, CoreCtrl.prototype );
