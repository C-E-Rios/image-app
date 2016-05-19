class HomeController {
  constructor(homeService) {
    'ngInject';
    this.name = 'home';
    
    this.homeService = homeService;
    
    //pagination
    this.itemsPerPage = 8;
    this.currentPage = 1;    
    this.showSearch = false;
    
    this.images = [];
    
  }
  
  $onInit() {
    this.homeService.getImages()
      .then((response) => {
        this.images = response.data;      
      });
  }
  
}


export default HomeController;
