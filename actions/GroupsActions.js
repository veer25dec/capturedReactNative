import {
  FETCH_GROUPS,
  FETCH_GROUPS_SUCCESS,
  FETCH_GROUPS_FAILED
} from './types'

import config from '../util/config';

export const fetchGroups = () => {
  // TODO : extract API calls out to a seperate class
  return (dispatch) => {
    dispatch({ type: FETCH_GROUPS});
    fetch(config.API_BASE_URL + config.API_GROUPS + '?limit=18&offset=0&order_by=[{"field":"viewed", "direction": "desc"}]', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }})
      .then((res) => res.json())
      .then(data => handleGroupsResponse(dispatch,data))
      .catch( (error) => fetchGroupsFailed(dispatch,error));
  };
};


const handleGroupsResponse = (dispatch, data) => {
  if(data.teams){
    dispatch({
      type : FETCH_GROUPS_SUCCESS,
      payload: data
    });
  }else{
    fetchGroupsFailed(dispatch,'Something went wrong')
  }
};
const fetchGroupsFailed = (dispatch, error) => {
  dispatch({
    type : FETCH_GROUPS_FAILED,
    payload: error
  });
};
