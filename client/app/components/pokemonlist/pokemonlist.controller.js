class PokemonlistController {

  constructor() {
    this.name = 'pokemonlist';
    this.pokemons = [];
  }

  getMore () {
    for(var i = 0; i<12; i++){
      this.pokemons.push({
        "name": "bulbasaur",
        "id": "001",
        "types": [
          { "name": "grass" },
          { "name": "poison" }
        ]
      });
    }
  }

  $onInit() {
    this.getMore();
  }

}

export default PokemonlistController;  