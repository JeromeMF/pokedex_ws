import PokemonlistModule from './pokemonlist'
import PokemonlistController from './pokemonlist.controller';
import PokemonlistComponent from './pokemonlist.component';
import PokemonlistTemplate from './pokemonlist.html';

describe('Pokemonlist', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PokemonlistModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PokemonlistController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PokemonlistTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PokemonlistComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PokemonlistTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PokemonlistController);
      });
  });
});
