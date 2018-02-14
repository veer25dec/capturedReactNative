// @flow

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '' ,
  loginResponse: null,
  error: '',
  isLoading: false,
  loggedIn: null
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email : action.payload};
      case PASSWORD_CHANGED:
        return { ...state, password : action.payload};
      case LOGIN_USER:
          return { ...state, isLoading : true, error: ''};
      case LOGIN_USER_SUCCESS:
        return { ...state, loginResponse : action.payload, error: '',isLoading : false, password : '', loggedIn : true};
      case LOGIN_USER_FAILED:
        return { ...state, error : action.payload,isLoading : false};
      default:
        return state;
    }
}
