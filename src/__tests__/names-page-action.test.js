import {assert, expect} from 'chai';
import * as NamePageActions from '../redux/namesPage/names-page-actions';
import sinon from 'sinon';

describe("names-page-actions.test.js", () => {
  let sandbox;
  before(() => {
    sandbox = sinon.sandbox.create();
  });

  it("NamePageActions loads", () => {
    // See http://chaijs.com/api/assert/
    assert(NamePageActions !== undefined);
    assert(NamePageActions !== null);
  });

  it("Form initialized correctly", () => {
    let initialState = {
			firstName: '',
			lastName: '',
			errorTextFN: 'Name is required.',
			errorTextLN: 'Name is required.',
			validationError: false
		};

    store.dispatch(NamePageActions.reset());
    expect(store.getState().names).to.deep.equal(initialState);
  });

  it("Enters a name value", ('testFirstName') => {
    NamePageActions.firstNameEnter({
			...initialState,
			type: FIRSTNAME_ENTERED,
			name: 'testFirstName',
			errorText: undefined})(store.dispatch, store.getState);
    expect(store.getState().names.errorTextFN)..to.not.be.empty;
  });

  it("Enters a name value", ('testLastName') => {
    NamePageActions.lastNameEnter({type: FIRSTNAME_ENTERED,
			name: 'testLastName',
			errorText: undefined})(store.dispatch, store.getState);
    expect(store.getState().names.errorTextLN)..to.not.be.empty;
  });
});
