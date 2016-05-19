class PaginationController {
  constructor() {
    this.name = 'pagination';
  }
  
  goNext() {
    this.currentPage++;
  }
  
  goPrev() {
    this.currentPage--;
  }  
   
  numberOfPages () {
    return Math.ceil(this.itemsLength / this.itemsPerPage);
  }  

}

export default PaginationController;
