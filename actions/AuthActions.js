import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from './types'

import config from '../util/config';

export const emailChanged = ( text ) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password , navigate}) => {
  // TODO : extract API calls out to a seperate class
  return (dispatch) => {
    dispatch({ type: LOGIN_USER});
    fetch(config.API_BASE_URL + config.API_APP_LOGIN, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'id': email,
        'auth': password,
        }),
      })
      .then((res) => res.json())
      .then(data => handleLoginResponse(dispatch,data,navigate))
      .catch( (error) => loginUserFailed(dispatch,error));
  };
};

const handleLoginResponse = (dispatch, data,navigate) => {
  if(data.user){
    dispatch({
      type : LOGIN_USER_SUCCESS,
      payload: data
    });
    navigate("Home", {title: 'Home'});
  }else{
    loginUserFailed(dispatch,'Something went wrong')
  }
};
const loginUserFailed = (dispatch, error) => {
  dispatch({
    type : LOGIN_USER_FAILED,
    payload: error
  });
};
