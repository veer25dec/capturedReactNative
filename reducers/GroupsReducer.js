// @flow

import {
  FETCH_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILED
} from '../actions/types'

const INITIAL_STATE = {
  teams: [],
  isLoading: false,
  error: ''
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_GROUPS:
        return { ...state, isLoading : true, error: ''};
      case FETCH_GROUPS_SUCCESS:
        return { ...state, teams : action.payload, isLoading: false, error : ''};
      case FETCH_GROUPS_FAILED:
          return { ...state, isLoading : false, error : action.payload};
      default:
        return state;
    }
}
