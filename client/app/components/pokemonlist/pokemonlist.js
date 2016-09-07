import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pokemonlistComponent from './pokemonlist.component';
import pokemonPreview from './pokemonpreview/pokemonpreview';
import ngInfiniteScroll from 'ng-infinite-scroll';

let pokemonlistModule = angular.module('pokemonlist', [
	uiRouter,
	pokemonPreview,
	ngInfiniteScroll 
	])

.config(($stateProvider, $urlRouterProvider) => {
	"ngInject";

	$stateProvider
	.state('pokemonlist', {
		url: '/pokemonlist',
		component: 'pokemonlist'
	});
})

.component('pokemonlist', pokemonlistComponent)

.name;

export default pokemonlistModule;