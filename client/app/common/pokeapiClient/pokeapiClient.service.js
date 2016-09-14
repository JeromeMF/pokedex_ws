let PokeApiService = function ($http) {  
	'ngInject';

let pokemons = [];

let exampleFunction = () => {
		return 'example response';
};

     // url: the full url for the pokemon
  	// cb: short for *call back*, a function that is invoked when the *getPokemon* function is complete or failed

  	let getPokemon = (url, cb) => {

    // check for our pokemon in the service variable `pokemons`
    // by url
    let index = pokemons.map(function(pokemon){
    	return pokemon.url;
    }).indexOf(url);


    // if we already have it
    if(index !== -1){

      // return the pokemon from our `pokemons` array
      cb(null, pokemons[index]);

  } else {

      // get the pokemon from the inputed url
      $http({
      	method: 'GET',
      	url
      }).then((response) => { //success function

      	let pokemon = response.data;

        // add a url parameter to the pokemon
        // so that we can find it again by url
        pokemon.url = url;

        // save the pokemon
        pokemons.push(pokemon);

        // return the pokemon
        cb(null,pokemon);

      }, (response) => { //error function

        // return the response as an error
        cb(response,false);

    });

  }

};

let getPokemons = (offset, cb) => {

    // get the list of pokemons from pokeapi.co
    // with a limit of 12 and an inputed offset
    $http({
    	method: 'GET',
    	url: '//pokeapi.co/api/v2/pokemon/?limit=12&offset='+offset
    }).then((response) => {

      // these variables will help us keep track of how many
      // pokemons we are still waiting for
      let todo = 12;
      let done = 0;

      let receivedPokemons = [];

      // for each pokemon in the list get the full pokemon information
      response.data.results.forEach((pokemon) => {

        // use our service function to get the pokemon
        getPokemon(pokemon.url, (err, pokemon) => {

          // add the pokemon to `receivedPokemons`
          receivedPokemons.push(pokemon);

          // update `done`
          done++;

          // if we already have all the 12 pokemons
          if(done===todo){

            // return the list of pokemons
            cb(null,receivedPokemons);

        }

    });

    });

  }, (response) => {

  	cb(response,false);

  });

};

return { exampleFunction, getPokemons, getPokemon };  

};

export default PokeApiService;