import PokeapiClientModule from './pokeapiClient'
import PokeapiClientController from './pokeapiClient.controller';
import PokeapiClientComponent from './pokeapiClient.component';
import PokeapiClientTemplate from './pokeapiClient.html';

describe('PokeapiClient', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PokeapiClientModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PokeapiClientController();
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
      expect(PokeapiClientTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PokeapiClientComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PokeapiClientTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PokeapiClientController);
      });
  });
});
