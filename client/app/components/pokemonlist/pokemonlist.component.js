import template from './pokemonlist.html';
import controller from './pokemonlist.controller';
import './pokemonlist.sass';

let pokemonlistComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default pokemonlistComponent;
