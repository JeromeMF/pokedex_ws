import angular from 'angular';
import Pokemonlist from './pokemonlist/pokemonlist';
import Pokemonview from './pokemonview/pokemonview';

let componentModule = angular.module('app.components', [
	Pokemonlist,
	Pokemonview
	])

.name;

export default componentModule;
