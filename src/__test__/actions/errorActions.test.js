import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as errorActions from '../../actions/error'
import * as types from '../../constants/actionTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('errorActions', () => {
  it('triggers SET_CURRENT_ERROR in error reducer', () => {
    
    const store = mockStore({});
    const errorObj = {
      message: "Something went wrong",
      type: "danger",
      title: "Error",
    }

    const expectedActions = [
      { type: types.SET_CURRENT_ERROR, payload: errorObj },
    ]

    const dispatchedStore = store.dispatch(
        errorActions.setError("Error", "Something went wrong", "danger")
    );
    return dispatchedStore.then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
  })
})