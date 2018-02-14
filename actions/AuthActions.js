import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER,
  APP_LAUNCH,
  APP_LAUNCH_SUCCESS,
  APP_LAUNCH_FAILED
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
    loginUserFailed(dispatch,data.error)
  }
};
const loginUserFailed = (dispatch, error) => {
  dispatch({
    type : LOGIN_USER_FAILED,
    payload: error
  });
};

export const appLaunch = () => {
  return (dispatch) => {
    dispatch({ type: APP_LAUNCH});
    fetch(config.API_BASE_URL + config.API_APP_LAUNCH, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "v_major": 0,
        "v_minor": 77,
        "v_patch": 0,
        "device_type": 1, // An integer corresponding to the device type [UNKNOWN, APPLE, ANDROID]
        "device_model": "react native expo",
        "app": "Hive Learning",
        }),
      })
      .then((res) => res.json())
      .then(data => handleAppLaunchResponse(dispatch,data))
      .catch( (error) => appLaunchFailed(dispatch,error));
  };

  const handleAppLaunchResponse = (dispatch, data) => {
    if(data.user){
      dispatch({
        type : APP_LAUNCH_SUCCESS,
        payload: data
      });
    }else{
      appLaunchFailed(dispatch,data.error)
    }
  };

  const appLaunchFailed = (dispatch, error) => {
    dispatch({
      type : APP_LAUNCH_FAILED,
      payload: error
    });
  };

}
