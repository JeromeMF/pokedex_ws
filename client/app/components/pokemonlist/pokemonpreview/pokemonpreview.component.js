import template from './pokemonpreview.html';
import controller from './pokemonpreview.controller';
import './pokemonpreview.sass';

let pokemonpreviewComponent = {
	restrict: 'E',
	bindings: {
		pokemon: '<'
	},
	template,
	controller
};

export default pokemonpreviewComponent;
