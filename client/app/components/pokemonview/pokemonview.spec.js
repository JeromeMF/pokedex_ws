import PokemonviewModule from './pokemonview'
import PokemonviewController from './pokemonview.controller';
import PokemonviewComponent from './pokemonview.component';
import PokemonviewTemplate from './pokemonview.html';

describe('Pokemonview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PokemonviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PokemonviewController();
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
      expect(PokemonviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PokemonviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PokemonviewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PokemonviewController);
      });
  });
});
