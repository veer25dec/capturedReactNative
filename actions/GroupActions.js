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
      .then(data => handleGroupResponse(dispatch,data,groupId))
      .catch( (error) => fetchGroupsFailed(dispatch,error));
  };
};


const handleGroupResponse = (dispatch, data, groupId) => {
  if(data.user){
    dispatch({
      type : FETCH_GROUP_SUCCESS,
      payload: data.user
    });
    dispatch(fetchResources({groupId}))
  }else{
    fetchGroupFailed(dispatch,'Something went wrong')
  }
};
const fetchGroupFailed = (dispatch, error) => {
  console.log('fetchGroupFailed was called')
  dispatch({
    type : FETCH_GROUPS_FAILED,
    payload: error
  });
};

export const fetchResources = ({ groupId }) => {
  // TODO : extract API calls out to a seperate class
  return (dispatch) => {
    dispatch({ type: FETCH_RESOURCES});
    fetch(config.API_BASE_URL + config.API_TEAM + groupId + '/library/books?limit=9&offset=0&order_by=[{"field":"name","direction":"asc"}]' , {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }})
      .then((res) => res.json())
      .then(data => handleResourcesResponse(dispatch,data))
      .catch( (error) => fetchResourcesFailed(dispatch,error));
  };
};

const handleResourcesResponse = (dispatch, data) => {
  if(data.library){
    dispatch({
      type : FETCH_RESOURCES_SUCCESS,
      payload: data
    });

  }else{
    fetchResourcesFailed(dispatch,'Something went wrong')
  }
};
const fetchResourcesFailed = (dispatch, error) => {
  dispatch({
    type : FETCH_RESOURCES_FAILED,
    payload: error
  });
};
