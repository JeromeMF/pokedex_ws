import angular from 'angular';
import Navbar from './navbar/navbar';
import User from './user/user';
import PokeapiClient from './pokeapiClient/pokeapiClient';
import ThreeNumberFilter from './threeNumbersAlways/threeNumbersAlways';


 
let commonModule = angular.module('app.common', [
  Navbar,
  User,
  PokeapiClient,
  ThreeNumberFilter
])
  
.name;

export default commonModule;
