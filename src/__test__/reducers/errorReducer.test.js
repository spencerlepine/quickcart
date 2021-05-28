import reducer from '../../reducers/error'
import * as types from '../../constants/actionTypes'

describe('errors reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, "")).toEqual("")
  })

  it('should handle SET_CURRENT_USER', () => {
    const errorObj = {
      message: "Something went wrong",
      type: "danger",
      title: "Error",
    }

    expect(
      reducer("", {
        type: types.SET_CURRENT_ERROR,
        payload: errorObj
      })
    ).toEqual(
      errorObj
    )
  })
})