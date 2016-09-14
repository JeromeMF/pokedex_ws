import ThreeNumbersAlwaysModule from './threeNumbersAlways'
import ThreeNumbersAlwaysController from './threeNumbersAlways.controller';
import ThreeNumbersAlwaysComponent from './threeNumbersAlways.component';
import ThreeNumbersAlwaysTemplate from './threeNumbersAlways.html';

describe('ThreeNumbersAlways', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ThreeNumbersAlwaysModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ThreeNumbersAlwaysController();
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
      expect(ThreeNumbersAlwaysTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ThreeNumbersAlwaysComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ThreeNumbersAlwaysTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ThreeNumbersAlwaysController);
      });
  });
});
