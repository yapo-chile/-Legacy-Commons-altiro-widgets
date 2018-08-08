import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { SuggestedAdsCarousel } from '../src/suggested-ads-carousel';

describe('<suggested-ads-carousel>', () => {
  let component: SuggestedAdsCarousel;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<suggested-ads-carousel></suggested-ads-carousel>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <suggested-ads-carousel>');
    });
  });

  
  describe('adId', () => {
    beforeEach(() => {
      component = fixture('<suggested-ads-carousel ad-id="Pickle"></suggested-ads-carousel>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('adId: Pickle');
    });
  });

  describe('name', () => {
    beforeEach(() => {
      component = fixture('<suggested-ads-carousel name="Pickle"></suggested-ads-carousel>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('name: Pickle');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<suggested-ads-carousel>slot content</suggested-ads-carousel>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--suggested-ads-carousel-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<suggested-ads-carousel></suggested-ads-carousel>');
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
              suggested-ads-carousel.blue {
                --suggested-ads-carousel-background-color: #03A9F4;
              }
            </style>
            <suggested-ads-carousel class="blue"></suggested-ads-carousel>
          </div>
        `).querySelector('suggested-ads-carousel') as SuggestedAdsCarousel;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): SuggestedAdsCarousel {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as SuggestedAdsCarousel;
}
