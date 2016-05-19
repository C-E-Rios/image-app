import template from './pagination.html';
import controller from './pagination.controller';
import './pagination.scss';

let paginationComponent = {
  bindings: {
  	itemsLength: '=',
  	currentPage: '=',
    itemsPerPage: '='
  },
  template,
  controller,
};

export default paginationComponent;
