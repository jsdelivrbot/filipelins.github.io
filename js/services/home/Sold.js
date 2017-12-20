function Sold($resource){
  return [
      {
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


// function Fipe($resource){
//     var path = 'https://fipe-parallelum.rhcloud.com/api/v1';
//
//     return $resource(path, {}, {
//       getBrands : {
//         method : 'GET',
//         url : path + '/:type/marcas/',
//         isArray: true
//       },
//       getVehicles : {
//         method : 'GET',
//         url : path + '/:type/marcas/:brand/modelos'
//       },
//       getYears : {
//         method : 'GET',
//         url : path + '/:type/marcas/:brand/modelos/:model/anos',
//         isArray : true
//       },
//       getDetails : {
//         method : 'GET',
//         url : path + '/:type/marcas/:brand/modelos/:model/anos/:year'
//       }
//     });
// }
