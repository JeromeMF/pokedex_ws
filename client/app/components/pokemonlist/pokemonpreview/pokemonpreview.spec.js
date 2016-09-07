import PokemonpreviewModule from './pokemonpreview'
import PokemonpreviewController from './pokemonpreview.controller';
import PokemonpreviewComponent from './pokemonpreview.component';
import PokemonpreviewTemplate from './pokemonpreview.html';

describe('Pokemonpreview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PokemonpreviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PokemonpreviewController();
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
      expect(PokemonpreviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PokemonpreviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PokemonpreviewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PokemonpreviewController);
      });
  });
});
