import {
  FETCH_TOPIC,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILED
} from './types'

import config from '../util/config';

export const fetchTopic = ({ groupId , topicId }) => {
  // TODO : extract API calls out to a seperate class
  console.log('groupId + topicId ', groupId + ' ' + topicId);
  return (dispatch) => {
    dispatch({ type: FETCH_TOPIC});
    fetch(config.API_BASE_URL + config.API_TEAM + groupId + '/coachbook/' + topicId + '?structure=true' , {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }})
      .then((res) => res.json())
      .then(data => handleTopicResponse(dispatch,data))
      .catch( (error) => fetchTopicFailed(dispatch,error));
  };
};


const handleTopicResponse = (dispatch, data) => {
  console.log('handleTopicResponse was called')
  if(data.success == true){
    dispatch({
      type : FETCH_TOPIC_SUCCESS,
      payload: data
    });
  }else{
    fetchTopicFailed(dispatch,'Something went wrong')
  }
};
const fetchTopicFailed = (dispatch, error) => {
  console.log('fetchTopicFailed was called')
  dispatch({
    type : FETCH_TOPIC_FAILED,
    payload: error
  });
};
