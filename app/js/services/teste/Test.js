function Test($resource){
    var path = 'https://httpbin.org';

    return $resource(path, {}, {
      list : {
        method : 'GET',
        url : path + '/get'
      }
    });
}
