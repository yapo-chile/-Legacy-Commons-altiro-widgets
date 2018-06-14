import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { YapoGallery } from '../src/yapo-gallery';

describe('<yapo-gallery>', () => {
  let component: YapoGallery;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<yapo-gallery></yapo-gallery>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <yapo-gallery>');
    });
  });

  
  describe('subcategory', () => {
    beforeEach(() => {
      component = fixture('<yapo-gallery></yapo-gallery>');
      /** Set typical complex property. */
      // component.subcategory = String
    });

    it('is rendered', () => {
      // expect(component.$('.content').innerText).to.include('subcategory: ');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<yapo-gallery>slot content</yapo-gallery>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--yapo-gallery-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<yapo-gallery></yapo-gallery>');
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(250, 250, 250)');
      });
    });

    describe('with outside value', () => {
      beforeEach(() => {
        component = fixture(`
          <div>
            <style>
              yapo-gallery.blue {
                --yapo-gallery-background-color: #03A9F4;
              }
            </style>
            <yapo-gallery class="blue"></yapo-gallery>
          </div>
        `).querySelector('yapo-gallery') as YapoGallery;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): YapoGallery {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as YapoGallery;
}
