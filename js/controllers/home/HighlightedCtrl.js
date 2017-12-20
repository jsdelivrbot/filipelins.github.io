function HighlightedCtrl(){
  CoreCtrl.apply(this, arguments);
  this.$scope.tab = 0;
  this.service = this.inject('Highlighted');
  this.$scope.itens = this.service;
}

$.extend(HighlightedCtrl.prototype, CoreCtrl.prototype );

// NOTE: Remover depois
HighlightedCtrl.prototype.addCarosel =  function(){
  $('.carousel').flickity({cellAlign: 'center',contain: false});
};
