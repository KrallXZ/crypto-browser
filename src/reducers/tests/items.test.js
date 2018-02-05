import itemsReducer, { itemsLoadSuccess, itemsLoadFailure, itemsLoadRequest } from '../items'
import {
  ITEMS_LOAD_SUCCESS,
  ITEMS_LOAD_FAILURE,
  ITEMS_LOAD_REQUEST
} from '../../actions'

describe('Items actions', () => {
  it('Should create an action to request items', () => {
    const expectedAction = {
      type: ITEMS_LOAD_REQUEST
    }

    expect(itemsLoadRequest()).toEqual(expectedAction)
  })

  it('Should create an action with items', () => {
    const items = ['item1']
    const expectedAction = {
      type: ITEMS_LOAD_SUCCESS,
      items
    }

    expect(itemsLoadSuccess(items)).toEqual(expectedAction)
  })

  it('Should create an action with error message', () => {
    const message = 'something went wrong'
    const expectedAction = {
      type: ITEMS_LOAD_FAILURE,
      message
    }

    expect(itemsLoadFailure(message)).toEqual(expectedAction)
  })
})

describe('Items reducer', () => {
  it('Should return initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual([])
  })

  it(`Should handle ${ITEMS_LOAD_SUCCESS}`, () => {
    const items = ['item1']
    
    expect(itemsReducer(undefined, itemsLoadSuccess(items))).toEqual(items)
  })

  it(`Should handle ${ITEMS_LOAD_FAILURE}`, () => {
    const errorMessage = "something went wrong"
    const expectedState = {errorMessage}
    
    expect(itemsReducer(undefined, itemsLoadFailure(errorMessage))).toEqual(expectedState)
  })
})