import angular from 'angular';
import Pokemonlist from './pokemonlist/pokemonlist';

let componentModule = angular.module('app.components', [
	Pokemonlist
	])

.name;

export default componentModule;
