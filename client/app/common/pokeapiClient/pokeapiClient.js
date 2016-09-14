import angular from 'angular';  
import pokeapiClientService from './pokeapiClient.service';

let pokeapiClientModule = angular.module('pokeapiClient', [])

.service('pokeapiClientService', pokeapiClientService)

.name;

export default pokeapiClientModule;  