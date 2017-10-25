function MenuCtrl (){
  CoreCtrl.apply(this, arguments);
  this.addCarosel();

  this.$scope.menu = [
    {
      label:'Home',
      target:'/'
    },{
      label:'A Empresa',
      target:'/'
    },{
      label:'Venda',
      target:'/'
    },{
      label:'Locação',
      target:'/'
    },{
      label:'Cadastro de Imóveis',
      target:'/'
    },{
      label:'Financiamento',
      target:'/'
    },{
      label:'Fale Conosco',
      target:'/'
    }
  ];

}
$.extend(MenuCtrl.prototype, CoreCtrl.prototype );

//-- Adiciona carrossel
MenuCtrl.prototype.addCarosel =  function(){
  $('.gallery').flickity({cellAlign: 'left',contain: true});
};
