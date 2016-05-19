import angular from 'angular';
import Pagination from './pagination/pagination';

let commonModule = angular.module('app.common', [
  Pagination.name  
]);

export default commonModule;
