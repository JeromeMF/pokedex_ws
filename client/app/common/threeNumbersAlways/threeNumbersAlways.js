import angular from 'angular';  
import threeNumbersAlwaysFilter from './threeNumbersAlways.filter';

let threeNumbersAlwaysModule = angular.module('threeNumbersAlways', [])

.filter('threeNumbersAlways', threeNumbersAlwaysFilter)

.name;

export default threeNumbersAlwaysModule;