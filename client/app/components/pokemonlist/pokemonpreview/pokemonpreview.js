import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pokemonpreviewComponent from './pokemonpreview.component';

let pokemonpreviewModule = angular.module('pokemonpreview', [
  uiRouter
])

.component('pokemonpreview', pokemonpreviewComponent)

.name;

export default pokemonpreviewModule;
