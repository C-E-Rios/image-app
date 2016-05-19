import angular from 'angular';
import paginationComponent from './pagination.component';

let paginationModule = angular.module('pagination', [])
	.component('pagination', paginationComponent);

export default paginationModule;
