import {assert, expect} from 'chai';
import * as ColorPageActions from '../redux/colorPage/color-page-actions';
import sinon from 'sinon';
import {Store} from '../store';
global.Store = Store;

describe('myApp', function () {
  it('The application properly loads.', function () {
    require('../app');
  });
});

describe('colorPage', function () {
  it('The color page properly loads.', function () {
    require('../components/app/myApp.js');
  });
});

describe('colorPage', function () {
  it('The color page properly loads.', function () {
    require('../components/colorPage/colorPage.js');
  });
});

describe('descriptionPage', function () {
  it('The description page properly loads.', function () {
    require('../components/descriptionPage/descriptionPage.js');
  });
});

describe('emailPage', function () {
  it('The email page properly loads.', function () {
    require('../components/emailPage/emailPage.js');
  });
});

describe('finishPage', function () {
  it('The finish page properly loads.', function () {
    require('../components/finishPage/finishPage.js');
  });
});

describe('namesPage', function () {
  it('The names page properly loads.', function () {
    require('../components/namesPage/namesPage.js');
  });
});

// describe("app-test.js", () => {
//   let sandbox;
//   before(() => {
//     sandbox = sinon.sandbox.create();
//   });
//
//   it("ColorPageActions loads", () => {
//     // See http://chaijs.com/api/assert/
//     assert(ColorPageActions !== undefined);
//     assert(ColorPageActions !== null);
//   });
//
//   it("Adds an empty value", () => {
//     ColorPageActions.colorEntered()(Store.dispatch, Store.getState);
//     expect(Store.getState().color.colorValue).to.be.undefined;
//   });
//
//   it("Types nothing into the other field", () => {
//     ColorPageActions.colorTyped()(Store.dispatch, Store.getState);
//     expect(Store.getState().color.colorText).to.be.undefined;
//   });
// });
