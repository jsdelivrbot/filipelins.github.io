function MenuCtrl (){
  CoreCtrl.apply(this, arguments);
  this.addCarosel();

  this.$scope.menu = [
    {
      label:'Home',
      target:'/'
    },{
      label:'A Empresa',
      target:'#!/about'
    },{
      label:'Venda',
      target:'#!/sold'
    },{
      label:'Locação',
      target:'#!/rent'
    },{
      label:'Cadastro de Imóveis',
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
