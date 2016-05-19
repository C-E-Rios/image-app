class HomeService {
  constructor ($http) {
    'ngInject';
    this.$http = $http;
  }

  getImages () {
    let imagesUrl = 'http://jsonplaceholder.typicode.com/photos';
    return this.$http.get(imagesUrl);
  }
  
}

export default HomeService;
