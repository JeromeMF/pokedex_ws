class PokemonviewController {
  constructor(pokeapiClientService, $stateParams, $http) {
    'ngInject';

    console.log($stateParams.id);  //the ':id' from the URL
    this.name = 'pokemonview';

    this._pokeapiClientService = pokeapiClientService;

    this._pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/pokemon/' + $stateParams.id, (err, pokemon) => {
    	this.pokemon = pokemon;
    });

    this._pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/pokemon/' + (parseInt($stateParams.id) + 1), (err, pokemon) => {
    	this.nextPokemon = pokemon;
    });

    this._pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/pokemon/' + (parseInt($stateParams.id) - 1), (err, pokemon) => {
    	this.previousPokemon = pokemon;
    });

    this._pokeapiClientService.getPokemon('http://pokeapi.co/api/v2/characteristic/' + ($stateParams.id), (err, pokemon) => {
    	this.pokeDescription = pokemon;
    });

  }
}


export default PokemonviewController;
