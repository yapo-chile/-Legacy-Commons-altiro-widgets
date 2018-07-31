import 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { ListingItem } from '../src/listing-item';

describe('<listing-item>', () => {
  let component: ListingItem;

  describe('without properties', () => {
    beforeEach(() => {
      component = fixture('<listing-item></listing-item>');
    });

    it('renders default', () => {
      expect(component.$('.content').innerText).to.include('Welcome to <listing-item>');
    });
  });

  
  describe('adId', () => {
    beforeEach(() => {
      component = fixture('<listing-item ad-id="42"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('adId: 42');
    });
  });

  describe('adParams', () => {
    beforeEach(() => {
      component = fixture('<listing-item ad-params="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('adParams: Pickle');
    });
  });

  describe('category', () => {
    beforeEach(() => {
      component = fixture('<listing-item category="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('category: Pickle');
    });
  });

  describe('commune', () => {
    beforeEach(() => {
      component = fixture('<listing-item commune="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('commune: Pickle');
    });
  });

  describe('currency', () => {
    beforeEach(() => {
      component = fixture('<listing-item currency="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('currency: Pickle');
    });
  });

  describe('date', () => {
    beforeEach(() => {
      component = fixture('<listing-item date="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('date: Pickle');
    });
  });

  describe('image', () => {
    beforeEach(() => {
      component = fixture('<listing-item image="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('image: Pickle');
    });
  });

  describe('isPro', () => {
    beforeEach(() => {
      component = fixture('<listing-item is-pro="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('isPro: Pickle');
    });
  });

  describe('price', () => {
    beforeEach(() => {
      component = fixture('<listing-item price="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('price: Pickle');
    });
  });

  describe('region', () => {
    beforeEach(() => {
      component = fixture('<listing-item region="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('region: Pickle');
    });
  });

  describe('subCategory', () => {
    beforeEach(() => {
      component = fixture('<listing-item sub-category="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('subCategory: Pickle');
    });
  });

  describe('title', () => {
    beforeEach(() => {
      component = fixture('<listing-item title="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('title: Pickle');
    });
  });

  describe('url', () => {
    beforeEach(() => {
      component = fixture('<listing-item url="Pickle"></listing-item>');
    });

    it('is rendered', () => {
      expect(component.$('.content').innerText).to.include('url: Pickle');
    });
  });


  describe('slot', () => {
    beforeEach(() => {
      component = fixture('<listing-item>slot content</listing-item>');
    });

    it('is rendered', () => {
      expect(component.innerText).equal('slot content');
    });
  });

  describe('--listing-item-background-color', () => {
    describe('with default', () => {
      beforeEach(() => {
        component = fixture('<listing-item></listing-item>');
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
              listing-item.blue {
                --listing-item-background-color: #03A9F4;
              }
            </style>
            <listing-item class="blue"></listing-item>
          </div>
        `).querySelector('listing-item') as ListingItem;
      });

      it('is set', () => {
        expect(getComputedStyle(component.$('.content')).backgroundColor).equal('rgb(3, 169, 244)');
      });
    });
  });
});

function fixture(tag: string): ListingItem {
  function fixtureContainer(): HTMLElement {
    let div = document.createElement('div');
    div.classList.add('fixture');
    return div;
  }
  let fixture = document.body.querySelector('.fixture') || document.body.appendChild(fixtureContainer());
  fixture.innerHTML = tag;
  return fixture.children[0] as ListingItem;
}
