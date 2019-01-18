import {App} from '../../src/app';
import {PLATFORM, DOM} from 'aurelia-pal';
import {StageComponent} from 'aurelia-testing';
import {bootstrap} from 'aurelia-bootstrapper';

describe('the app', () => {
  let component;

  describe('and testing screen components', () => {
    beforeEach(() => {
      // Configure Component (Screen)
      component = StageComponent
        .withResources(PLATFORM.moduleName('app'))
        .inView('<app></app>');

      component.bootstrap(aurelia => {
        aurelia.use.standardConfiguration();
      });
    });

    afterEach(() => {
      component.dispose();
    });

    it('should display the correct header for the screen', done => {
      component.create(bootstrap)
        .then(() => {
          const element = document.querySelector('#msg-id');
          expect(element).toBeDefined();
          expect(element.textContent).toBe('Hello World!');
          done();
          return null;
        }).catch(done.fail);
    });
  });

  it('says hello', () => {
    expect(new App().message).toBe('Hello World!');
  });
});
