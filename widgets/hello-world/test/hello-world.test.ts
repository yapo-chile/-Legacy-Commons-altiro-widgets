import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { HelloWorld } from '../src/hello-world';

describe('<hello-world>', () => {
  let component: HelloWorld;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<hello-world></hello-world>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <hello-world>');
    });
  });

  
  describe('name', () => {
    beforeEach(() => {
      component = fixture('<hello-world name="Pickle"></hello-world>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('name: Pickle');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<hello-world>slot content</hello-world>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--hello-world-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<hello-world></hello-world>');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(255, 255, 255)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture(`
          <div>
            <style>
              hello-world.blue {
                --hello-world-background-color: #03A9F4;
              }
            </style>
            <hello-world class="blue"></hello-world>
          </div>
        `).querySelector('hello-world') as HelloWorld;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): HelloWorld {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as HelloWorld;
}
