// @flow

import {
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  LOGIN_SUBMIT,
} from '../actions/action-types';

const initialState = {
  appLoginSuccessResult: {},
  isLoading: true,
  error: true,
  isLoggedIn:false,
  email:{},
  password:{},
};

export const getAppLoginSelector = (state : Object) => ({...state.appLogin});

const appLoginReducer = (state : Object = initialState, action : Object) => {
  switch (action.type) {
    case LOGIN_SUBMIT: {
      return {
        isLoading: true,
        error: false,
        // console.log({action.payload});
        isLoggedIn: false,
        email:action.payload.email,
        password:action.payload.password,
      };
    }
    case FETCH_DATA_REQUEST: {
      return {
        isLoading: true,
        error: false,
        appLoginSuccessResult: {},
      };
    }

    case FETCH_DATA_SUCCESS: {
      return {
        isLoading: false,
        error: false,
        // console.log({action.payload});
        isLoggedIn: true,
        password:{},
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default appLoginReducer;
