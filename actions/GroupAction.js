import {
  FETCH_GROUP,
  FETCH_GROUP_SUCCESS,
  FETCH_GROUP_FAILED,
  FETCH_RESOURCES,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILED,
} from './types'

import config from '../util/config';

export const fetchGroup = ({ groupId }) => {
  // TODO : extract API calls out to a seperate class
  return (dispatch) => {
    dispatch({ type: FETCH_GROUP});
    fetch(config.API_BASE_URL + config.API_GROUP + groupId , {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }})
      .then((res) => res.json())
      .then(data => handleGroupResponse(dispatch,data))
      .catch( (error) => fetchGroupsFailed(dispatch,error));
  };
};


const handleGroupResponse = (dispatch, data) => {
  if(data.user){
    dispatch({
      type : FETCH_GROUP_SUCCESS,
      payload: data.user
    });

  }else{
    fetchGroupFailed(dispatch,'Something went wrong')
  }
};
const fetchGroupFailed = (dispatch, error) => {
  dispatch({
    type : FETCH_GROUPS_FAILED,
    payload: error
  });
};

// const fetchResources = ({ group})
